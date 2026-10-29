import { useState, useEffect } from 'react';
import { FaGithub, FaBriefcase, FaUser } from 'react-icons/fa';
import { FiChrome } from 'react-icons/fi';
import { IoLogoGooglePlaystore } from 'react-icons/io5';
import styled, { createGlobalStyle } from 'styled-components';
import ApexFit from '../assets/projects/apexfit.webp';
import PiggyVault from '../assets/projects/piggyvault.webp';
import WodbudImage from '../assets/projects/wodbud.webp';
import GoWaterfall from '../assets/projects/GoWaterfall.webp';
import PasswordGenerator from '../assets/projects/PasswordGenerator.webp';
import Pickleball from '../assets/projects/Pickle.webp'
import BillScanner from '../assets/projects/BillScanner.webp';
import BeanAndBerry from '../assets/projects/Beanandberrysa.webp';
import AnyWorx from '../assets/projects/AnyWorx.webp';
import Proof from '../assets/projects/Proof.webp';
import ETTX from '../assets/projects/ETTX.webp';
import ForgeDev from '../assets/projects/ForgeDev.webp';
import CommunityOSWeb from '../assets/projects/CommunityOSWeb.webp';
import CommunityOSApp from '../assets/projects/CommunityOSApp.webp';
import Flare from '../assets/projects/Flare.webp';
import { COLOR_GREY, COLOR_PRIMARY, COLOR_WHITE, COLOR_BACKGROUND, COLOR_DARK, COLOR_HEADER } from '../utils/globalColors';
import { Heading, SubHeading } from '../utils/globalFonts';

const GlobalStyle = createGlobalStyle`
  html, body, #root {
    margin: 0;
    padding: 0;
    height: 100vh;
    overflow-x: hidden;
    width: 100%;
  }
  :root {
    --color-primary: ${COLOR_PRIMARY};
  }
`;

const Main = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  min-height: 100vh;
  padding: 20px;
  overflow-y: auto;
  background: #17161D;

  @media (max-width: 768px) {
    padding: 10px;
  }
`;

const Header = styled.div`
  text-align: center;
  margin-bottom: 40px;

  @media (max-width: 768px) {
    margin-bottom: 20px;
  }
`;

const Title = styled(Heading)`
  font-size: 48px;
  margin-bottom: 10px;

  @media (max-width: 768px) {
    font-size: 32px;
  }
`;

const Subtitle = styled(SubHeading)`
  font-size: 18px;
  color: ${COLOR_GREY};
  margin-bottom: 30px;
`;

const CategorySection = styled.div`
  width: 100%;
  max-width: 1200px;
  margin-bottom: 50px;
`;

const CategoryHeader = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 30px;
  gap: 15px;
`;

const CategoryIcon = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 50px;
  height: 50px;
  border-radius: 12px;
  background: ${props => props.isCompany ?
    'linear-gradient(135deg, #667eea 0%, #764ba2 100%)' :
    'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)'};
  color: white;
  font-size: 24px;
`;

const CategoryTitle = styled(Heading)`
  font-size: 32px;
  margin: 0;

  @media (max-width: 768px) {
    font-size: 24px;
  }
`;

const ProjectsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 30px;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 20px;
  }
`;

const ProjectCard = styled.div`
  background: ${COLOR_HEADER};
  border-radius: 20px;
  overflow: hidden;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
  transition: all 0.3s ease;
  border: ${props => props.isCompany ?
    '2px solid rgba(102, 126, 234, 0.3)' :
    '2px solid rgba(240, 147, 251, 0.3)'};

  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.4);
    border: ${props => props.isCompany ?
      '2px solid rgba(102, 126, 234, 0.6)' :
      '2px solid rgba(240, 147, 251, 0.6)'};
  }
`;

