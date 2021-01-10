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
  const { galleryArr, setLoading } = props;

  console.log(galleryArr);
  let galleryList = galleryArr.fields;

  return (
    <GalleryDisplay>
      <FormContainerParent>
        {postWork ? (
          <PostGallery galleryList={galleryArr} setLoading={props.setLoading} />
        ) : null}
      </FormContainerParent>

      <FormContainerChild>
        {galleryArr.map((x, k) => (
          <div key={k.id}>
            <h3>{x.fields.title}</h3>
            <h5>{x.fields.name}</h5>
            <p>{x.fields.description}</p>
            <p>{x.fields.medium}</p>
            <p>{x.fields.date}</p>
          </div>
        ))}
      </FormContainerChild>
    </GalleryDisplay>
  );
}
