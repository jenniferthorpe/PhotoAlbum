import React from 'react';
import star from '../../images/Vector-Star_adobe_express.svg'
import starFill from '../../images/Vector-Star-fill_adobe_express.svg'
import { useSelector } from 'react-redux';
import styles from './styles.module.css';

const Card = ({ userName, company, email, id, onClick, albumName, addFavorite }) => {
  const getFavorites = useSelector(state => state.favorites)

  const handleOnClick = (event) => {
    if (event.target.nodeName === 'DIV') {
      onClick()
      return;
    };

    addFavorite()
  };

  const isFav = getFavorites.includes(id);

  return (
    <div className={styles.card} onClick={handleOnClick}>
      {userName && <div className={styles.name}>{userName} <img src={isFav ? starFill : star} className={styles.icon} /> </div>}
      <div>{company}</div>
      <div>{email}</div>
      <div>{albumName}</div>
    </div>
  )
};

export default Card;
