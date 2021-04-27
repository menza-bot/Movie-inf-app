import React from 'react';
import './App.module.css';
import Content from '../Content/Content';
import CategoryContext from '../../context/context'
import { categories } from '../../context/context'
import styles from './App.module.css'
import Header from '../Header/Header';
import Sidebar from '../Sidebar/Sidebar';
import AdditionalBlock from '../AdditionalBlock/AdditionalBlock';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import MainPage from '../MainPage/MainPage'


function App() {



  return (
    <Router>
      <CategoryContext.Provider value={{ categories }}>
        <div className={styles.app}>
          <Header />
          <Sidebar categories={categories} />
          <Route exact path='/' render={() => <MainPage />} />
          <Route path='/:category' render={() => <Content />} />
          <AdditionalBlock />
        </div>
      </CategoryContext.Provider>
    </Router>
  );
}

export default App;
