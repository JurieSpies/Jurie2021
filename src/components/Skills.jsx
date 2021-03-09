import React from 'react';
import resumeData from '../assets/resumeData.json';
import ProgressBar from './ProgressBar/ProgressBar';

const styles = {
  mainComponent: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  title: {
    display: 'grid',
    width: '500px',
    margin: '15px',
    fontSize: 'min(max(18px,2vw),22px)',
    fontWeight: 'bold',
    color: '#fff',
    textDecorationLine: 'underline',
    textAlign: 'center',
    textDecorationColor: 'blue',
  },
  skillSection: {
    margin: '15px',
    width: '1000px',
  },
  skillMainContainer: {
    minHeight: '100px',
    maxHeight: '150px',
  },
  skillTextContainer: {
    display: 'flex',
    justifyContent: 'space-between',
    marginBottom: '5px',
    paddingLeft: '10px',
    paddingRight: '10px',
  },
  skillText: {
    color: '#fff',
  },
};

const Skills = () => (
  <div style={styles.mainComponent}>
    <div style={styles.title}>
      Skills
    </div>
    <div style={styles.skillSection}>
      {resumeData.skills.map((skill) => (
        <div style={styles.skillMainContainer}>
          <div style={styles.skillTextContainer}>
            <span style={styles.skillText}>
              {skill.language}
            </span>
            <span style={styles.skillText}>
              {`${skill.rating}%`}
            </span>
          </div>
          <ProgressBar stripe animate width={skill.rating} color="blue" />
        </div>
      ))}
    </div>

  </div>
);

export default Skills;
