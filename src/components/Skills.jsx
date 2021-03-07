import { Circle } from 'rc-progress';
import React from 'react';
import resumeData from '../assets/resumeData.json';

const styles = {
  mainComponent: {
    display: 'flex',
    // backgroundColor: '#101010',
  },
  title: {
    flexGrow: 1,
    margin: 15,
    fontSize: 'min(max(14px,2vw),22px)',
    fontWeight: 'bold',
    color: '#fff',
    textDecorationLine: 'underline',
    textAlign: 'center',
    textDecorationColor: 'blue',
    minWidth: '50px',
  },
  skillSection: {
    flexGrow: 8,
    margin: '10px',
  },
  skillContainer: {
    margin: '10px',
    height: '200px',
    width: '200px',
  },
};

const Skills = () => (
  <div style={styles.mainComponent}>
    <div style={styles.title}>
      Skills
    </div>
    <div style={styles.skillSection}>
      {resumeData.skills.map((skill) => (
        <div style={{
          display: 'flex', alignItems: 'center', position: 'relative', alignSelf: 'center', justifyContent: 'center', width: '10%',
        }}
        >
          <div style={styles.skillContainer}>
            <Circle
              percent={`${skill.rating}`}
              strokeWidth="4"
              strokeColor="blue"
              trailColor="#D3D3D3"
              trailWidth="2px"
            />
          </div>
          <div style={{ color: '#D3D3D3', position: 'absolute', top: '55px' }}>{skill.language}</div>
        </div>
      ))}
    </div>
  </div>
);

export default Skills;
