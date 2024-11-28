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
import GoWaterfall from '../assets/projects/GoWaterfall.png';
import PasswordGenerator from '../assets/projects/PasswordGenerator.png';
import Proof from '../assets/projects/Proof.png';
import ETTX from '../assets/projects/ETTX.png';
import { COLOR_GREY, COLOR_PRIMARY } from '../utils/globalColors';
import { Heading, SubHeading } from '../utils/globalFonts';

const PlayStoreIcon = styled(IoLogoGooglePlaystore)`
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
  min-height: 600px;
  position: relative;
  overflow: hidden;

  @media (max-width: 768px) {
    min-height: 800px;
  }
`;

const Project = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  position: absolute;
  left: 0;
  right: 0;
`;

const ButtonContainer = styled.div`
  display: flex;
  flex: 0.5;
  justify-content: space-between;
  align-items: center;
  width: 100%;

  @media (max-width: 768px) {
    margin: 20px 0px;
  }
`;

const AnimateBackButton = styled.div`
  &:hover {
    transform: scale(1.01) rotate(-5deg);
  }
`;

const AnimateNextButton = styled.div`
  &:hover {
    transform: scale(1.01) rotate(5deg);
  }
`;

const AnimatedSlide = styled.div`
  animation: slideIn 0.5s ease-out;
  display: flex;
  flex: 1;
  align-items: center;
  width: 100%;
  
  @keyframes slideIn {
    from {
      opacity: 0;
      transform: translateX(30px);
    }
    to {
      opacity: 1;
      transform: translateX(0);
    }
  }

  @media (max-width: 768px) {
    margin-top: 20px;
    flex-direction: column-reverse;
    justify-content: center;
    align-items: center;
    
    @keyframes slideIn {
      from {
        opacity: 0;
        transform: translateY(20px);
      }
      to {
        opacity: 1;
        transform: translateY(0);
      }
    }
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
    width: 100%;
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
  const [isAnimating, setIsAnimating] = useState(false);

  const projects = [
    {
      type: 'Frontend Project',
      number: '01',
      title: 'WODbud',
      description:
        'WODbud is a functional fitness mobile app that allows users to generate custom workouts, access various timers, view Hero WODs, and use conversion tools. It provides a comprehensive and user-friendly platform to enhance training experiences. PWA also a Work in Progress.',
      stack: 'JavaScript , React Native, Jotai',
      image: WodbudImage,
      githubUrl: 'https://github.com/JurieSpies/WODbud',
      playStore: 'https://play.google.com/store/apps/details?id=com.wodbud',
      liveUrl: 'https://wodbud.netlify.app/',
    },
    {
      type: 'Frontend Project',
      number: '02',
      title: 'PiggyVault',
      description:
        'Piggyvault is a budget app that allows users to track expenses and income, tag items, and monitor when they are going over budget. Additionally, it serves as a document vault for secure storage of financial documents.',
      stack: 'Typescript, React, Firebase',
      image: PiggyVault,
      githubUrl: 'https://github.com/AdamErwee/piggyvault-react-native',
    },
    {
      type: 'Frontend Project',
      number: '03',
      title: 'ApexFit',
      description: 'I developed a gym management app that enables users to register for memberships, make payments, and book classes. This app streamlines the gym experience, making it easy for users to manage their memberships and schedules.',
      stack: 'Typescript, React, Firebase',
      image: ApexFit,
      githubUrl: 'https://github.com/JurieSpies/kleinmond_crossfit',
      liveUrl: 'https://apexfit-crossfit.netlify.app/',
    },
    {
      type: 'Frontend Project',
      number: '04',
      title: 'ETTX',
      description: 'ETT designs and manufactures a diverse line of open pit mine support equipment and specialised mobile industrial equipment aimed at improving productivity and safety.',
      stack: 'Typescript, React, Firebase',
      image: ETTX,
      liveUrl: 'https://www.ett.com/za/home',
    },
    {
      type: 'Frontend Project',
      number: '05',
      title: 'Proof',
      description: 'Proof is a robust security platform designed for the security industry, law enforcement, insurance, and private businesses. It leverages Vumacam’s advanced video analytics and a centralized video management system hosted in a Tier-3 data center. The platform integrates with a public space smart camera network and private sites, sending alerts to the E2 Fusion Centre, which collaborates with the SAPS command center for necessary support.',
      stack: 'Typescript, React, Firebase',
      image: Proof,
      liveUrl: 'https://vumacam.co.za/proof',
    },
    {
      type: 'Frontend Project',
      number: '06',
      title: 'GoWaterfall / GoCity / Balwin ',
      description: 'GoWaterfall, GoCity, and Balwin are mobile platform, enhancing user engagement with their city. Designed for residents, employees, and visitors, the app simplifies navigation and offers a range of convenient services. By integrating digital and real-world experiences, these apps aim to elevate lifestyle and streamline daily activities in the urban environment.',
      stack: 'Typescript, React, Firebase',
      image: GoWaterfall,
      liveUrl: 'https://www.gowaterfall.co.za/',
      playStore: 'https://play.google.com/store/apps/details?id=za.co.thinkdigital.balwin&hl=en_ZA',
    },
    {
      type: 'Frontend Project',
      number: '07',
      title: 'Password Generator',
      description: 'Sometimes I work, sometimes I play. This password generator was created for the fun of it and helps users generate strong, unique passwords. Users can customize the length, complexity, and character types of their passwords.',
      stack: 'Javascript , React',
      image: PasswordGenerator,
      liveUrl: 'https://juriepasswordgen.netlify.app/',
    },
  ];

  const handleTransition = (newIndex) => {
    if (isAnimating) return;
    setIsAnimating(true);
    setActiveProject(newIndex);
    setTimeout(() => setIsAnimating(false), 500);
  };

  const goBack = () => handleTransition((activeProject - 1 + projects.length) % projects.length);
  const next = () => handleTransition((activeProject + 1) % projects.length);

  return (
    <Main>
      <ProjectContainer>
        {projects.map((project, index) => (
          activeProject === index && (
            <Project key={project.number}>
              <AnimatedSlide>
                <Left>
                  <StyledHeading>{project.number}</StyledHeading>
                  <StyledSubHeading>{project.type}</StyledSubHeading>
                  <Paragraph>{project.description}</Paragraph>
                  <Stack>{project.stack}</Stack>
                  <Icons>
                    {project.githubUrl && (
                      <SocialIconContainer href={project.githubUrl} target="_blank" rel="noreferrer">
                        <GithubIcon />
                      </SocialIconContainer>
                    )}
                    {project.playStore && (
                      <SocialIconContainer href={project.playStore} target="_blank" rel="noreferrer">
                        <PlayStoreIcon />
                      </SocialIconContainer>
                    )}
                    {project.liveUrl && (
                      <SocialIconContainer href={project.liveUrl} target="_blank" rel="noreferrer">
                        <PwaIcon />
                      </SocialIconContainer>
                    )}
                  </Icons>
                </Left>
                <Spacer />
                <Right>
                  <Image loading="lazy" src={project.image} alt={project.title} />
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
            disabled={isAnimating}
            invert
            style={{ borderRadius: '5px' }}
          >
            Back
          </BackButton>
        </AnimateBackButton>
        <AnimateNextButton>
          <NextButton
            onClick={next}
            disabled={isAnimating}
            style={{ borderRadius: '5px' }}
          >
            Next
          </NextButton>
        </AnimateNextButton>
      </ButtonContainer>
    </Main>
  );
};

export default Work;
