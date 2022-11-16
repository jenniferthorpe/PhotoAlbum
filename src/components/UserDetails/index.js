import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux'

import Albums from '../Albums';
import Title from '../Title';
import styles from './styles.module.css';

const UserDetails = () => {
  const [userData, setUserData] = useState(null)
  const userId = useSelector(state => state.userId)

  useEffect(() => {
    const getData = async () => {
      const result = await fetch(`https://jsonplaceholder.typicode.com/users/${userId}`)
        .then(response => {
          if (!response.ok) {
            return Promise.reject(response.status);
          }

          return response.json()
        })
        .catch(err => console.error('Error:', err));

      setUserData(result);
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

  return (
    <>
      <Title center semiBold margin>{name}</Title>
      <div className={styles.userInfo}>
        <span>{companyName}</span>
        <span>{email}</span>
        <span>{street}, {zipcode} {city}</span>
      </div>

      <Title margin>Albums</Title>
      <Albums />
    </>
  )
};

export default UserDetails;
