/* eslint-disable import/no-named-default */
import { default as BackButton, default as NextButton } from '@/components/Button/Button';
import { useState } from 'react';
import { FaGithub } from 'react-icons/fa';
import { FiChrome } from 'react-icons/fi';
import { IoLogoGooglePlaystore } from 'react-icons/io5';
import styled from 'styled-components';
import ApexFit from '../assets/projects/apexfit.png';
import PiggyVault from '../assets/projects/piggyvault.png';
import WodbudImage from '../assets/projects/wodbud.png';
import { COLOR_GREY, COLOR_PRIMARY } from '../utils/globalColors';
import { Heading, SubHeading } from '../utils/globalFonts';

const LiveIcon = styled(IoLogoGooglePlaystore)`
  display: flex;
  color: ${COLOR_PRIMARY};
  font-size: 32px;
  padding: 5px;
  border-radius: 100%;
  border: 1px solid ${COLOR_PRIMARY};
`;

const PwaIcon = styled(FiChrome)`
  display: flex;
  color: ${COLOR_PRIMARY};
  font-size: 32px;
  padding: 5px;
  border-radius: 100%;
  border: 1px solid ${COLOR_PRIMARY};
`;

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

  @media (max-width: 768px) {
  margin: 20px 0px;
  }
`;

const AnimateBackButton = styled.div`
&:hover{
  transform: scale(1.01) rotate(-5deg);
}
`;

const AnimateNextButton = styled.div`
&:hover {
  transform: scale(1.01) rotate(5deg);
}
`;

const AnimatedSlide = styled.div`
  animation: fadeIn 1.5s ease-in-out;
  display: flex;
  flex: 1;
  align-items: center;

  @media (max-width: 768px) {
    margin-top: 20px;
    flex-direction: column-reverse;
    justify-content: center;
    align-items: center;
  }
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
  margin: 20px 0px;
  color: ${COLOR_GREY};
`;

const Stack = styled(SubHeading)`
  font-size: 20px;
  color: ${COLOR_PRIMARY};
`;

const Icons = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
`;

const Left = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;

  @media (max-width: 768px) {
    margin: 0px 50px;
  }
  `;

const Spacer = styled.div`
  display: flex;
  flex: 0.2;
  height: 100%;


  @media (max-width: 768px) {
    display: none;
  }
`;

const Right = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  flex: 1;

  @media (max-width: 768px) {
    @media (max-width: 768px) {
      width: 100%;
  }
  }
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
`;

const SocialIconContainer = styled.a`
display: flex;
width: 32px;
border-radius: 100%;
margin: 50px 30px 0px 0px;
height: 32px;
  &:hover {
    box-shadow: 1px 0px 10px 2px ${COLOR_PRIMARY};
    -webkit-box-shadow: 1px 0px 10px 2px ${COLOR_PRIMARY};
    -moz-box-shadow: 1px 0px 10px 2px ${COLOR_PRIMARY};
    transition: all 0.5s ease-in-out;
  }
`;

const GithubIcon = styled(FaGithub)`
  display: flex;
  color: ${COLOR_PRIMARY};
  font-size: 32px;
  padding: 5px;
  border-radius: 100%;
  border: 1px solid ${COLOR_PRIMARY};
`;

const Work = () => {
  const [activeProject, setActiveProject] = useState(0);

  const projects = [
    {
      number: '01',
      title: 'WODbud',
      description:
        'WODbud is a functional fitness mobile app that allows users to generate custom workouts, access various timers, view Hero WODs, and use conversion tools. It provides a comprehensive and user-friendly platform to enhance training experiences. PWA also a Work in Progress.',
      stack: 'JavaScript , React Native, Jotai',
      image: WodbudImage,
      githubUrl: 'https://github.com/JurieSpies/WODbud',
      liveUrl: 'https://play.google.com/store/apps/details?id=com.wodbud',
      pwa: 'https://wodbud.netlify.app/',
    },
    {
      number: '02',
      title: 'PiggyVault',
      description:
        'Piggyvault is a budget app that allows users to track expenses and income, tag items, and monitor when they are going over budget. Additionally, it serves as a document vault for secure storage of financial documents.',
      stack: 'Typescript, React, Firebase',
      image: PiggyVault,
      githubUrl: 'https://github.com/AdamErwee/piggyvault-react-native',
    },
    {
      number: '03',
      title: 'ApexFit',
      description: 'I developed a gym management app that enables users to register for memberships, make payments, and book classes. This app streamlines the gym experience, making it easy for users to manage their memberships and schedules.',
      stack: 'Typescript, React, Firebase',
      image: ApexFit,
      githubUrl: 'https://github.com/JurieSpies/kleinmond_crossfit',
      liveUrl: 'https://apexfit-crossfit.netlify.app/',
    },
  ];

  const goBack = () => setActiveProject((activeProject - 1 + projects.length) % projects.length);
  const next = () => setActiveProject((activeProject + 1) % projects.length);

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
                <Icons>
                  <SocialIconContainer href={project.githubUrl} target="_blank" rel="noreferrer">
                    <GithubIcon />
                  </SocialIconContainer>
                  <SocialIconContainer href={project.liveUrl} target="_blank" rel="noreferrer">
                    <LiveIcon />
                  </SocialIconContainer>
                  {project?.pwa && (
                  <SocialIconContainer href="https://wodbud.netlify.app/" target="_blank" rel="noreferrer">
                    <PwaIcon />
                  </SocialIconContainer>
                  )}
                </Icons>
              </Left>
              <Spacer />
              <Right>
                <Image
                  loading="lazy"
                  src={project.image}
                  alt={project.title}
                />
              </Right>
            </AnimatedSlide>
          </Project>
        )
        ))}
      </ProjectContainer>
      <ButtonContainer>
        <AnimateBackButton>
          <BackButton
            onClick={goBack}
            invert
            style={{ borderRadius: '5px' }}
          >
            Back
          </BackButton>
        </AnimateBackButton>
        <AnimateNextButton>
          <NextButton
            onClick={next}
            style={{ borderRadius: '5px' }}
          >
            Next Project
          </NextButton>
        </AnimateNextButton>
      </ButtonContainer>
    </Main>
  );
};

export default Work;
