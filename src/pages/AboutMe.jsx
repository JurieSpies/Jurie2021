import React from 'react';
import { FaLinkedin, FaGithubSquare, FaPhoneSquare } from 'react-icons/fa';
import { ImMail } from 'react-icons/im';
import profilePic from '../assets/images/JuriePPbw.png';
import resumeData from '../RESUME_DATA.json';

const styles = {
  mainBodyContainer: {
    display: 'flex',
    flexWrap: 'wrap',
    margin: '50px',
    alignItems: 'center',
    justifyContent: 'space-evenly',
  },
  profilePic: {
    minHeight: '200px',
    minWidth: '200px',
    maxHeight: '300px',
    maxWidth: '300px',
    borderRadius: '200px',
    marginBottom: '20px',
  },
  mainSectionsContainer: {
    width: '1185px',
  },
  title: {
    fontSize: 'min(max(24px,3vw),26px)',
    fontWeight: 'bold',
    color: '#fff',
  },
  subTitle: {
    display: 'flex',
    fontSize: 'min(max(14px,2vw),18px)',
    color: '#fff',
    marginTop: 5,
  },
  icon: {
    width: '24px',
    height: '24px',
    paddingRight: '5px',
  },
  resumeButton: {
    borderRadius: '5px',
    marginTop: '15px',
    padding: '15px',
    fontSize: 'min(max(14px,2vw),18px)',
    boxShadow: '1px 3px 10px #ccc',
    fontWeight: 'bold',
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
      <a href={resumeData.resume} download target="_blank" rel="noreferrer">
        <button style={styles.resumeButton} type="button">Download</button>
      </a>
    </div>
  </div>
);

export default AboutMe;
