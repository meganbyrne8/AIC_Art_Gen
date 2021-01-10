import axios from "axios";
import React, { useEffect, useState } from "react";
import { FaRegPlusSquare } from "react-icons/fa";
import { baseURL } from "../../services/constants";
import {
  DisplayForm,
  DisplayGallery,
  DisplayIMG,
  FormInput,
  FormLabel,
  SubmitButton,
} from "./LoginScreen.styled";
import BabyGallery from "./Baby_Gallery";

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
      <FaRegPlusSquare />
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
      {isSet && <BabyGallery galleryArr={galleryArr} />}
    </div>
  );
}
