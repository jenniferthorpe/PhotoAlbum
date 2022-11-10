import React from 'react';
import Users from './components/Users';
import Photos from './components/Photos';
import UserDetails from './components/UserDetails';
import styles from './styles.module.css';
import {
  Switch,
  Route,
  Routes,
  Link
} from "react-router-dom";

const App = () => {
  return (
    <div className="App">
      <div className={styles.wrapper}>
        <Routes>
          <Route path="/" element={<Users />} />
          <Route path="/user" element={<UserDetails />} />
          <Route path="/photos" element={<Photos />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
