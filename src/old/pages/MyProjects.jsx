import React from 'react';
import RepoCard from '../components/RepoCard/RepoCard';

const REACT_APP_GITHUB_REPO_TOKEN = import.meta.env.VITE_REACT_APP_GITHUB_REPO_TOKEN;

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
};

const MyProjects = () => (
  <div style={styles.mainComponent}>
    <div style={styles.title}>
      My Projects
    </div>
    <RepoCard
      githubName="JurieSpies"
      token={REACT_APP_GITHUB_REPO_TOKEN}
    />
  </div>
);

export default MyProjects;
