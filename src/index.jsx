import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Header from './pages/Header';
import AboutMe from './pages/AboutMe';
import Work from './pages/Work';
import Skills from './pages/Skills';
import Frameworks from './pages/Frameworks';
import MyProjects from './pages/MyProjects';
// import AnimatedBackground from './pages/AnimatedBackground';

require('dotenv').config();

ReactDOM.render(
  <React.StrictMode>
    <>
      {/* <AnimatedBackground /> */}
      <Header />
      <AboutMe />
      <Work />
      <Skills />
      <Frameworks />
      <MyProjects />
    </>
  </React.StrictMode>,
  document.getElementById('root'),
);
