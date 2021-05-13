import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import AnimatedBackground from './pages/AnimatedBackground';
import Header from './pages/Header';
import AboutMe from './pages/AboutMe';
import Work from './pages/Work';
import Skills from './pages/Skills';
import Frameworks from './pages/Frameworks';
import MyProjects from './pages/MyProjects';
import Fun from './pages/Fun';

require('dotenv').config();

ReactDOM.render(
  <React.StrictMode>
    <>
      <AnimatedBackground />
      <Header />
      <AboutMe />
      <Work />
      <Skills />
      <Frameworks />
      <MyProjects />
      <Fun />
    </>
  </React.StrictMode>,
  document.getElementById('root'),
);
