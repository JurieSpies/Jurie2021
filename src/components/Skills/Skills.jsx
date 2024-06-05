import { COLOR_BACKGROUND, COLOR_PRIMARY } from '@/utils/globalColors';
import styled from 'styled-components';

const CardsContainer = styled.div`
  justify-content: center;
  flex:1;
  height: 100%;
  flex-direction: row;
  justify-content: space-around;
  margin-top: 35px;
`;

const Image = styled.img`
  margin: 20px;
  background-color: ${COLOR_BACKGROUND};
  padding: 20px;
  border-radius: 10px;
  border: 1px solid ${COLOR_PRIMARY};
  width: 15%;
  min-width: 100px;
  animation: fadeIn 1s ease-in-out;
  filter: grayscale(100%);
  &:hover {
    filter: none;
    transform: scale(1.15)
  }
`;

const Skills = () => {
  const skillSvgs = [
    { svg: 'src/assets/skillIcons/css.svg' },
    { svg: 'src/assets/skillIcons/html.svg' },
    { svg: 'src/assets/skillIcons/js.svg' },
    { svg: 'src/assets/skillIcons/react.svg' },
    { svg: 'src/assets/skillIcons/typescript.svg' },
    { svg: 'src/assets/skillIcons/azure.svg' },
    { svg: 'src/assets/skillIcons/cypress.svg' },
    { svg: 'src/assets/skillIcons/docker.svg' },
    { svg: 'src/assets/skillIcons/eslint.svg' },
    { svg: 'src/assets/skillIcons/discord.svg' },
    { svg: 'src/assets/skillIcons/figma.svg' },
    { svg: 'src/assets/skillIcons/git.svg' },
    { svg: 'src/assets/skillIcons/github.svg' },
    { svg: 'src/assets/skillIcons/githubactions.svg' },
    { svg: 'src/assets/skillIcons/gitlab.svg' },
    { svg: 'src/assets/skillIcons/firebase.svg' },
    { svg: 'src/assets/skillIcons/graphql.svg' },
    { svg: 'src/assets/skillIcons/insomnia.svg' },
    { svg: 'src/assets/skillIcons/jest.svg' },
    { svg: 'src/assets/skillIcons/knex.svg' },
    { svg: 'src/assets/skillIcons/nodejs.svg' },
    { svg: 'src/assets/skillIcons/postgressql.svg' },
    { svg: 'src/assets/skillIcons/postman.svg' },
    { svg: 'src/assets/skillIcons/sketch.svg' },
    { svg: 'src/assets/skillIcons/storybook.svg' },
    { svg: 'src/assets/skillIcons/vite.svg' },
    { svg: 'src/assets/skillIcons/vscode.svg' },
    { svg: 'src/assets/skillIcons/swagger.svg' },
    { svg: 'src/assets/skillIcons/xcode.svg' },
    { svg: 'src/assets/skillIcons/openai.svg' },
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
