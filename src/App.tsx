import React from 'react';
import './reset.css'
import classes from './App.module.css';
import { Route, Routes } from 'react-router-dom';
import { Header } from './componets/header/Header';
import { Search } from './componets/search/Search';
import { Profile } from './componets/profile/Profile';
import { Favorites } from './componets/favorites/Favorites';
import { History } from './componets/history/History';
import { Login } from './componets/login/Login';
import { Main } from './componets/main/Main';

function App() {
  return (
    <div className={classes.app}>
      <Header />
      <Search />
      <Routes>
        {/* <Route path="/" element={<App />}/> */}
        <Route path="/*" element={<Main />}/>
        <Route path="/main" element={<Main />}/>
        <Route path="/profile" element={<Profile />}/>
        <Route path="/favorites" element={<Favorites />}/>
        <Route path="/history" element={<History />}/>
        <Route path="/login" element={<Login />}/>
      </Routes>
    </div>
  );
}

export default App;