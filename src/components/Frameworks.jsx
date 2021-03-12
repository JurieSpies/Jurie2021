import React from 'react';
import resumeData from '../assets/resumeData.json';
import ProgressBar from './ProgressBar/ProgressBar';

const styles = {
  mainComponent: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
  },
  title: {
    display: 'grid',
    width: '300px',
    margin: '15px',
    fontSize: 'min(max(18px,2vw),22px)',
    fontWeight: 'bold',
    color: '#fff',
    textDecorationLine: 'underline',
    textAlign: 'center',
    textDecorationColor: 'blue',
  },
  FrameworkSection: {
    margin: '15px',
    width: '1300px',
  },
  FrameworkMainContainer: {
    minHeight: '100px',
    maxHeight: '150px',
  },
  FrameworkTextContainer: {
    display: 'flex',
    justifyContent: 'space-between',
    marginBottom: '5px',
    paddingLeft: '10px',
    paddingRight: '10px',
  },
  FrameworkText: {
    color: '#fff',
  },
};

const Frameworks = () => (
  <div style={styles.mainComponent}>
    <div style={styles.title}>
      Frameworks
    </div>
    <div style={styles.FrameworkSection}>
      {resumeData.frameworkSkills.map((skill) => (
        <div style={styles.FrameworkMainContainer}>
          <div style={styles.FrameworkTextContainer}>
            <span style={styles.FrameworkText}>
              {skill.frameworkTitle}
            </span>
            <span style={styles.FrameworkText}>
              {`${skill.rating}%`}
            </span>
          </div>
          <ProgressBar stripe animate width={skill.rating} color="darkblue" />
        </div>
      ))}
    </div>

  </div>
);

export default Frameworks;
