import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Header from './pages/Header';
import AboutMe from './pages/AboutMe';
import Work from './pages/Work';
import Skills from './pages/Skills';
import Frameworks from './pages/Frameworks';
import MyProjects from './pages/MyProjects';

require('dotenv').config();

const styles = {
  mainContainer: {
    height: '100vh',
    flexWrap: 1,
    overflow: 'auto',
  },
};

ReactDOM.render(
  <React.StrictMode>
    <div style={styles.mainContainer}>
      <Header />
      <AboutMe />
      <Work />
      <Skills />
      <Frameworks />
      <MyProjects />
    </div>
  </React.StrictMode>,
  document.getElementById('root'),
);
