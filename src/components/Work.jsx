import React from 'react';
import resumeData from '../assets/resumeData.json';

const styles = {
  card: {
    display: 'grid',
    margin: '10px',
    padding: '15px',
    boxShadow: '5px 1px 10px #ccc',
  },
  workContainer: {
    display: 'grid',
    flexGrow: 8,
    margin: '10px',
  },
  workSection: {
    flexGrow: 1,
    margin: 15,
    fontSize: '22px',
    fontWeight: 'bold',
    color: '#fff',
    textDecorationLine: 'underline',
    textDecorationColor: 'blue',
  },
  title: {
    fontSize: '22px',
    fontWeight: 'bold',
    color: '#fff',
  },
  subTitle: {
    display: 'flex',
    fontSize: '16px',
    color: 'grey',
    marginTop: 5,
  },
  description: {
    display: 'flex',
    fontSize: '16px',
    color: '#ccc',
    marginTop: 5,
  },

};

const Work = () => (
  <div style={{ display: 'flex', backgroundColor: '#101010' }}>
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
