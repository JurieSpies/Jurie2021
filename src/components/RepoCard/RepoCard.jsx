import propTypes from 'prop-types';
import React, { useEffect, useState } from 'react';
import axios from 'axios';

const styles = {
  card: {
    display: 'flex',
    margin: '10px',
    marginBottom: '30px',
    padding: '15px',
    boxShadow: '1px 1px 10px #ccc',
  },
  repoSection: {
    fontWeight: 'bold',
    display: 'grid',
    fontSize: 'min(max(14px,2vw),18px)',
    color: '#000',
    marginTop: 5,
    textTransform: 'uppercase',
  },
};

const RepoCard = (props) => {
  const { githubName, token } = props;
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
        && repoInfo.map((git) => (
          <div style={styles.card}>
            <img
              src={git.owner.avatar_url}
              alt="Logo"
              style={{ width: '20%', height: 'auto', paddingRight: '3%' }}
            />
            <div>
              <a
                style={styles.repoSection}
                href={git.html_url}
                target="_blank"
                rel="noreferrer"
              >
                <div style={{
                  color: 'white', fontWeight: 'bold', textDecorationLine: 'underline', fontSize: '22px',
                }}
                >
                  {git.name}
                </div>
              </a>
              <div>{git.description}</div>
              <div>
                language :
                {git.language ? git.language : 'N/A'}
              </div>
              <div>
                watchers :
                {git.watchers}
              </div>
            </div>
          </div>
        ))}
    </>
  );
};

RepoCard.propTypes = {
  githubName: propTypes.string.isRequired,
  token: propTypes.string.isRequired,
};

export default RepoCard;