const ProjectImage = styled.div`
  width: 100%;
  height: 250px;
  position: relative;
  overflow: hidden;

  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: ${props => props.isCompany ?
      'linear-gradient(45deg, rgba(102, 126, 234, 0.8), rgba(118, 75, 162, 0.8))' :
      'linear-gradient(45deg, rgba(240, 147, 251, 0.8), rgba(245, 87, 108, 0.8))'};
    opacity: 0;
    transition: opacity 0.3s ease;
  }

  ${ProjectCard}:hover &::after {
    opacity: 1;
  }
`;

const ProjectPhoto = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
  display: block;
`;

const ProjectContent = styled.div`
  padding: 25px;
`;

const ProjectHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 15px;
`;

const ProjectTitle = styled(Heading)`
  font-size: 24px;
  margin: 0;
  color: ${COLOR_WHITE};

  @media (max-width: 768px) {
    font-size: 20px;
  }
`;

const ProjectType = styled.div`
  background: ${props => props.isCompany ?
    'linear-gradient(135deg, #667eea 0%, #764ba2 100%)' :
    'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)'};
  color: white;
  padding: 6px 12px;
  border-radius: 20px;
  font-size: 12px;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.5px;
`;

const ProjectDescription = styled(SubHeading)`
  font-size: 14px;
  color: ${COLOR_GREY};
  line-height: 1.6;
  margin: 15px 0;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
`;

const ProjectStack = styled.div`
  font-size: 13px;
  color: var(--color-primary);
  font-weight: 600;
  margin: 15px 0;
`;

const ProjectLinks = styled.div`
  display: flex;
  gap: 10px;
  margin-top: 20px;
`;

const ProjectLink = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background: ${props => props.isCompany ?
    'linear-gradient(135deg, #667eea 0%, #764ba2 100%)' :
    'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)'};
  color: white;
  text-decoration: none;
  transition: all 0.3s ease;

  &:hover {
    transform: scale(1.1);
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
  }
