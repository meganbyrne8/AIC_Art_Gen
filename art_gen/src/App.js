import React, { useState, useEffect } from "react";
import axios from "axios";
import Nav from "./components/Layout/Nav";
import Feature from "./components/Feature/Feature";
import Gallery from "./components/Gallery/Gallery";
import "./App.css";

function App() {
  const [imageList, setImageList] = useState([]);
  const [feature, setFeature] = useState(0);
  const [page, setPage] = useState(2);
  const [loading, setLoading] = useState(true);

  const generateGallery = () => {
    setLoading(true);
    axios(
      `https://aggregator-data.artic.edu/api/v1/artworks?page=` +
        page +
        `&limit=20`
    ).then((res) => {
      let formattedData = res.data.data
        .filter((image) => image.image_id != null)
        .map((image) => {
          let description =
            image.description != undefined
              ? image.description.replace(/(<([^>]+)>)/gi, "")
              : "";
          return {
            title: image.title,
            name: image.artist_display,
            date: image.date_display,
            description: description,
            medium: image.medium_display,
            copyright: image.copyright_notice,
            url:
              `https://www.artic.edu/iiif/2/` +
              image.image_id +
              `/full/full/0/default.jpg`,
            artId: `https://www.artic.edu/artworks/` + image.id,
          };
        });
      setImageList(formattedData.slice(0, 10));
      setPage(page + 1);
      setLoading(false);
    });
  };

  const changeFeature = (x) => {
    setFeature(x);
  };

  useEffect(() => {
    generateGallery();
  }, []);

  return (
    <div className="App">
      <Nav />
      <h1>Hi!!!</h1>
      <Feature featured={imageList[feature]} />
      <Gallery
        galleryList={imageList}
        galleryRefresh={generateGallery}
        changeFeature={changeFeature}
      />
    </div>
  );
}

export default App;
