import React from 'react';
import ReactTyped from 'react-typed';
import resumeData from '../RESUME_DATA.json';

const styles = {
  title: {
    display: 'flex',
    justifyContent: 'center',
    fontSize: 'min(max(32px,4vw),78px)',
    fontWeight: 'bold',
    background: '-webkit-linear-gradient(#eee, blue)',
    WebkitBackgroundClip: 'text',
    color: 'transparent',
  },
  occupation: {
    display: 'flex',
    justifyContent: 'center',
    fontSize: 'min(max(20px,2vw),38px)',
    fontWeight: 'bold',
    color: '#fff ',
    marginBottom: '20px',
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

const randomTitle = (array) => {
  const shuffledArray = [...array];
  for (let i = shuffledArray.length - 1; i >= 0; i -= 1) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffledArray[i], shuffledArray[j]] = [shuffledArray[j], shuffledArray[i]];
  }
  return shuffledArray;
};

const Header = () => (
  <div style={styles.headerContainer}>
    <span style={styles.title}>
      Jurie Spies
    </span>
    <span style={styles.occupation}>
      Software Engineer
    </span>
    <span className="fadeIn wait-2s" style={styles.subTitle}>
      {'{'}
      <ReactTyped
        strings={randomTitle(resumeData.coolSoftwareTitles)}
        typeSpeed={60}
        backSpeed={60}
        loop
      />
      {'}'}
    </span>
  </div>
);

export default Header;
