import React, { useEffect, useState } from "react";
import { baseURL } from "../../services/constants";
import PostGallery from "./CRUD_Galleries/Post_Gallery";
import {
  GalleryDisplay,
  FormContainerParent,
  FormContainerChild,
} from "./BabyGallery.styled";

export default function BabyGallery(props) {
  const [postWork, setPostWork] = useState(false);

  let galleryList = props.galleryList;

  return (
    <GalleryDisplay>
      <FormContainerParent>
        {postWork ? (
          <PostGallery
            galleryList={galleryList}
            setLoading={props.setLoading}
          />
        ) : null}
      </FormContainerParent>

      <FormContainerChild>
        {galleryList.map((x, k) => (
          <>
            <h3 key={k.title}>{x.title}</h3>
            <img key={k.copyright} src={x.url} alt={x.title} />
            <p key={k.description}>{x.description}</p>
          </>
        ))}
      </FormContainerChild>
    </GalleryDisplay>
  );
}
