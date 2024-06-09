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

const CardsContainer = styled.div`
  justify-content: center;
  flex:1;
  height: 100%;
  flex-direction: row;
  justify-content: space-around;
  margin-top: 35px;

  @media (max-width: 768px) {
  align-items: center;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin-top: 0px;
  }
`;

const Image = styled.img`
  margin: 20px;
  background-color: ${COLOR_BACKGROUND};
  padding: 20px;
  border-radius: 10px;
  border: 1px solid ${COLOR_PRIMARY};
  min-width: 100px;
  animation: fadeIn 1s ease-in-out;
  width: 15%;
  filter: grayscale(100%);
  &:hover {
    filter: none;
    transform: scale(1.15)
    }

    @media (max-width: 768px) {
      align-self: center;
  }
`;

const Skills = () => {
  const skillSvgs = [
    { svg: css },
    { svg: html },
    { svg: js },
    { svg: react },
    { svg: typescript },
    { svg: azure },
    { svg: cypress },
    { svg: docker },
    { svg: eslint },
    { svg: discord },
    { svg: figma },
    { svg: git },
    { svg: github },
    { svg: githubactions },
    { svg: gitlab },
    { svg: firebase },
    { svg: graphql },
    { svg: insomnia },
    { svg: jest },
    { svg: knex },
    { svg: nodejs },
    { svg: postgressql },
    { svg: postman },
    { svg: sketch },
    { svg: storybook },
    { svg: vite },
    { svg: vscode },
    { svg: swagger },
    { svg: xcode },
    { svg: openai },
  ];

  return (
    <CardsContainer>
      {skillSvgs.map((skill) => (
        <Image src={skill.svg} alt="Skill Logo" />
      ))}
    </CardsContainer>
  );
};
export default Skills;
