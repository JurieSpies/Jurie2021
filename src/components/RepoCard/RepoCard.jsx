/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import propTypes from 'prop-types';
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import { COLOR_DARK } from '@/utils/globalColors';

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
    border: '1px solid var(--color-primary)',
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
    color: 'var(--color-primary)',
    marginTop: 5,
    textTransform: 'uppercase',
  },
  cardTitle: {
    color: 'var(--color-primary)',
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

const Card = styled.div`
  background-color: ${COLOR_DARK};
  border-radius: 8px;
  padding: 20px;
  margin: 10px;
  width: 300px;
  min-height: 200px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  transition: transform 0.3s ease;
  border: 1px solid var(--color-primary);

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 5px 15px var(--color-primary);
  }
`;

const Title = styled.h3`
  color: var(--color-primary);
  margin: 0 0 10px 0;
  font-size: 1.2em;
`;

const Description = styled.p`
  color: #ffffff;
  font-size: 0.9em;
  margin: 0;
  flex-grow: 1;
`;

const Stats = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 15px;
  color: var(--color-primary);
  font-size: 0.8em;
`;

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
      {repoInfo && repoInfo.length > 0
        && repoInfo.slice(0, showMore ? repoInfo.length : 3).map((git) => (
          <Card>
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
                <Title>
                  {git.name}
                </Title>
              </a>
              <Description>
                {git.description}
              </Description>
              <Stats>
                <span>language : {git.language ? git.language : 'N/A'}</span>
                <span>watchers : {git.watchers}</span>
              </Stats>
            </div>

          </Card>
        ))}
      <span style={styles.moreOrLessButton} onClick={() => setShowMore(!showMore)}>{showMore ? '...less' : 'more...'}</span>
    </div>
  );
};

RepoCard.propTypes = {
  githubName: propTypes.string.isRequired,
  token: propTypes.string.isRequired,
};

export default RepoCard;
