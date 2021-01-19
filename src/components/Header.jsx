import ParticlesBg from 'particles-bg'
import React from 'react'

const Header = () => {
  return (
    <div>
      <div style={styles.title}>
        Jurie Spies
      </div>
      <ParticlesBg num={100} type="cobweb" bg={false}/>
    </div>
  )
}

export default Header

const styles={
  title:{
    backgroundColor: 'pink', 
    display:'flex',
    alignSelf: 'center',
  }
}