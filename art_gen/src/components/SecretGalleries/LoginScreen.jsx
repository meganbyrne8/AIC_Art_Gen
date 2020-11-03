import Axios from 'axios';
import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { baseURL } from '../../services/constants';
import axios from 'axios';


export default function LoginScreen(props) {
  const [password, setPassword] = useState('')
  const [isSet, setIsSet] = useState(false)
  const [gallerySet, setGallerySet] = useState('')
  const [galleryArr, setGalleryArr] = useState([])

  const history = useHistory()

  const testURL = `${baseURL}/${props.url}`

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

  useEffect(() => {
    const getGallery = async () => { 
      const response = await axios.get(testURL, {
        headers: {
          Authorization: `Bearer ${process.env.REACT_APP_AIRTABLE_KEY}`,
        },
      });
      setGalleryArr(response.data.records);
    }
    getGallery();
  }, [])

  const displayGallery = galleryArr.map((works) => (
    <div key={works.id}>
      <div>
        <img src={works.fields.url} alt={works.fields.title} />
      </div>

      <div>
        <h2>{works.fields.title}</h2>
        <h3 >{works.fields.name}</h3>
        <p >{works.fields.date}</p>
        <p >{works.fields.medium}</p>
        <p >{works.fields.copyright}</p>
        <p>{works.fields.description}</p>
      </div>
    </div>
  ))



  return (
    <div>
      {displayGallery}

      <form onChange={handleChange} >
        <label htmlFor='gallery-password'>Enter Secret Password:</label><br />
        <input type='text' id='gallery-password' />
      </form>
      <button onClick={handlePassword}>Submit Form</button>

    </div>
  )
}
