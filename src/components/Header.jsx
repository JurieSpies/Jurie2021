import ParticlesBg from 'particles-bg'
import React from 'react'

const Header = () => {
  return (
    <div style={styles.headerContainer}>
        <div>
          <ParticlesBg color="#242a40;" num={50} type="cobweb" bg={true} /> 
          <span style={styles.title}>
            Jurie Spies
          </span>
          <span style={styles.subTitle}>
            Software Developer
          </span>
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
    display:'flex',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
}
}