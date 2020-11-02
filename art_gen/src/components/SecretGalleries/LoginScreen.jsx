import React, { useState } from 'react';
import { Route, Redirect, useHistory } from 'react-router-dom';
import BabyGallery from './Baby_Gallery';
import SecretReturn from './Secret_Return';

export default function LoginScreen(props) {
  const [password, setPassword] = useState('')
  const [isSet, setIsSet] = useState(false)
  const [gallerySet, setGallerySet] = useState('')

  const history = useHistory()

  const handleChange = (e) => { 
    e.preventDefault();
    const { value } = e.target;
    setPassword((prevState) => [...prevState, value]);
    setGallerySet((prevState) => [...prevState, props.url]);
  }

  const setURL = gallerySet; 

  const handlePassword = () => {
    password === setURL ? setIsSet(true) : setIsSet(false)
    history.push(`/secret-galleries/${props.url}`)
  }


  return (
    <div>
      <form onChange={handleChange} >
        <label htmlFor='gallery-password'>Enter Secret Password:</label><br />
        <input type='text' id='gallery-password' />
      </form>
      <button onClick={handlePassword}>Submit Form</button>

    </div>
  )
}
