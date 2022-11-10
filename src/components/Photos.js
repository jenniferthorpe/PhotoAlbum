import React, { useEffect, useState } from 'react';
import {
  useLocation,
  useNavigate
} from "react-router-dom";
import Card from './Card';
import { useSelector } from 'react-redux'

import styles from './styles.module.css';

const Photos = () => {
  const [photos, setPhotos] = useState(null);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const getPhotos = async () => {
      const result = await fetch(`https://jsonplaceholder.typicode.com/photos?albumId=${location.state.id}`)
        .then(response => response.json())
        .then(data => data)
        .catch(err => console.error(err)); //CHECK THIS

      setPhotos(result);
    }

    getPhotos();
  }, []);

  console.log('PHOTOS', photos)
  if (!photos) {
    return null;
  };

  return (//add image component
    <div>
      <h1>{location.state.albumTitle}</h1>
      <img src='https://via.placeholder.com/150/2edde0' alt="test" />
      {photos.map((photo) => {
        { console.log('URL', photo.thumbnailUrl) }
      })}
    </div>
  )
};

export default Photos;
