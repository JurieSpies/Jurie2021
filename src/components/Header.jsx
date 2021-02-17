import React from 'react';
import ParticlesBg from 'particles-bg';

const styles = {
  title: {
    display: 'flex',
    justifyContent: 'center',
    fontSize: 68,
    fontWeight: 'bold',
    color: '#fff ',
  },
  subTitle: {
    textAlign: 'center',
    display: 'flex',
    justifyContent: 'center',
    fontSize: 24,
    fontWeight: 'bold',
    color: '#B8B8B8 ',
  },
  headerContainer: {
    textAlign: 'center',
    display: 'flex',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
};

const Header = () => (
  <div style={styles.headerContainer}>
    <div>
      <ParticlesBg color="#fff" num={100} type="lines" bg />
      <span style={styles.title}>
        Jurie Spies
      </span>
      <span style={styles.subTitle}>
        Software Wizard
      </span>
    </div>
  </div>
);

export default Header;
