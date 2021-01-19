import ParticlesBg from 'particles-bg'
import React from 'react'

const Header = () => {
  return (
    <div style={{display:'grid'}}>
      <div style={styles.title}>
        Jurie Spies
      </div>
      <div style={styles.subTitle}>
        Software Developer
      </div>
      <div>
        <ParticlesBg num={50} type="cobweb" bg={false}/>
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
  }
}