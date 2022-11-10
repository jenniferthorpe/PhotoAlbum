import React, { useEffect, useState } from 'react';
import {
  useLocation
} from "react-router-dom";
import Albums from './Albums';

import styles from './styles.module.css';

const UserDetails = () => {
  const [userData, setUserData] = useState(null)
  const location = useLocation()

  useEffect(() => {
    console.log('location.search', location.search)
    const userId = location.search.replace('?userId=', '');

    const getData = async () => {
      const result = await fetch(`https://jsonplaceholder.typicode.com/users/${userId}`)
        .then(response => response.json())

      setUserData(result)
    }

    getData();
  }, [])

  if (!userData) {
    return null;
  }

  const {
    name,
    company: {
      name: companyName
    } = {},
    email,
    address: {
      street,
      zipcode,
      city
    } = {}
  } = userData;

  return ( // TODO: SEPERATE CSS
    <div className={styles.wrapper}>
      <h1 className={styles.userName}>{name}</h1>
      <div className={styles.userInfo}>
        {companyName}
        <div className={styles.shortDivider}></div>
        {email}
        <div className={styles.shortDivider}></div>
        {street}, {zipcode} {city}
      </div>
      <h1>Albums</h1>
      <Albums />
    </div>
  )
};

export default UserDetails;
