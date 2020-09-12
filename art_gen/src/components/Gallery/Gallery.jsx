import React from "react";
import Image from "./Image";

export default function Gallery(props) {
  const { galleryList, changeFeature, galleryRefresh } = props;

  if (galleryList === undefined) {
    return <div>Loading</div>;
  } else {
    return (
      <div>
        <div>
          {galleryList.map((image, index) => (
            <Image
              src={image.url}
              alt={image.title}
              index={index}
              changeFeature={changeFeature}
            />
          ))}
        </div>

        <div>
          <button onClick={galleryRefresh}>Create New Gallery</button>
        </div>
      </div>
    );
  }
}
