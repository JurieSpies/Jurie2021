import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Header from './components/Header';
import AboutMe from './components/AboutMe';
import Work from './components/Work';
import Skills from './components/Skills';
import Frameworks from './components/Frameworks';

ReactDOM.render(
  <React.StrictMode>
    <div style={{
      height: '100vh',
      flexWrap: 1,
      overflow: 'auto',
    }}
    >
      <Header />
      <AboutMe />
      <Work />
      <Skills />
      <Frameworks />
    </div>
  </React.StrictMode>,
  document.getElementById('root'),
);
