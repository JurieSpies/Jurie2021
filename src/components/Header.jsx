import ParticlesBg from 'particles-bg'
import React from 'react'

const Header = () => {
  return (
    <div>
      <ParticlesBg num={50} type="cobweb" bg={true}/> 
        <div style={styles.headerContainer}>
          <div style={styles.title}>
            Jurie Spies
          </div>
          <div style={styles.subTitle}>
            Software Developer
          </div>
        </div>
    </div>
  )
}

export default Header

const styles={
  title:{
    display:'flex',
    justifyContent: 'center',
    fontSize:68,
    fontWeight:'bold',
    color:'#000',
  },
  subTitle:{
    display:'flex',
     justifyContent: 'center',
    fontSize:24,
    fontWeight:'bold',
    color:'#000'
  },
  headerContainer:{
    position: 'absolute',
    left: '50%',
    top: '50%',
    transform: 'translate(-50%, -50%)'
}
}