import React from 'react';
import ReactTyped from 'react-typed';
import resumeData from '../RESUME_DATA.json';

const styles = {
  title: {
    display: 'flex',
    justifyContent: 'center',
    fontSize: 'min(max(32px,4vw),78px)',
    fontWeight: 'bold',
    color: '#fff ',
  },
  subTitle: {
    textAlign: 'center',
    display: 'flex',
    justifyContent: 'center',
    fontSize: 'min(max(20px,2vw),38px)',
    fontWeight: 'bold',
    color: '#B8B8B8 ',
  },
  headerContainer: {
    textAlign: 'center',
    display: 'grid',
    height: '100vh',
    alignContent: 'center',
  },
};

const randomTitle = (array) => array.sort(() => 0.5 - Math.random());

const Header = () => (
  <div style={styles.headerContainer}>
    <span style={styles.title}>
      Jurie Spies
    </span>
    <span className="fadeIn wait-2s" style={styles.subTitle}>
      {'{software'}
      <ReactTyped
        strings={randomTitle(resumeData.coolSoftwareTiles)}
        typeSpeed={60}
        backSpeed={60}
        loop
      />
      {'}'}
    </span>
  </div>
);

export default Header;
