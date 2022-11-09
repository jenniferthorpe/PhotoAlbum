import React, { useEffect, useState } from 'react';
import {
  useLocation,
  useNavigate,
  useParams,
} from "react-router-dom";
import UserOverview from './UserOverview';
import cn from 'classnames';

import styles from './styles.module.css'

const Users = (props) => {
  const navigate = useNavigate()
  const location = useLocation()
  const [userData, setUserData] = useState(null)

  useEffect(() => {
    if (!userData) {
      const getData = async () => {
        const result = await fetch('https://jsonplaceholder.typicode.com/users')
          .then(response => response.json())

        setUserData(result)
      }

      getData();
    }
  }, [])

  const handleOnClick = (id) => {
    navigate(`/user-details?${id}`)
  }

  if (!userData) {
    return null;
  }

  return (
    <>
      <h1>Favorites</h1>
      <div className={cn(styles.divider, styles.transparent)} />

      <h1>Users</h1>
      <div className={cn(styles.divider, styles.transparent)} />
      <div className={styles.userList}>
        {console.log('USER DATA', userData)}
        {userData.map(({ name, company: { name: companyName }, email, id }) => (
          <UserOverview
            userName={name}
            company={companyName}
            email={email}
            onClick={() => handleOnClick(id)}
          />
        ))}
      </div>
    </>
  )
};

export default Users;
