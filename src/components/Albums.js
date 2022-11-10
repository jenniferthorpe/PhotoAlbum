import React, { useEffect, useState } from 'react';
import {
  useLocation,
  useNavigate
} from "react-router-dom";
import Card from './Card';

import styles from './styles.module.css';

const Albums = () => {
  const [albums, setAlbums] = useState(null);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const userId = location.search.replace('?userId=', '');

    const getAlbums = async () => {
      const result = await fetch(`https://jsonplaceholder.typicode.com/albums?userId=${userId}`)
        .then(response => response.json())
        .then(data => data)
        .catch(err => console.error(err)); //CHECK THIS

      setAlbums(result);
    }

    getAlbums();
  }, []);

  const handleOnClick = () => {
    navigate('/photos');
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
          onClick={handleOnClick}
        />
      ))}
    </div >
  )
};

export default Albums;
