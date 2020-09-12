import React from "react";
import { GalleryImageSingle, TempImg } from "./Gallery.styled";

export default function Image(props) {
  const { changeFeature, src, title, index } = props;

  const updateFeature = () => {
    changeFeature(index);
  };

  return (
    <GalleryImageSingle>
      <TempImg src={src} alt={title} onClick={updateFeature} />
    </GalleryImageSingle>
  );
}
