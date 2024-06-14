import { COLOR_BACKGROUND, COLOR_PRIMARY } from '@/utils/globalColors';
import styled from 'styled-components';
import css from '../../assets/skillIcons/css.svg';
import html from '../../assets/skillIcons/html.svg';
import js from '../../assets/skillIcons/js.svg';
import react from '../../assets/skillIcons/react.svg';
import typescript from '../../assets/skillIcons/typescript.svg';
import azure from '../../assets/skillIcons/azure.svg';
import cypress from '../../assets/skillIcons/cypress.svg';
import docker from '../../assets/skillIcons/docker.svg';
import eslint from '../../assets/skillIcons/eslint.svg';
import discord from '../../assets/skillIcons/discord.svg';
import figma from '../../assets/skillIcons/figma.svg';
import git from '../../assets/skillIcons/git.svg';
import github from '../../assets/skillIcons/github.svg';
import githubactions from '../../assets/skillIcons/githubactions.svg';
import gitlab from '../../assets/skillIcons/gitlab.svg';
import firebase from '../../assets/skillIcons/firebase.svg';
import graphql from '../../assets/skillIcons/graphql.svg';
import insomnia from '../../assets/skillIcons/insomnia.svg';
import jest from '../../assets/skillIcons/jest.svg';
import knex from '../../assets/skillIcons/knex.svg';
import nodejs from '../../assets/skillIcons/nodejs.svg';
import postgressql from '../../assets/skillIcons/postgressql.svg';
import postman from '../../assets/skillIcons/postman.svg';
import sketch from '../../assets/skillIcons/sketch.svg';
import storybook from '../../assets/skillIcons/storybook.svg';
import vite from '../../assets/skillIcons/vite.svg';
import vscode from '../../assets/skillIcons/vscode.svg';
import swagger from '../../assets/skillIcons/swagger.svg';
import xcode from '../../assets/skillIcons/xcode.svg';
import openai from '../../assets/skillIcons/openai.svg';

// const CardsContainer = styled.div`
//   justify-content: center;
//   flex:1;
//   height: 100%;
//   flex-direction: row;
//   justify-content: space-around;
//   margin-top: 35px;

//   @media (max-width: 768px) {
//   align-items: center;
//   display: flex;
//   flex-wrap: wrap;
//   justify-content: center;
//   margin-top: 0px;
//   }
// `;
const CardsContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 20px;
  margin-top: 35px;
`;

// const Image = styled.img`
//   margin: 20px;
//   background-color: ${COLOR_BACKGROUND};
//   padding: 20px;
//   border-radius: 10px;
//   border: 1px solid ${COLOR_PRIMARY};
//   min-width: 100px;
//   animation: fadeIn 1s ease-in-out;
//   width: 15%;
//   filter: grayscale(100%);
//   &:hover {
//     filter: none;
//     transform: scale(1.15)
//     }

//     @media (max-width: 768px) {
//       align-self: center;
//   }
// `;

const ImageWrapper = styled.div`
  text-align: center;
  margin: 10px;
  background-color: ${COLOR_BACKGROUND};
  padding: 20px;
  border-radius: 10px;
  border: 1px solid ${COLOR_PRIMARY};
  min-width: 100px;
  width: 15%;
  filter: grayscale(100%);
  transition: transform 0.3s ease-in-out;


  &:hover {
    filter: none;
    transform: scale(1.1);
  }

  @media (max-width: 768px) {
    width: 40%;
  }
`;

const IconTitle = styled.div`
  margin-top: 10px;
  font-size: 14px;
  color: ${COLOR_PRIMARY};
`;

const Skills = () => {
  const skillSvgs = [
    { svg: css, title: 'CSS' },
    { svg: html, title: 'CSS' },
    { svg: js, title: 'CSS' },
    { svg: react, title: 'CSS' },
    { svg: typescript, title: 'CSS' },
    { svg: azure, title: 'CSS' },
    { svg: cypress, title: 'CSS' },
    { svg: docker, title: 'CSS' },
    { svg: eslint, title: 'CSS' },
    { svg: discord, title: 'CSS' },
    { svg: figma, title: 'CSS' },
    { svg: git, title: 'CSS' },
    { svg: github, title: 'CSS' },
    { svg: githubactions, title: 'CSS' },
    { svg: gitlab, title: 'CSS' },
    { svg: firebase, title: 'CSS' },
    { svg: graphql, title: 'CSS' },
    { svg: insomnia, title: 'CSS' },
    { svg: jest, title: 'CSS' },
    { svg: knex, title: 'CSS' },
    { svg: nodejs, title: 'CSS' },
    { svg: postgressql, title: 'CSS' },
    { svg: postman, title: 'CSS' },
    { svg: sketch, title: 'CSS' },
    { svg: storybook, title: 'CSS' },
    { svg: vite, title: 'CSS' },
    { svg: vscode, title: 'CSS' },
    { svg: swagger, title: 'CSS' },
    { svg: xcode, title: 'CSS' },
    { svg: openai, title: 'CSS' },
  ];

  //   return (
  //     <CardsContainer>
  //       {/* {skillSvgs.map((skill) => (
  //         <Image loading="lazy" src={skill.svg} alt="Skill Logo" />
  //       ))} */}
  //   );
  // };
  return (
    <CardsContainer>
      {skillSvgs.map((skill, index) => (
        <ImageWrapper key={index}>
          <img src={skill.svg} alt={`${skill.title} Logo`} />
          <IconTitle>{skill.title}</IconTitle>
        </ImageWrapper>
      ))}
    </CardsContainer>
  );
};
export default Skills;
