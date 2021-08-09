/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import propTypes from 'prop-types';
import React, { useEffect, useState } from 'react';
import axios from 'axios';

const styles = {
  projectsSection: {
    display: 'grid',
    width: '1300px',
    margin: '15px',
    justifyContent: 'center',
  },
  card: {
    display: 'flex',
    flexWrap: 'wrap',
    margin: '10px',
    marginBottom: '30px',
    padding: '15px',
    boxShadow: '1px 1px 10px #ccc',
  },

  githubProfilePic: {
    minHeight: '100px',
    minWidth: '100px',
    maxHeight: '300px',
    maxWidth: '300px',
    borderRadius: '200px',
    marginBottom: '20px',
  },
  cardRightHandSide: {
    flex: 1,
  },
  repoLink: {
    fontWeight: 'bold',
    fontSize: 'min(max(14px,2vw),18px)',
    color: '#000',
    marginTop: 5,
    textTransform: 'uppercase',
  },
  cardTitle: {
    color: 'white',
    fontWeight: 'bold',
    wordBreak: 'break-all',
    textDecorationLine: 'underline',
    fontSize: 'min(max(22px,2vw),18px)',
  },
  cardSubTitle: {
    display: 'flex',
    color: 'white',
  },
  moreOrLessButton: {
    borderRadius: '5px',
    marginTop: '15px',
    padding: '15px',
    color: 'white',
    fontSize: 'min(max(14px,2vw),18px)',
    textAlign: 'center',
    fontWeight: 'bold',
    width: '200px',
    height: 'auto',
    placeSelf: 'center',
    cursor: 'pointer',
  },
};

const RepoCard = (props) => {
  const { githubName, token } = props;
  const [showMore, setShowMore] = useState(false);
  const [repoInfo, setRepoInfo] = useState();

  const getRepos = async () => {
    const config = {
      method: 'get',
      url: `https://api.github.com/users/${githubName}/repos`,
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };
    await axios(config)
      .then((res) => {
        const result = res.data;
        // console.log('✅: ', result);
        setRepoInfo(result);
      })
      .catch((res) => {
        console.log('❌', res);
      });
  };

  useEffect(() => {
    getRepos();
  }, []);

  return (
    <div style={styles.projectsSection}>
      {repoInfo > '0'
        && repoInfo.slice(0, showMore ? repoInfo.length : 3).map((git) => (
          <div style={styles.card}>
            {/* <img
              style={styles.githubProfilePic}
              src={git.owner.avatar_url}
              alt="Logo"
            /> */}
            <div style={styles.cardRightHandSide}>
              <a
                style={styles.repoLink}
                href={git.html_url}
                target="_blank"
                rel="noreferrer"
              >
                <span style={styles.cardTitle}>
                  {git.name}
                </span>
              </a>
              <span style={styles.cardSubTitle}>
                {git.description}
              </span>
              <span style={styles.cardSubTitle}>
                language :
                {git.language ? git.language : 'N/A'}
              </span>
              <span style={styles.cardSubTitle}>
                watchers :
                {git.watchers}
              </span>
            </div>

          </div>
        ))}
      <span style={styles.moreOrLessButton} curs onClick={() => setShowMore(!showMore)}>{showMore ? '...less' : 'more...'}</span>
    </div>
  );
};

RepoCard.propTypes = {
  githubName: propTypes.string.isRequired,
  token: propTypes.string.isRequired,
};

export default RepoCard;
