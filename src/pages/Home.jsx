import React from 'react';
import Header from '../components/Header';
import Body from '../components/Body';
// import MouseParticles from 'react-mouse-particles'

const Home = () => (
  <div style={{height:'100vh'}}>
    {/* <MouseParticles g={10} color="#000" cull="col,image-wrapper" radius={3}/> */}
    <Header/>
    <Body/>
  </div>
);

export default Home;