`;

const Work = () => {
  const [randomizedProjects, setRandomizedProjects] = useState({});

  const shuffleArray = (array) => {
    const shuffled = [...array];
    for (let i = shuffled.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled;
  };

  const companyProjects = [
    {
      title: 'ETTX',
      description: 'ETT designs and manufactures a diverse line of open pit mine support equipment and specialised mobile industrial equipment aimed at improving productivity and safety.',
      stack: 'TypeScript, React, Firebase',
      image: ETTX,
      liveUrl: 'https://www.ett.com/za/home',
      isCompany: true,
    },
    {
      title: 'Proof',
      description: 'Proof is a robust security platform designed for the security industry, law enforcement, insurance, and private businesses. It leverages advanced video analytics and a centralized video management system.',
      stack: 'TypeScript, React, Firebase',
      image: Proof,
      liveUrl: 'https://vumacam.co.za/proof',
      isCompany: true,
    },
    {
      title: 'GoWaterfall / GoCity / Balwin',
      description: 'Mobile platforms enhancing user engagement with their city. Designed for residents, employees, and visitors, the app simplifies navigation and offers convenient services.',
      stack: 'TypeScript, React, Firebase',
      image: GoWaterfall,
      liveUrl: 'https://www.gowaterfall.co.za/',
      playStore: 'https://play.google.com/store/apps/details?id=za.co.thinkdigital.balwin&hl=en_ZA',
      isCompany: true,
    },
  ];

  const personalProjects = [
    {
      title: 'ForgeDev',
      description: 'My software studio in Somerset West and Strand. We build custom websites, installable web apps (PWAs) and life-changing mobile apps for local clients, from scoping through to shipping.',
      stack: 'React, TypeScript, PWAs',
      image: ForgeDev,
      liveUrl: 'https://forge-dev.co.za/',
      isCompany: false,
    },
    {
      title: 'CommunityOS',
      description: 'Everything your neighbourhood needs, in one platform. Brings local business info, deals, events and community news together for residents and visitors, with business listings and a resident login.',
      stack: 'React, TypeScript, Supabase',
      image: CommunityOSWeb,
      liveUrl: 'https://communityos-web.co.za/',
      isCompany: false,
    },
    {
      title: 'CommunityOS Mobile',
      description: 'The CommunityOS companion app: a business directory, local specials, what\'s on, and a community hub with local emergency numbers and notices, all in your pocket.',
      stack: 'TypeScript, React Native, Expo, Supabase',
      image: CommunityOSApp,
      playStore: 'https://play.google.com/store/apps/details?id=za.co.forgedev.communityos',
      isCompany: false,
    },
    {
      title: 'Flare',
      description: 'Hold a button and the people you trust hear you. Sends an alert with your location to nearby neighbours and trusted contacts, who can respond and chat. Includes scheduled check-ins and home-screen widgets.',
      stack: 'TypeScript, React Native, Expo, Supabase',
      image: Flare,
      isCompany: false,
    },
    {
      title: 'WODbud',
      description: 'A functional fitness mobile app that allows users to generate custom workouts, access various timers, view Hero WODs, and use conversion tools.',
      stack: 'JavaScript, React Native, Jotai',
      image: WodbudImage,
      githubUrl: 'https://github.com/JurieSpies/WODbud',
      playStore: 'https://play.google.com/store/apps/details?id=com.wodbud',
      liveUrl: 'https://wodbud.netlify.app/',
      isCompany: false,
    },
    {
      title: 'PiggyVault',
      description: 'A budget app that allows users to track expenses and income, tag items, and monitor when they are going over budget. Also serves as a document vault.',
      stack: 'TypeScript, React, Firebase',
      image: PiggyVault,
      githubUrl: 'https://github.com/AdamErwee/piggyvault-react-native',
      isCompany: false,
    },
    {
      title: 'ApexFit',
      description: 'A gym management app that enables users to register for memberships, make payments, and book classes. Streamlines the gym experience.',
      stack: 'TypeScript, React, Firebase',
      image: ApexFit,
      githubUrl: 'https://github.com/JurieSpies/kleinmond_crossfit',
      liveUrl: 'https://apexfit-crossfit.netlify.app/',
      isCompany: false,
    },
    {
      title: 'AnyWorx',
      description: 'A professional construction and home improvement service provider in the Western Cape. Showcases 32+ years of experience with modern, responsive design.',
      stack: 'React, TypeScript, Styled Components',
      image: AnyWorx,
      liveUrl: 'https://anyworx.netlify.app/',
      isCompany: false,
    },
    {
      title: 'Bean & Berry',
      description: 'An e-commerce platform specializing in premium nuts, seeds, coffee, and natural treats. Features clean, modern design with intuitive shopping experience.',
      stack: 'React, TypeScript, E-commerce Integration',
      image: BeanAndBerry,
      liveUrl: 'https://beanandberrysa.netlify.app/',
      isCompany: false,
    },
    {
      title: 'Bill Scanner',
      description: 'A utility application for uploading and processing bills/receipts digitally. Simplifies expense tracking and document management.',
      stack: 'React, JavaScript, File Processing APIs',
      image: BillScanner,
      liveUrl: 'https://billscanner.netlify.app/',
      isCompany: false,
    },
    {
      title: 'Helderberg Pickleball',
      description: 'A community platform for pickleball enthusiasts with user authentication, member management, and community features to connect local players.',
      stack: 'React, TypeScript, Authentication, Community Features',
      image: Pickleball,
      liveUrl: 'https://helderbergpickleball.netlify.app/',
      isCompany: false,
    },
    {
      title: 'Password Generator',
      description: 'Sometimes I work, sometimes I play. This password generator helps users generate strong, unique passwords with customizable options.',
      stack: 'JavaScript, React',
      image: PasswordGenerator,
      liveUrl: 'https://juriepasswordgen.netlify.app/',
      isCompany: false,
    },
  ];

  useEffect(() => {
    setRandomizedProjects({
      company: shuffleArray(companyProjects),
      personal: shuffleArray(personalProjects),
    });
  }, []);

  return (
    <>
      <GlobalStyle />
      <Main>
        <Header>
          <Title>My Work</Title>
          <Subtitle>A collection of projects I've built for companies and personal endeavors</Subtitle>
        </Header>

        {randomizedProjects.company && (
          <CategorySection>
            <CategoryHeader>
              <CategoryIcon isCompany={true}>
                <FaBriefcase />
              </CategoryIcon>
              <CategoryTitle>Company Projects</CategoryTitle>
            </CategoryHeader>
            <ProjectsGrid>
              {randomizedProjects.company.map((project, index) => (
                <ProjectCard key={index} isCompany={project.isCompany}>
                  <ProjectImage isCompany={project.isCompany}>
                    <ProjectPhoto src={project.image} alt={`${project.title} screenshot`} loading="lazy" decoding="async" />
                  </ProjectImage>
                  <ProjectContent>
                    <ProjectHeader>
                      <ProjectTitle>{project.title}</ProjectTitle>
                      <ProjectType isCompany={project.isCompany}>Company</ProjectType>
                    </ProjectHeader>
                    <ProjectDescription>{project.description}</ProjectDescription>
                    <ProjectStack>{project.stack}</ProjectStack>
                    <ProjectLinks>
                      {project.githubUrl && (
                        <ProjectLink href={project.githubUrl} target="_blank" rel="noreferrer" isCompany={project.isCompany}>
                          <FaGithub />
                        </ProjectLink>
                      )}
                      {project.playStore && (
                        <ProjectLink href={project.playStore} target="_blank" rel="noreferrer" isCompany={project.isCompany}>
                          <IoLogoGooglePlaystore />
                        </ProjectLink>
                      )}
                      {project.liveUrl && (
                        <ProjectLink href={project.liveUrl} target="_blank" rel="noreferrer" isCompany={project.isCompany}>
                          <FiChrome />
                        </ProjectLink>
                      )}
                    </ProjectLinks>
                  </ProjectContent>
                </ProjectCard>
              ))}
            </ProjectsGrid>
          </CategorySection>
        )}

        {randomizedProjects.personal && (
          <CategorySection>
            <CategoryHeader>
              <CategoryIcon isCompany={false}>
                <FaUser />
              </CategoryIcon>
              <CategoryTitle>Personal Projects</CategoryTitle>
            </CategoryHeader>
            <ProjectsGrid>
              {randomizedProjects.personal.map((project, index) => (
                <ProjectCard key={index} isCompany={project.isCompany}>
                  <ProjectImage isCompany={project.isCompany}>
                    <ProjectPhoto src={project.image} alt={`${project.title} screenshot`} loading="lazy" decoding="async" />
                  </ProjectImage>
                  <ProjectContent>
                    <ProjectHeader>
                      <ProjectTitle>{project.title}</ProjectTitle>
                      <ProjectType isCompany={project.isCompany}>Personal</ProjectType>
                    </ProjectHeader>
                    <ProjectDescription>{project.description}</ProjectDescription>
                    <ProjectStack>{project.stack}</ProjectStack>
                    <ProjectLinks>
                      {project.githubUrl && (
                        <ProjectLink href={project.githubUrl} target="_blank" rel="noreferrer" isCompany={project.isCompany}>
                          <FaGithub />
                        </ProjectLink>
                      )}
                      {project.playStore && (
                        <ProjectLink href={project.playStore} target="_blank" rel="noreferrer" isCompany={project.isCompany}>
                          <IoLogoGooglePlaystore />
                        </ProjectLink>
                      )}
                      {project.liveUrl && (
                        <ProjectLink href={project.liveUrl} target="_blank" rel="noreferrer" isCompany={project.isCompany}>
                          <FiChrome />
                        </ProjectLink>
                      )}
                    </ProjectLinks>
                  </ProjectContent>
                </ProjectCard>
              ))}
            </ProjectsGrid>
          </CategorySection>
        )}
      </Main>
    </>
  );
};

export default Work;
