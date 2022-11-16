import React from 'react';
import { useSelector } from 'react-redux';
import PropTypes from 'prop-types';

import star from '../../images/Vector-Star_adobe_express.svg'
import starFill from '../../images/Vector-Star-fill_adobe_express.svg'
import styles from './styles.module.css';

const Card = ({ userName, company, email, id, onClick, albumName, addFavorite }) => {
  const getFavorites = useSelector(state => state.favorites)

  const handleOnClick = (event) => {
    if (event.target.nodeName === 'DIV') {
      onClick()
      return;
    }

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

Card.propTypes = {
  userName: PropTypes.string,
  company: PropTypes.string,
  email: PropTypes.string,
  id: PropTypes.number,
  onClick: PropTypes.func.isRequired,
  albumName: PropTypes.string,
  addFavorite: PropTypes.func
}

export default Card;
