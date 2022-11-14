import React from 'react';
import {
  Switch,
  Route,
  Routes,
  Link
} from "react-router-dom";

import Users from './components/Users';
import Photos from './components/Photos';
import UserDetails from './components/UserDetails';
import Breadcrumb from './components/Breadcrumb';

import styles from './styles.module.css';

const App = () => {
  return (
    <div className="App">
      <div className={styles.wrapper}>
        <Breadcrumb />
        <Routes>
          <Route path="/" element={<Users />} />
          <Route path="/user-profile" element={<UserDetails />} />
          <Route path="/user-profile/:albumname" element={<Photos />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
