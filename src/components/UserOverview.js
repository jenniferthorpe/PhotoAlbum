import React from 'react';
import styles from './styles.module.css';

const UserOverview = ({ userName, company, email, id, isFavorite, onClick }) => {
  const handleOnClick = () => {
    onClick()
  };

  return (
    <div className={styles.userCard} onClick={handleOnClick}>
      <div className={styles.text}>
        <div className={styles.name}>{userName}</div>
        <div>{company}</div>
        <div>{email}</div>
      </div>
    </div>
  )
};

export default UserOverview;
