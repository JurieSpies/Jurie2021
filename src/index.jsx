import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Header from './components/Header';
import AboutMe from './components/AboutMe';
import Work from './components/Work';

ReactDOM.render(
  <React.StrictMode>
    <div style={{
      height: '100vh',
      flexWrap: 1,
      // backgroundColor: 'black',
    }}
    >
      <Header />
      <AboutMe />
      <Work />
    </div>
  </React.StrictMode>,
  document.getElementById('root'),
);
