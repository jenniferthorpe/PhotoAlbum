import React, { useEffect, useState, useMemo, useCallback } from 'react';
import {
  useLocation,
  useNavigate,
  useParams
} from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux';

import styles from './styles.module.css';

const Breadcrumb = () => {
  const user = useSelector(state => state.userName)
  const album = useSelector(state => state.albumName)
  const { pathname } = useLocation()

  const renderRoutes = () => {
    const albumStripped = album.replace(/\s+/g, '');

    switch (pathname) {
      case '/user-profile':
        return (
          <div className={styles.breadcrumb}>
            <a href={'/'}>Users</a>
            <a href={'/user-profile'}>{user}</a>
          </div>
        )

      case `/user-profile/${albumStripped}`:
        return (
          <div className={styles.breadcrumb}>
            <a href={'/'}>Users</a>
            <a href={'/user-profile'}>{user}</a>
            <a>{album}</a>
          </div>
        )

      default:
        return (
          <div className={styles.breadcrumb}>
            <a href={'/'}>Users</a>
          </div>)

    }
  }

  const render = renderRoutes();

  return (
    { ...render }
  )
};

export default Breadcrumb;
