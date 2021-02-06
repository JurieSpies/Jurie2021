import React from 'react';
import ParticlesBg from 'particles-bg';

const styles = {
  title: {
    display: 'flex',
    justifyContent: 'center',
    fontSize: 68,
    fontWeight: 'bold',
    color: '#000',
  },
  subTitle: {
    display: 'flex',
    justifyContent: 'center',
    fontSize: 24,
    fontWeight: 'bold',
    color: '#000',
  },
  headerContainer: {
    display: 'flex',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
};

const Header = () => (
  <div style={styles.headerContainer}>
    <div>
      <ParticlesBg color="#242a40;" num={50} type="cobweb" bg />
      <span style={styles.title}>
        Jurie Spies
      </span>
      <span style={styles.subTitle}>
        Software Developer
      </span>
    </div>
  </div>
);

export default Header;
