import { COLOR_BACKGROUND, COLOR_PRIMARY, COLOR_WHITE } from '@/utils/globalColors';
import styled from 'styled-components';
import css from '../../assets/skillIcons/css.svg';
import html from '../../assets/skillIcons/html.svg';
import js from '../../assets/skillIcons/js.svg';
import react from '../../assets/skillIcons/react.svg';
import typescript from '../../assets/skillIcons/typescript.svg';
import azure from '../../assets/skillIcons/azure.svg';
import angular from '../../assets/skillIcons/angular.svg';
import cypress from '../../assets/skillIcons/cypress.svg';
import docker from '../../assets/skillIcons/docker.svg';
import vue from '../../assets/skillIcons/vue.svg';
import nuxtjs from '../../assets/skillIcons/nuxtjs.svg';
import eslint from '../../assets/skillIcons/eslint.svg';
import discord from '../../assets/skillIcons/discord.svg';
import figma from '../../assets/skillIcons/figma.svg';
import git from '../../assets/skillIcons/git.svg';
import github from '../../assets/skillIcons/github.svg';
import kendoui from '../../assets/skillIcons/kendoui.svg';
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
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 20px;
  margin-top: 35px;
`;

const ImageWrapper = styled.div`
  text-align: center;
  margin: 10px;
  background-color: ${COLOR_BACKGROUND};
  padding: 20px;
  border-radius: 10px;
  border: 1px solid var(--color-primary);
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
  color: var(--color-primary);
`;

const TopSkills = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 30px;
  margin-top: 30px;
  padding: 20px;
  border-radius: 10px;
  border: 1px solid var(--color-primary);
  background-color: rgba(0, 0, 0, 0.2);
`;

const SkillTitle = styled.h3`
  color: var(--color-primary);
  margin-bottom: 10px;
`;

const SkillList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  list-style: none;
  padding: 0;
`;

const SkillTag = styled.li`
  background-color: rgba(var(--color-primary-rgb), 0.2);
  color: ${COLOR_WHITE};
  padding: 5px 10px;
  border-radius: 20px;
  font-size: 14px;
`;

const Skills = () => {
  const skillSvgs = [
    { svg: css, title: 'css' },
    { svg: html, title: 'html' },
    { svg: js, title: 'js' },
    { svg: react, title: 'react' },
    { svg: typescript, title: 'typescript' },
    { svg: azure, title: 'azure' },
    { svg: angular, title: 'angular' },
    { svg: cypress, title: 'cypress' },
    { svg: docker, title: 'docker' },
    { svg: eslint, title: 'eslint' },
    { svg: discord, title: 'discord' },
    { svg: figma, title: 'figma' },
    { svg: git, title: 'git' },
    { svg: github, title: 'github' },
    { svg: kendoui, title: 'kendoUi' },
    { svg: githubactions, title: 'github actions' },
    { svg: gitlab, title: 'gitlab' },
    { svg: firebase, title: 'firebase' },
    { svg: graphql, title: 'graphql' },
    { svg: insomnia, title: 'insomnia' },
    { svg: jest, title: 'jest' },
    { svg: knex, title: 'knex' },
    { svg: nodejs, title: 'nodejs' },
    { svg: postgressql, title: 'postgressql' },
    { svg: postman, title: 'postman' },
    { svg: sketch, title: 'sketch' },
    { svg: storybook, title: 'storybook' },
    { svg: vite, title: 'vite' },
    { svg: vue, title: 'vue' },
    { svg: nuxtjs, title: 'nuxtjs' },
    { svg: vscode, title: 'vscode' },
    { svg: swagger, title: 'swagger' },
    { svg: xcode, title: 'xcode' },
    { svg: openai, title: 'openai' },
  ];

  const randomizedSkills = [...skillSvgs].sort(() => Math.random() - 0.5);

  return (
    <>
      <TopSkills>
        <SkillTitle>Desired Roles</SkillTitle>
        <SkillList>
          {['Senior Frontend Developer', 'React Native Developer', 'Agentic AI'].map(role => (
            <SkillTag key={role}>{role}</SkillTag>
          ))}
        </SkillList>
        
        <SkillTitle style={{ marginTop: '20px' }}>Top Skills</SkillTitle>
        <SkillList>
          {['React', 'React Native', 'JavaScript', 'Vue', 'TypeScript', 'Node.js', 'UI/UX Design'].map(skill => (
            <SkillTag key={skill}>{skill}</SkillTag>
          ))}
        </SkillList>
      </TopSkills>
      
      <CardsContainer>
        {randomizedSkills.map((skill, index) => (
          <ImageWrapper key={index}>
            <img src={skill.svg} alt={`${skill.title} Logo`} height='58'/>
            <IconTitle>{skill.title}</IconTitle>
          </ImageWrapper>
        ))}
      </CardsContainer>
    </>
  );
};
export default Skills;
