import React from 'react';
import resumeData from '../assets/resumeData.json';

const styles = {

  workContainer: {
    display: 'grid',
    flexGrow: 4,
  },
  card: {
    display: 'grid',
    margin: 10,
    padding: 10,
    boxShadow: '5px 1px 10px #ccc',
  },
  title: {
    fontSize: '22px',
    fontWeight: 'bold',
    color: '#000',
  },
  workSection: {
    flexGrow: 1,
    margin: 15,
    fontSize: '22px',
    fontWeight: 'bold',
    color: '#000',
    textDecorationLine: 'underline',
    textDecorationColor: 'blue',
  },
  subTitle: {
    display: 'flex',
    fontSize: '18px',
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
  <div style={{ display: 'flex' }}>
    <div style={styles.workSection}>
      work
    </div>
    <div style={styles.workContainer}>
      <div style={styles.card}>
        {resumeData.work.map((val) => (
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
        ))}
      </div>
    </div>
  </div>
);

export default Work;
