import React from 'react';
import { FaLinkedin, FaGithubSquare, FaPhoneSquare } from 'react-icons/fa';
import { ImMail } from 'react-icons/im';
import profilePic from '../assets/images/JuriePP.png';
import resumeData from '../assets/resumeData.json';

const styles = {
  mainBodyContainer: {
    display: 'flex',
    // height: '100%',
    backgroundColor: '#101010',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    flexWrap: 'wrap',
    padding: '50px',
    margin: 0,
  },
  profilePic: {
    minHeight: 0,
    minWidth: 0,
    maxHeight: '300px',
    maxWidth: '300px',
    borderRadius: 200,
    padding: '20px',
  },
  mainSectionsContainer: {
    width: '1200px',
  },
  title: {
    // width: '20%',
    fontSize: '24px',
    fontWeight: 'bold',
    color: '#fff',
  },
  subTitle: {
    // width: '20%',
    display: 'flex',
    fontSize: '18px',
    color: '#fff',
    marginTop: 5,
  },
  icon: {
    width: '24px',
    height: '24px',
    paddingRight: 5,
  },
};

const AboutMe = () => (
  <div style={styles.mainBodyContainer}>
    <img alt="not found" src={profilePic} style={styles.profilePic} />
    <div style={styles.mainSectionsContainer}>
      <div style={styles.title}>
        About me
      </div>
      <div style={styles.subTitle}>
        {resumeData.aboutMe}
      </div>
      <br />
      <div style={styles.title}>
        Contact Details
      </div>
      <div style={styles.subTitle}>
        <FaPhoneSquare style={styles.icon} />
        <a style={styles.subTitle} href={`tel:${resumeData.phoneNumber}`} target="_blank" rel="noreferrer">+27768862529</a>
      </div>
      <div style={styles.subTitle}>
        <ImMail style={styles.icon} />
        <a style={styles.subTitle} href={`mailto:${resumeData.phoneNumber}`} target="_blank" rel="noreferrer">jurie.spies@gmail.com</a>
      </div>
      <div style={styles.subTitle}>
        <FaGithubSquare style={styles.icon} />
        <a style={styles.subTitle} href={resumeData.github} target="_blank" rel="noreferrer">Github</a>
      </div>
      <div style={styles.subTitle}>
        <FaLinkedin style={styles.icon} />
        <a style={styles.subTitle} href={resumeData.linkedIn} target="_blank" rel="noreferrer">LinkedIn</a>
      </div>
    </div>
  </div>
);

export default AboutMe;
