import React, { useEffect, useState } from 'react';
import {
  useNavigate
} from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux'

import Card from '../Card';
import { setAlbumName } from '../../features/userSlice';
import styles from './styles.module.css';

const Albums = () => {
  const [albums, setAlbums] = useState(null);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const userId = useSelector(state => state.userId)

  useEffect(() => {
    const getAlbums = async () => {
      const result = await fetch(`https://jsonplaceholder.typicode.com/albums?userId=${userId}`)
        .then(response => {
          if (!response.ok) {
            return Promise.reject(response.status);
          }

          return response.json()
        })
        .catch(err => console.error('Error:', err));

      setAlbums(result);
    }

    getAlbums();
  }, []);

  const handleOnClick = (albumTitle, id) => {
    dispatch(setAlbumName(albumTitle));
    const albumStripped = albumTitle.replace(/\s+/g, '');
    navigate(`/user-profile/${albumStripped}`, { state: { albumTitle, id } })
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
          onClick={() => handleOnClick(title, id)}
        />
      ))}
    </div >
  )
};

export default Albums;
