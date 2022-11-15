import React from 'react';
import {
  useLocation
} from "react-router-dom";
import { useSelector } from 'react-redux';

import styles from './styles.module.css';

const Breadcrumb = () => {
  const user = useSelector(state => state.userName)
  const album = useSelector(state => state.albumName)
  const { pathname } = useLocation()

  const albumStripped = album.replace(/\s+/g, '');

  return (
    <div className={styles.breadcrumb}>
      <a href={'/'}>Users</a>

      {pathname === '/user-profile' && (
        <a href={'/user-profile'}>{user}</a>
      )}

      {pathname === `/user-profile/${albumStripped}` && (
        <>
          <a href={'/user-profile'}>{user}</a>
          <a>{album}</a>
        </>
      )}
    </div>
  )
};

export default Breadcrumb;
