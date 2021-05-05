import ParticlesBg from 'particles-bg';
import React from 'react';

const AnimatedBackground = () => (

  <div style={{
    position: 'fixed', display: 'grid', height: '100%', width: '100%', top: 0, bottom: 0, zIndex: -1,
  }}
  >
    <ParticlesBg color="#fff" num={100} type="lines" bg />
  </div>
);

export default AnimatedBackground;
