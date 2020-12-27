import axios from "axios";
import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { baseURL } from "../../services/constants";
import {
  DisplayForm,
  DisplayGallery,
  DisplayIMG,
  FormInput,
  FormLabel,
  SubmitButton,
} from "./LoginScreen.styled";

export default function LoginScreen(props) {
  const [password, setPassword] = useState("");
  const [isSet, setIsSet] = useState(false);
  const [gallerySet, setGallerySet] = useState("");
  const [galleryArr, setGalleryArr] = useState([]);

  const testURL = `${baseURL}/${props.url}`;

  const handleChange = (e) => {
    e.preventDefault();
    const { value } = e.target;
    setPassword((prevState) => [...prevState, value]);
    setGallerySet((prevState) => [...prevState, props.url]);
  };

  const setURL = gallerySet;

  const handlePassword = () => {
    password === setURL ? setIsSet(true) : setIsSet(false);
  };

  useEffect(() => {
    const getGallery = async () => {
      const response = await axios.get(testURL, {
        headers: {
          Authorization: `Bearer ${process.env.REACT_APP_AIRTABLE_KEY}`,
        },
      });
      setGalleryArr(response.data.records);
    };
    getGallery();
  }, [isSet]);

  return (
    <div>
      {isSet &&
        galleryArr.map((works) => (
          <DisplayGallery key={works.id}>
            <div>
              <DisplayIMG src={works.fields.url} alt={works.fields.title} />
            </div>

            <div>
              <h2>{works.fields.title}</h2>
              <h3>{works.fields.name}</h3>
              <p>{works.fields.date}</p>
              <p>{works.fields.medium}</p>
              <p>{works.fields.copyright}</p>
              <p>{works.fields.description}</p>
            </div>
          </DisplayGallery>
        ))}
      {!isSet && (
        <>
          <DisplayForm onSubmit={handleChange}>
            <FormLabel htmlFor="gallery-password">
              What Should Go Here?
            </FormLabel>
            <FormInput type="text" id="gallery-password" />
          </DisplayForm>
          <SubmitButton onClick={handlePassword}>Click Me</SubmitButton>
        </>
      )}
    </div>
  );
}
