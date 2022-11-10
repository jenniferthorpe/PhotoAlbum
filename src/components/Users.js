import React, { useEffect, useState } from 'react';
import {
  useNavigate,
} from "react-router-dom";
import Card from './Card';
import cn from 'classnames';

import styles from './styles.module.css';

const Users = () => {
  const navigate = useNavigate();
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    if (!userData) {
      const getData = async () => {
        const result = await fetch('https://jsonplaceholder.typicode.com/users')
          .then(response => response.json())

        setUserData(result)
      }

      getData();
    }
  }, []);

  const handleOnClick = (id) => {
    navigate(`/user?userId=${id}`)
  };

  if (!userData) {
    return null;
  };

  return (
    <>
      <h1>Favorites</h1>
      <div className={cn(styles.divider, styles.transparent)} />

      <h1>Users</h1>
      <div className={cn(styles.divider, styles.transparent)} />
      <div className={styles.cardList}>
        {userData.map((userData) => (
          <Card
            userName={userData.name}
            company={userData.company?.name}
            email={userData.email}
            onClick={() => handleOnClick(userData.id)}
            key={userData.id}
          />
        ))}
      </div>
    </>
  )
};

export default Users;
