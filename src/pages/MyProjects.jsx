import React from 'react';
import resumeData from '../RESUME_DATA.json';

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
  projectsSection: {
    margin: '15px',
    width: '1300px',
  },
  repoSection: {
    display: 'grid',
    fontSize: 'min(max(14px,2vw),18px)',
    color: '#fff',
    marginTop: 5,
  },
};

const MyProjects = () => (
  <div style={styles.mainComponent}>
    <div style={styles.title}>
      My Projects
    </div>
    <div style={styles.projectsSection}>
      <div style={styles.repoSection}>
        {resumeData.myProjects.map((repo) => <a style={styles.repoSection} href={repo.gitUrl} target="_blank" rel="noreferrer">{repo.repoName}</a>)}
      </div>
    </div>
  </div>
);

export default MyProjects;
