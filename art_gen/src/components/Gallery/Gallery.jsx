import React from "react";
import {
  GalleryParent,
  GalleryImagesParent,
  GalleryImageSingle,
  TempImg,
} from "./Gallery.styled";
import { FeatureButton } from "../Feature/Feature.styled";
import Image from "./Image";

export default function Gallery(props) {
  const { galleryList, changeFeature, galleryRefresh } = props;

  if (galleryList === undefined) {
    return <div>Loading</div>;
  } else {
    return (
      <GalleryParent>
        <GalleryImagesParent>
          {galleryList.map((image, index) => (
            <Image
              src={image.url}
              alt={image.title}
              index={index}
              changeFeature={changeFeature}
            />
          ))}
        </GalleryImagesParent>

        <div>
          <FeatureButton onClick={galleryRefresh}>
            Create New Gallery
          </FeatureButton>
        </div>
      </GalleryParent>
    );
  }
}
