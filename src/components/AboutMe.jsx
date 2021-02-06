import React from 'react';
import { FaLinkedin, FaGithubSquare, FaPhoneSquare } from 'react-icons/fa';
import { ImMail } from 'react-icons/im';
import profilePic from '../assets/images/JuriePP.png';
import resumeData from '../assets/resumeData.json';

const styles = {
  mainBodyContainer: {
    display: 'flex',
    backgroundColor: '#000524',
    alignItems: 'center',
  },
  profilePic: {
    display: 'flex',
    height: '150px',
    width: '150px',
    borderRadius: 100,
    padding: '20px',
  },
  mainSectionsContainer: {
    display: 'grid',
    marginLeft: 50,
    padding: 20,
  },
  title: {
    fontSize: '22px',
    fontWeight: 'bold',
    color: '#fff',
  },
  subTitle: {
    display: 'flex',
    fontSize: '16px',
    color: '#ccc',
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
