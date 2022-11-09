import React, { useEffect, useState } from 'react';
import {
  useLocation
} from "react-router-dom";
import styles from './styles.module.css';

const UserDetails = () => {
  const [userData, setUserData] = useState(null)
  const location = useLocation()


  useEffect(() => {
    if (!userData) {
      const getId = location.search.replace('?', '');

      const getData = async () => {
        const result = await fetch(`https://jsonplaceholder.typicode.com/users/${getId}`)
          .then(response => response.json())

        setUserData(result)
      }

      getData();
    }
  }, [])

  if (!userData) {
    return null;
  }

  const {
    name,
    company: {
      name: companyName
    },
    email,
    address: {
      street,
      zipcode,
      city
    }
  } = userData;

  return ( // TODO: SEPERATE CSS
    <div className={styles.wrapper}>
      {console.log(userData)}
      <h1 className={styles.userName}>{name}</h1>
      <div className={styles.userInfo}>
        {companyName}
        <div className={styles.shortDivider}></div>
        {email}
        <div className={styles.shortDivider}></div>
        {street}, {zipcode} {city}
      </div>
    </div>
  )
};

export default UserDetails;
