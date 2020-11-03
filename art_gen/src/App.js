import React, { useState, useEffect } from "react";
import { Route } from 'react-router-dom';
import { ThemeProvider } from "styled-components";
import { GlobalStyles } from "./global";
import { theme } from "./theme";
import { PacmanLoader } from "react-spinners";
import axios from "axios";
import Feature from "./components/Feature/Feature";
import Gallery from "./components/Gallery/Gallery";
import Burger from "./components/Layout/Burger/Burger";
import Menu from "./components/Layout/Menu/Menu";
import MamaGallery from './components/SecretGalleries/MamaGallery'
import BabyGallery from './components/SecretGalleries/Baby_Gallery'
import SecretReturn from './components/SecretGalleries/Secret_Return'
import "./App.css";
import { BGalleryParent } from './App.styled'

function App() {
  const [imageList, setImageList] = useState([]);
  const [feature, setFeature] = useState(0);
  const [page, setPage] = useState(2);
  const [loading, setLoading] = useState(true);
  const [open, setOpen] = useState(false);

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
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <div className="App">

        <Route exact path='/'>
          <div>
            <Burger open={open} setOpen={setOpen} />
            <Menu open={open} setOpen={setOpen} />
          </div>
          <div>
            <PacmanLoader color="red" loading={loading} />
          </div>

          <div>
            <Feature featured={imageList[feature]} />
            <Gallery
              galleryList={imageList}
              galleryRefresh={generateGallery}
              changeFeature={changeFeature}
              />
          </div>
        </Route>

        <Route exact path='/secret-galleries'>
          <div>
            <Burger open={open} setOpen={setOpen} />
            <Menu open={open} setOpen={setOpen} />
          </div>

          <div className='loader-pacman'>
            <PacmanLoader color="red" loading={loading} />
          </div>

          <div>
            <MamaGallery galleryList={imageList}/>
          </div>
        </Route>

        <Route exact path="/secret-galleries/:id">
          <div>
            <Burger open={open} setOpen={setOpen} />
            <Menu open={open} setOpen={setOpen} />
          </div>

          <div>
            <PacmanLoader color="red" loading={loading} />
          </div>

          <BGalleryParent>
            <BabyGallery galleryList={imageList} setLoading={setLoading}/>
          </BGalleryParent>
        </Route>
        
        <Route path="/secret-galleries/thief" render={() => <SecretReturn  />} />
      </div>
    </ThemeProvider>
  );
}

export default App;
