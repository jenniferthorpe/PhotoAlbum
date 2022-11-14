import React from 'react';
import icon from '../images/Vector-Star.png'
import star from '../images/star.svg'
import styles from './styles.module.css';

const Card = ({ userName, company, email, id, isFavorite, onClick, albumName }) => {
  const handleOnClick = () => {
    onClick()
  };

  const handleOnClickFavorite = () => {

  }

  return (
    <div className={styles.card} onClick={handleOnClick}>
      {userName && <div className={styles.name}>{userName} <img src={icon} className={styles.icon} onClick={handleOnClickFavorite} /></div>}
      <div>{company}</div>
      <div>{email}</div>
      <div>{albumName}</div>
    </div>
  )
};

export default Card;
