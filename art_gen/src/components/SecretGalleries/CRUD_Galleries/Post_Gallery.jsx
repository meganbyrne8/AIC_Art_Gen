import React, { useState } from "react";
import { useParams, useHistory } from "react-router-dom";
import { baseURL } from "../../../services/constants";
import axios from "axios";
import {
  IndivGalleryStyles,
  InputFields,
  FormLabel,
  FormInput,
  DisplayRecords,
  DisplayOptions,
  SubmitButton,
  ImageSizing,
  CheckboxParent,
  CheckboxInput,
  CheckboxLabel,
  SubmitDiv,
  CheckboxDiv,
  PhotoDiv,
} from "../GalleryStyles.styled";

export default function PostGallery(props) {
  const [galleryInfo, setGalleryInfo] = useState({
    title: "",
    name: "",
    date: "",
    medium: "",
    copyright: "",
    description: "",
    url: "",
  });

  const { id } = useParams();
  const history = useHistory();
  const testURL = `${baseURL}/${id}`;

  const fields = galleryInfo;

  const handlePost = async () => {
    await axios.post(
      testURL,
      { fields },
      {
        headers: {
          Authorization: `Bearer ${process.env.REACT_APP_AIRTABLE_KEY}`,
          "Content-Type": "application/json",
        },
      }
    );
  };

  return (
    <DisplayRecords>
      <DisplayOptions>
        {props.galleryList.map((works) => (
          <IndivGalleryStyles key={works.title}>
            <InputFields>
              <FormLabel htmlFor="title">Title:</FormLabel>
              <FormInput name="title" type="text" value={works.title} />

              <FormLabel htmlFor="name">Name:</FormLabel>
              <FormInput name="name" type="text" value={works.name} />

              <FormLabel htmlFor="date">Date:</FormLabel>
              <FormInput name="date" type="text" value={works.date} />

              <FormLabel htmlFor="medium">Medium:</FormLabel>
              <FormInput name="medium" type="text" value={works.medium} />

              <FormLabel htmlFor="copyright">Copyright:</FormLabel>
              <FormInput name="copyright" type="text" value={works.copyright} />

              <FormLabel htmlFor="description">Description:</FormLabel>
              <FormInput
                name="description"
                type="text"
                value={works.description}
              />

              <CheckboxParent>
                <CheckboxDiv>
                  <CheckboxLabel htmlFor="choosy-work">
                    Would you like to add this to the {id} gallery?
                  </CheckboxLabel>
                  <CheckboxInput
                    type="checkbox"
                    name="choosy-work"
                    id="choosy-work"
                    value="ChosenWork"
                    onChange={() => {
                      setGalleryInfo({
                        title: works.title,
                        name: works.name,
                        date: works.date,
                        medium: works.medium,
                        copyright: works.copyright,
                        description: works.description,
                        url: works.url,
                      });
                    }}
                  />
                </CheckboxDiv>
                <SubmitDiv>
                  <SubmitButton
                    type="submit"
                    onClick={() => {
                      handlePost();
                      alert(
                        "Your piece has been submitted to the gallery board for review"
                      );
                      history.push("/secret-galleries/:id");
                    }}
                  >
                    Add To Gallery
                  </SubmitButton>
                </SubmitDiv>
              </CheckboxParent>
            </InputFields>

            <PhotoDiv>
              <ImageSizing src={works.url} alt={works.title} width="500" />
            </PhotoDiv>
          </IndivGalleryStyles>
        ))}
      </DisplayOptions>
    </DisplayRecords>
  );
}
