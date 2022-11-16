import React, { useEffect, useState } from 'react';
import { useLocation } from "react-router-dom";

import Title from '../Title';
import styles from './styles.module.css';

const Photos = () => {
  const [photos, setPhotos] = useState(null);
  const [viewPhoto, setViewPhoto] = useState(null);
  const [isPhotoOpen, setIsPhotoOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const getPhotos = async () => {
      const result = await fetch(`https://jsonplaceholder.typicode.com/photos?albumId=${location?.state?.id}`)
        .then(response => {
          if (!response.ok) {
            return Promise.reject(response.status);
          }

          return response.json()
        })
        .catch(err => console.error('Error:', err));

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

  return (
    <div>
      <Title margin center>{location.state.albumTitle}</Title>
      <span className={styles.photoSubTitle}>{photos.length} Photos</span>

      <div className={styles.thumbnailWrapper}>
        {photos.map((photo) => (
          <img src={photo.thumbnailUrl} alt="test" key={photo.id} onClick={() => handleOnClick(photo)} />
        ))}
      </div>

      {isPhotoOpen &&
        <>
          <div className={styles.photoViewerWrapper} onClick={closeOverlay}></div>
          <img src={viewPhoto} className={styles.photoViewer} alt="test" onClick={keepOverlay} />
        </>}
    </div>
  );
};

export default Photos;
