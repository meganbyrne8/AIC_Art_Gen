import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { baseURL } from '../../services/constants';
import { FaRegPlusSquare } from "react-icons/fa";
import PostGallery from './CRUD_Galleries/Post_Gallery'

export default function BabyGallery(props) {
  const [gallery, setGallery] = useState([]);
  const [fetchGalleries, setFetchGalleries] = useState(false);
  const [postWork, setPostWork] = useState(true)
  

  const { id } = useParams();
  const airTableURL = `${baseURL}/${id}?api_key=${process.env.REACT_APP_AIRTABLE_KEY}`;
  

  useEffect(() => {
    const getGalleries = async () => {
      const response = await axios.get(airTableURL);
      setGallery(response.data.records);
      gallery.length > 0 ? setFetchGalleries(true) : setFetchGalleries(false); 
    }
    getGalleries();
  }, [id]);

  const displayRecords = gallery.map((works) => (
    <div key={works.id}>
      <h2>{works.fields.title}</h2>
      <h3 >{works.fields.name}</h3>
      <p >{works.fields.date}</p>
      <p >{works.fields.medium}</p>
      <p >{works.fields.copyright}</p>
      <p>{works.fields.description}</p>
    </div>
  ));



  return (
    <div>
      <div>
        <FaRegPlusSquare />
        {postWork ? <PostGallery galleryList={props.galleryList} setLoading={props.setLoading}/> : <></>}
      </div>

      <div>{displayRecords}</div>
    </div>
  );
}
