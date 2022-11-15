import React, { useEffect, useState } from 'react';
import {
  useNavigate,
} from "react-router-dom";
import cn from 'classnames';
import { useDispatch, useSelector } from 'react-redux';

import { setUserId, setUserName, saveFavorites, removeFavorites } from '../features/userSlice';
import Title from './Title';
import Card from './Card';
import styles from './styles.module.css';

const Users = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const getFavorites = useSelector(state => state.favorites);
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    if (!userData) {
      const getData = async () => {
        const result = await fetch('https://jsonplaceholder.typicode.com/users')
          .then(response => {
            if (!response.ok) {
              return Promise.reject(response.status);
            }

            return response.json()
          })
          .catch(err => console.error('Error:', err));

        setUserData(result)
      };

      getData();
    }
  }, []);

  const handleOnClick = (id, name) => {
    dispatch(setUserId({ id }));
    dispatch(setUserName({ name }));
    navigate('/user-profile');
  };

  const handleAddFavorite = (id) => {
    if (getFavorites.includes(id)) {
      dispatch(removeFavorites({ id }));
      return;
    }

    dispatch(saveFavorites({ id }));
  }

  if (!userData) {
    return null;
  };

  return (
    <>
      <Title margin>Favorites</Title>
      <div className={cn(styles.divider, styles.transparent)} />

      <div className={styles.cardList}>
        {userData.filter(data => getFavorites.includes(data.id)).map((userData) => (
          <Card
            userName={userData.name}
            company={userData.company?.name}
            email={userData.email}
            id={userData.id}
            onClick={() => handleOnClick(userData.id, userData.name)}
            key={userData.id}
            addFavorite={() => handleAddFavorite(userData.id)}
          />
        ))}
      </div>

      <Title margin>Users</Title>
      <div className={cn(styles.divider, styles.transparent)} />

      <div className={styles.cardList}>
        {userData.filter(data => !getFavorites.includes(data.id)).map((userData) => (
          <Card
            userName={userData.name}
            company={userData.company?.name}
            email={userData.email}
            id={userData.id}
            onClick={() => handleOnClick(userData.id, userData.name)}
            key={userData.id}
            addFavorite={() => handleAddFavorite(userData.id)}
          />
        ))}
      </div>
    </>
  )
};

export default Users;
