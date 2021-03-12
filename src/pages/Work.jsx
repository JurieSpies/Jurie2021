import React from 'react';
import resumeData from '../RESUME_DATA.json';

const styles = {
  mainComponent: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
  },
  workContainer: {
    display: 'grid',
    width: '1300px',
    margin: '15px',
  },
  workSection: {
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
  card: {
    display: 'grid',
    margin: '10px',
    marginBottom: '30px',
    padding: '15px',
    boxShadow: '1px 1px 10px #ccc',
  },
  title: {
    fontSize: 'min(max(14px,2vw),22px)',
    fontWeight: 'bold',
    color: '#fff',
  },
  subTitle: {
    display: 'flex',
    fontSize: 'min(max(14px,2vw),16px)',
    color: 'grey',
    marginTop: 5,
  },
  description: {
    display: 'flex',
    fontSize: 'min(max(14px,2vw),16px)',
    color: '#ccc',
    marginTop: 5,
  },

};

const Work = () => (
  <div style={styles.mainComponent}>
    <div style={styles.workSection}>
      Work
    </div>
    <div style={styles.workContainer}>
      {resumeData.work.map((val) => (
        <div style={styles.card}>
          <>
            <div style={styles.title}>
              {val.title}
            </div>
            <div style={styles.subTitle}>
              {`${val.role} ${val.timeline}`}
            </div>
            <div style={styles.description}>
              {val.description}
            </div>
          </>
        </div>
      ))}
    </div>
  </div>
);

export default Work;
