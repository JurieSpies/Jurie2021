import propTypes from 'prop-types';
import React, { useEffect, useState } from 'react';
import axios from 'axios';

const styles = {
  card: {
    display: 'flex',
    backgroundColor: 'orange',
    margin: '10px',
    marginBottom: '30px',
    padding: '15px',
    boxShadow: '1px 1px 10px #ccc',
    flexWrap: 'wrap',

  },
  githubProfilePic: {
    // flex: 0.5,
    flex: 1,
    // width: '20%',
    // height: 'auto',
    paddingRight: '3%',
    minHeight: '100px',
    minWidth: '100px',
    maxHeight: '300px',
    maxWidth: '300px',
    backgroundColor: 'pink',
  },
  cardRightHandSide: {
    flex: 3,
    // width: '80%',
    backgroundColor: 'blue',
    display: 'grid',
  },
  repoLink: {
    // backgroundColor: 'pink',
    fontWeight: 'bold',
    display: 'grid',
    fontSize: 'min(max(14px,2vw),18px)',
    color: '#000',
    marginTop: 5,
    textTransform: 'uppercase',
  },
  cardTitle: {
    color: 'white',
    display: 'block',
    fontWeight: 'bold',
    textDecorationLine: 'underline',
    fontSize: 'min(max(22px,2vw),18px)',
  },
  cardSubTitle: {
    display: 'flex',
    // width: '100%',
  },
  moreOrLessButton: {
    borderRadius: '5px',
    marginTop: '15px',
    padding: '15px',
    fontSize: 'min(max(14px,2vw),18px)',
    boxShadow: '1px 3px 10px #ccc',
    fontWeight: 'bold',
    width: '50%',
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
        console.log('✅: ', result);
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
    <>
      {repoInfo > '0'
        && repoInfo.slice(0, showMore ? repoInfo.length : 3).map((git) => (
          <div style={styles.card}>

            <img
              style={styles.githubProfilePic}
              src={git.owner.avatar_url}
              alt="Logo"
            />

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
      <button style={styles.moreOrLessButton} type="button" onClick={() => setShowMore(!showMore)}>{showMore ? '...less' : 'more...'}</button>
    </>
  );
};

RepoCard.propTypes = {
  githubName: propTypes.string.isRequired,
  token: propTypes.string.isRequired,
};

export default RepoCard;
