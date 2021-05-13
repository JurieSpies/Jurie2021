import React from 'react';
import MouseParticles from 'react-mouse-particles';
import Particles from 'react-particles-js';

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
  <div style={styles.mainContainer}>
    <MouseParticles g={3} color="white" cull="col,image-wrapper" />
    <Particles params={{ particles: { number: { value: 20 }, move: { speed: 1 } } }} />
  </div>
);

export default AnimatedBackground;
