import React from 'react';

const styles = {
  mainContainer: {
    position: 'fixed',
    display: 'grid',
    height: '100%',
    width: '100%',
    top: 0,
    bottom: 0,
    zIndex: -1,
    backgroundColor: '#000',
  },
};

const AnimatedBackground = () => (
  <div style={styles.mainContainer} />
);

export default AnimatedBackground;
