/* eslint-disable import/no-duplicates */
import BackButton from '@/components/Button/Button';
import NextButton from '@/components/Button/Button';
import { useState } from 'react';
import styled from 'styled-components';
import ApexFit from '../assets/projects/apexfit.png';
import PiggyVault from '../assets/projects/piggyvault.png';
import WodbudImage from '../assets/projects/wodbud.png';
import { COLOR_GREY, COLOR_PRIMARY } from '../utils/globalColors';
import { Heading, SubHeading } from '../utils/globalFonts';

const Main = styled(Heading)`
  display: flex;
  flex-direction: column;
  align-items: center;
  flex: 1;
  `;

const ProjectContainer = styled.div`
  display: flex;
  flex: 2;
  width: 100%;
  `;

const Project = styled.div`
  display: flex;
  flex-direction: row;
  `;

const ButtonContainer = styled.div`
  display: flex;
  flex:0.5;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`;

const AnimatedSlide = styled.div`
  animation: fadeIn 1.5s ease-in-out;
  display: flex;
  flex: 1;
  align-items: center;
`;

const StyledHeading = styled(Heading)`
  font-size: 52px;
`;

const StyledSubHeading = styled(SubHeading)`
  font-size: 22px;
`;

const Paragraph = styled(SubHeading)`
  font-size: 18px;
  font-weight: 100;
  color: ${COLOR_GREY};
`;

const Stack = styled(SubHeading)`
  font-size: 20px;
  color: ${COLOR_PRIMARY};
`;

const Left = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;

  @media (max-width: 768px) {
    flex-direction: column;
    height: 100%;
    margin-bottom: 25px;
  }
  `;

const Spacer = styled.div`
  display: flex;
  flex: 0.2;
  height: 100%;
`;

const Right = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  flex: 1;

  @media (max-width: 768px) {
    flex-direction: column;
    height: 100%;
  }
`;

const Image = styled.img`
  width: auto;
  height: 100%;
  object-fit: cover;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
`;

const Work = () => {
  console.log('🚀 example');
  const [activeProject, setActiveProject] = useState(0);

  const projects = [
    {
      number: '01',
      title: 'WODbud',
      description:
        'WODbud is a functional fitness app that allows users to generate custom workouts, access various timers, view Hero WODs, and use conversion tools. It provides a comprehensive and user-friendly platform to enhance training experiences.',
      stack: 'JavaScript , React Native, Jotai',
      image: WodbudImage,
    },
    {
      number: '02',
      title: 'PiggyVault',
      description:
        'Piggyvault is a budget app that allows users to track expenses and income, tag items, and monitor when they are going over budget. Additionally, it serves as a document vault for secure storage of financial documents.',
      stack: 'Typescript, React, Firebase',
      image: PiggyVault,
    },
    {
      number: '03',
      title: 'PiggyVault',
      description: 'I developed a gym management app that enables users to register for memberships, make payments, and book classes. This app streamlines the gym experience, making it easy for users to manage their memberships and schedules.',
      stack: 'Typescript, React, Firebase',
      image: ApexFit,
    },
  ];

  return (
    <Main>
      <ProjectContainer>
        {projects.map((project, index) => (
          activeProject === index
        && (
          <Project>
            <AnimatedSlide>
              <Left>
                <StyledHeading>{project.number}</StyledHeading>
                <StyledSubHeading>Frontend Project</StyledSubHeading>
                <Paragraph>{project.description}</Paragraph>
                <Stack>{project.stack}</Stack>
              </Left>
              <Spacer />
              <Right>
                <Image src={project.image} alt={project.title} />
              </Right>
            </AnimatedSlide>
          </Project>
        )
        ))}
      </ProjectContainer>
      <ButtonContainer>
        <BackButton onClick={() => setActiveProject((activeProject - 1 + projects.length) % projects.length)} invert style={{ borderRadius: '5px' }}>
          Back
        </BackButton>
        <NextButton onClick={() => setActiveProject((activeProject + 1) % projects.length)} style={{ borderRadius: '5px' }}>
          Next Project
        </NextButton>
      </ButtonContainer>
    </Main>
  );
};

export default Work;
