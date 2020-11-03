import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { baseURL }  from '../../../services/constants'
import axios from 'axios';

export default function PostGallery(props) {
  const [title, setTitle] = useState('')
  const [name, setName] = useState('')
  const [date, setDate] = useState('')
  const [medium, setMedium] = useState('')
  const [copyright, setCopyright] = useState('')
  const [description, setDescription] = useState('')
  const [url, setURL] = useState('')
  

  const { id } = useParams()
  const testURL = `${baseURL}/${id}`

  const fields = {
    title: title,
    name: name,
    date: date,
    medium: medium,
    copyright: copyright,
    description: description,
    url: url
  }


  const handleManyFields = () => { 
    let newArr = []
    let newVariable = document.querySelectorAll('#choosy-work')

    for (let i = 0; i < newVariable.length; i++) { 
      if (newVariable[i].checked === true) { 
        newArr.push(newVariable[i]);
      }
    };
    if (newArr.length > 1) alert('Please only make one selection at a time! We are working on allowing multiple selections at once now');
  }

  const handlePost = async (e) => {
    e.preventDefault();

    await axios.post(
      testURL, { fields }, {
      headers: {
        Authorization: `Bearer ${process.env.REACT_APP_AIRTABLE_KEY}`,
        "Content-Type": "application/json",
      },
    });
  };
  

  return (
    <div>
      <form>
        {
          props.galleryList.map((works) => (
            <div key={works.title}>

              <input
                type="checkbox"
                name="choosy-work"
                id="choosy-work"
                value="ChosenWork"
                onChange={() => {
                  setTitle(works.title != null ? works.title : '');
                  setName(works.name != null ? works.name : '');
                  setDate(works.date != null ? works.date : '');
                  setMedium(works.medium != null ? works.medium : '');
                  setCopyright(works.copyright != null ? works.copyright : '');
                  setDescription(works.description != null ? works.description : '');
                  setURL(works.url != null ? works.url : '');
                  handleManyFields();
                }}
              />
                <label htmlFor="choosy-work">
                  Would you like to add this to the {id} gallery?
                </label>
              <label htmlFor="title">Title:</label>
              <input 
                name="title"
                type="text"
                value={works.title}
              />
              <label htmlFor="name">Name:</label>
              <input
                name="name"
                type="text"
                value={works.name}
              />
              <label htmlFor="date"></label>
              <input
                name="date"
                type="text"
                value={works.date}
              />
              <label htmlFor="medium"></label>
              <input
                name="medium"
                type="text"
                value={works.medium}
              />
              <label htmlFor="copyright"></label>
              <input
                name="copyright"
                type="text"
                value={works.copyright}
              />
              <label htmlFor="description"></label>
              <input
                name="description"
                type="text"
                value={works.description}
              />
              <img src={works.url} alt={works.title} width="500" />
              <button
                type="submit"
                onClick={handlePost}>Fry Me Cap'n</button>
            </div>
          ))
        }
      </form>
    </div>
  )
}
