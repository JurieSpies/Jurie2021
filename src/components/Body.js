import React from 'react'
import profilePic from '../assets/images/JuriePP.png'
import { AboutMe } from '../assets/info'

const Body = () => {
  return (
    <div  style={styles.mainBodyContainer}>
      <img src={profilePic} style={styles.profilePic}/>
      <>
        <div style={styles.title}>
          About me
        </div>
        <div style={styles.title}>
          {AboutMe.aboutMe}
        </div>
      </>
      
      <div style={styles.title}>
       Contact Details
      </div>
      <div style={styles.title}>
        {AboutMe.contactDetails}
      </div>
    </div>
  )
}

export default Body

const styles = {
  mainBodyContainer: {
    display: 'flex',
    backgroundColor: '#000524', 
    borderRadius:10
  },
  profilePic: {
    display: 'flex',
    height:'150px',
    width:'150px',
    borderRadius:100,
    padding:'20px'
  },
  title: {
    fontSize:'20px',
    color:'white'
  }
}

