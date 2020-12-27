import React, { useState, useEffect } from "react";
import LoginScreen from "./LoginScreen";
import SecretReturn from "./Secret_Return";
import { MGParent, OptionParent, MGOptionLabel } from "./MamaGallery.styled";

export default function MamaGallery(props) {
  const [url, setURL] = useState(null);
  const [galleryArr, setGalleryArr] = useState([]);
  const [generatedComponent, setGeneratedComponent] = useState(false);

  const setArray = () => {
    let testArr = document.getElementsByTagName("option");
    let arr = [];
    for (let i = 0; i < testArr.length; i++) {
      arr.push(testArr[i].value);
    }
    setGalleryArr(arr);
  };

  const handleChange = (e) => {
    const { value } = e.target;
    setURL(value);
    setGeneratedComponent(true);
  };

  useEffect(() => {
    setArray();
  }, [url]);

  return (
    <MGParent>
      <OptionParent>
        <MGOptionLabel htmlFor="gallery-choice">Choose a Gallery</MGOptionLabel>
        <select
          id="gallery-choice"
          name="gallery-choice"
          defaultValue="default"
          onChange={handleChange}
        >
          <option className="galleries" disabled value="default">
            --Select a Gallery--
          </option>
          <option value="Tim_Gallery">Sllop</option>
          <option value="cake_eyez">CakeEyes</option>
          <option value="baptisvs">Baptisvs</option>
        </select>
      </OptionParent>

      <div>
        {generatedComponent ? <LoginScreen url={url} /> : <SecretReturn />}
      </div>
    </MGParent>
  );
}
