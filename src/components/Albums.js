import React, { useEffect, useState } from 'react';
import {
  useLocation,
  useNavigate
} from "react-router-dom";
import { useSelector } from 'react-redux'

import Card from './Card';
import Photos from './Photos';
import styles from './styles.module.css';

const Albums = () => {
  const [albums, setAlbums] = useState(null);
  const navigate = useNavigate();
  const userId = useSelector((state) => state.userId)

  useEffect(() => {
    const getAlbums = async () => {
      const result = await fetch(`https://jsonplaceholder.typicode.com/albums?userId=${userId}`)
        .then(response => response.json())
        .then(data => data)
        .catch(err => console.error(err)); //CHECK THIS

      setAlbums(result);
    }

    getAlbums();
  }, []);

  const handleOnClick = (albumTitle, id) => {
    navigate('/photos', { state: { albumTitle, id } })
  };

  if (!albums) {
    return null;
  };

  return (
    < div className={styles.cardList} >
      {albums.map(({ title, id }) => (
        <Card
          albumName={title}
          key={id}
          onClick={() => handleOnClick(title, id)} //Title might not be needed as an arg. Get from api?
        />
      ))}
    </div >
  )
};

export default Albums;
