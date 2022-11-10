import React from 'react';
import styles from './styles.module.css';

const Card = ({ userName, company, email, id, isFavorite, onClick, albumName }) => {
  const handleOnClick = () => {
    onClick()
  };

  return (
    <div className={styles.card} onClick={handleOnClick}>
      <div className={styles.name}>{userName}</div>
      <div>{company}</div>
      <div>{email}</div>
      <div>{albumName}</div>
    </div>
  )
};

export default Card;
