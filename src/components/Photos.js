import React, { useEffect, useState } from 'react';
import {
  useLocation,
  useNavigate
} from "react-router-dom";
import { useSelector } from 'react-redux';
import cn from 'classnames';

import styles from './styles.module.css';

const Photos = () => {
  const [photos, setPhotos] = useState(null);
  const [viewPhoto, setViewPhoto] = useState(null);
  const [isPhotoOpen, setIsPhotoOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const getPhotos = async () => {
      const result = await fetch(`https://jsonplaceholder.typicode.com/photos?albumId=${location?.state?.id}`)
        .then(response => response.json())
        .then(data => data)
        .catch(err => console.error(err)); //CHECK THIS

      setPhotos(result);
    }

    getPhotos();
  }, []);

  const handleOnClick = (photo) => {
    setViewPhoto(photo.url)
    setIsPhotoOpen(true)
  };

  const closeOverlay = () => {
    setIsPhotoOpen(false)
  };

  const keepOverlay = (event) => {
    event.preventDefault()
  };

  if (!photos) {
    return null;
  };
  console.log('PHOTOS', photos)
  return (//add image component //add title component
    <div>
      <h1>{location.state.albumTitle}</h1>
      <div className={styles.thumbnailWrapper}>
        {photos.map((photo) => (
          <img src={photo.thumbnailUrl} alt="test" key={photo.id} onClick={() => handleOnClick(photo)} />
        ))}
      </div>
      {isPhotoOpen &&
        <>
          <div className={styles.photoViewerWrapper} onClick={closeOverlay}>
          </div>
          <img src={viewPhoto} className={styles.photoViewer} alt="test" onClick={keepOverlay} />
        </>}
    </div>
  );
};

export default Photos;
