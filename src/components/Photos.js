import React, { useEffect, useState } from 'react';
import {
  useLocation,
  useNavigate
} from "react-router-dom";
import Card from './Card';

import styles from './styles.module.css';

const Photos = () => {
  const [albums, setAlbums] = useState(null);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const userId = location.search.replace('?userId=', '');

    console.log('userId', userId)
    const getAlbums = async () => {
      const result = await fetch(`https://jsonplaceholder.typicode.com/photos?albumId=${userId}`)
        .then(response => response.json())
        .then(data => console.log('data', data))
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
    <></>
  )
};

export default Photos;
