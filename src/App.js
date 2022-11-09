import React from 'react';
import StartPage from './components/startPage';
import Users from './components/Users';
import Album from './components/Album';
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
          <Route exact path="/" element={<StartPage />} />
          <Route exact path="/users" element={<Users />} />
          <Route path="/user-details" element={<UserDetails />} />
          <Route path="/album" element={<Album />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
