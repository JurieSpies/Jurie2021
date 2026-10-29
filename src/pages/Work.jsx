import { useState, useEffect } from 'react';
import { FaGithub, FaBriefcase, FaUser } from 'react-icons/fa';
import { FiChrome } from 'react-icons/fi';
import { IoLogoGooglePlaystore } from 'react-icons/io5';
import PropTypes from 'prop-types';
import styled from 'styled-components';
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
import MatheeDental from '../assets/projects/MatheeDental.webp';
import BibleQuest from '../assets/projects/BibleQuest.webp';
import { COLOR_GREY, COLOR_WHITE, COLOR_BACKGROUND, COLOR_TEXT_MUTED } from '../utils/globalColors';
import { Heading, SubHeading } from '../utils/globalFonts';

const Main = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  padding: 20px;

  @media (max-width: 768px) {
    padding: 10px;
  }
`;

const Header = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  margin-bottom: 40px;

  @media (max-width: 768px) {
    margin-bottom: 20px;
  }
`;

const Title = styled(Heading)`
  font-size: 52px;
  margin: 0 0 10px;
  justify-content: center;

  @media (max-width: 768px) {
    font-size: 32px;
  }
`;

const Subtitle = styled(SubHeading)`
  font-size: 18px;
  color: ${COLOR_GREY};
  margin-bottom: 30px;
  justify-content: center;

  @media (max-width: 768px) {
    font-size: 16px;
  }
`;

const CategorySection = styled.section`
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
  border-radius: 10px;
  border: 1px solid var(--color-primary);
  color: var(--color-primary);
  font-size: 24px;
`;

const CategoryTitle = styled(Heading).attrs({ as: 'h2' })`
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

const ProjectCard = styled.article`
  display: flex;
  flex-direction: column;
  background: ${COLOR_BACKGROUND};
  border-radius: 10px;
  overflow: hidden;
  border: 1px solid var(--color-primary);
  transition: transform 0.3s ease-out, box-shadow 0.3s ease-out;

  @media (hover: hover) {
    &:hover {
      transform: translateY(-6px);
      box-shadow: 0 5px 15px var(--color-primary);
    }
  }

  @media (prefers-reduced-motion: reduce) {
    &:hover {
      transform: none;
    }
  }
`;

const ProjectImage = styled.div`
  width: 100%;
  height: 250px;
  overflow: hidden;
  border-bottom: 1px solid var(--color-primary);
`;

const ProjectPhoto = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
  display: block;
  transition: transform 0.5s ease-out;

  ${ProjectCard}:hover & {
    transform: scale(1.04);
  }

  @media (prefers-reduced-motion: reduce) {
    ${ProjectCard}:hover & {
      transform: none;
    }
  }
`;

const ProjectContent = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  padding: 25px;

  @media (max-width: 768px) {
    padding: 20px;
  }
`;

const ProjectHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  gap: 15px;
`;

const ProjectTitle = styled(Heading).attrs({ as: 'h3' })`
  font-size: 24px;
  margin: 0;
  color: ${COLOR_WHITE};
  text-wrap: balance;

  @media (max-width: 768px) {
    font-size: 20px;
  }
`;

const ProjectType = styled.span`
  flex-shrink: 0;
  border: 1px solid var(--color-primary);
  color: var(--color-primary);
  padding: 4px 12px;
  border-radius: 20px;
  font-size: 12px;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.5px;
`;

const ProjectDescription = styled.p`
  font-size: 15px;
  font-weight: 400;
  color: ${COLOR_TEXT_MUTED};
  line-height: 1.6;
  margin: 15px 0 0;

  @media (max-width: 768px) {
    font-size: 14px;
  }
`;

const ProjectStack = styled.div`
  font-size: 14px;
  color: var(--color-primary);
  font-weight: 600;
  margin: 15px 0 0;
`;

const ProjectLinks = styled.div`
  display: flex;
  gap: 12px;
  margin-top: auto;
  padding-top: 20px;
`;

const ProjectLink = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  border: 1px solid var(--color-primary);
  color: var(--color-primary);
  font-size: 18px;
  text-decoration: none;
  transition: box-shadow 0.5s ease-in-out, color 0.3s ease-out;

  &:hover {
    color: ${COLOR_WHITE};
    box-shadow: 1px 0px 10px 2px var(--color-primary);
  }
`;

const ProjectCardItem = ({ project, label }) => (
  <ProjectCard>
    <ProjectImage>
      <ProjectPhoto src={project.image} alt={`${project.title} screenshot`} loading="lazy" decoding="async" />
    </ProjectImage>
    <ProjectContent>
      <ProjectHeader>
        <ProjectTitle>{project.title}</ProjectTitle>
        <ProjectType>{label}</ProjectType>
      </ProjectHeader>
      <ProjectDescription>{project.description}</ProjectDescription>
      <ProjectStack>{project.stack}</ProjectStack>
      <ProjectLinks>
        {project.githubUrl && (
          <ProjectLink href={project.githubUrl} target="_blank" rel="noreferrer" aria-label={`${project.title} on GitHub`} title="GitHub">
            <FaGithub aria-hidden="true" />
          </ProjectLink>
        )}
        {project.playStore && (
          <ProjectLink href={project.playStore} target="_blank" rel="noreferrer" aria-label={`${project.title} on Google Play`} title="Google Play">
            <IoLogoGooglePlaystore aria-hidden="true" />
          </ProjectLink>
        )}
        {project.liveUrl && (
          <ProjectLink href={project.liveUrl} target="_blank" rel="noreferrer" aria-label={`Visit the ${project.title} website`} title="Live site">
            <FiChrome aria-hidden="true" />
          </ProjectLink>
        )}
      </ProjectLinks>
    </ProjectContent>
  </ProjectCard>
);

ProjectCardItem.propTypes = {
  project: PropTypes.shape({
    title: PropTypes.string.isRequired,
    description: PropTypes.string,
    stack: PropTypes.string,
    image: PropTypes.string,
    githubUrl: PropTypes.string,
    playStore: PropTypes.string,
    liveUrl: PropTypes.string,
  }).isRequired,
  label: PropTypes.string.isRequired,
};

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
    },
    {
      title: 'Proof',
      description: 'Proof is a robust security platform designed for the security industry, law enforcement, insurance, and private businesses. It leverages advanced video analytics and a centralized video management system.',
      stack: 'TypeScript, React, Firebase',
      image: Proof,
      liveUrl: 'https://vumacam.co.za/proof',
    },
    {
      title: 'GoWaterfall / GoCity / Balwin',
      description: 'Mobile platforms enhancing user engagement with their city. Designed for residents, employees, and visitors, the app simplifies navigation and offers convenient services.',
      stack: 'TypeScript, React, Firebase',
      image: GoWaterfall,
      liveUrl: 'https://www.gowaterfall.co.za/',
      playStore: 'https://play.google.com/store/apps/details?id=za.co.thinkdigital.balwin&hl=en_ZA',
    },
  ];

  const personalProjects = [
    {
      title: 'ForgeDev',
      description: 'My software studio in Somerset West and Strand. We build custom websites, installable web apps (PWAs) and life-changing mobile apps for local clients, from scoping through to shipping.',
      stack: 'React, TypeScript, PWAs',
      image: ForgeDev,
      liveUrl: 'https://forge-dev.co.za/',
    },
    {
      title: 'CommunityOS',
      description: 'Everything your neighbourhood needs, in one platform. Brings local business info, deals, events and community news together for residents and visitors, with business listings and a resident login.',
      stack: 'React, TypeScript, Supabase',
      image: CommunityOSWeb,
      liveUrl: 'https://communityos-web.co.za/',
    },
    {
      title: 'CommunityOS Mobile',
      description: 'The CommunityOS companion app: a business directory, local specials, what\'s on, and a community hub with local emergency numbers and notices, all in your pocket.',
      stack: 'TypeScript, React Native, Expo, Supabase',
      image: CommunityOSApp,
      playStore: 'https://play.google.com/store/apps/details?id=za.co.forgedev.communityos',
    },
    {
      title: 'Flare',
      description: 'Hold a button and the people you trust hear you. Sends an alert with your location to nearby neighbours and trusted contacts, who can respond and chat. Includes scheduled check-ins and home-screen widgets.',
      stack: 'TypeScript, React Native, Expo, Supabase',
      image: Flare,
    },
    {
      title: 'Mathee Dental Studio',
      description: 'A website for a family dental practice in Somerset West. Covers services, the team and patient resources, with online appointment booking and a clear way to get in touch.',
      stack: 'Next.js, TypeScript, Tailwind CSS',
      image: MatheeDental,
      liveUrl: 'https://matheedentalstudio.co.za/',
    },
    {
      title: 'Bible Quest',
      description: 'A daily game that walks through all 66 books of the Bible in 600 short quests. Read the passage, take a quiz and reflect, with XP, streaks and a full Bible reader in five translations. Installable and works offline.',
      stack: 'JavaScript, Canvas, PWA',
      image: BibleQuest,
      liveUrl: 'https://jurie-bible-quest.netlify.app/',
    },
    {
      title: 'WODbud',
      description: 'A functional fitness mobile app that allows users to generate custom workouts, access various timers, view Hero WODs, and use conversion tools.',
      stack: 'JavaScript, React Native, Jotai',
      image: WodbudImage,
      githubUrl: 'https://github.com/JurieSpies/WODbud',
      playStore: 'https://play.google.com/store/apps/details?id=com.wodbud',
      liveUrl: 'https://wodbud.netlify.app/',
    },
    {
      title: 'PiggyVault',
      description: 'A budget app that allows users to track expenses and income, tag items, and monitor when they are going over budget. Also serves as a document vault.',
      stack: 'TypeScript, React, Firebase',
      image: PiggyVault,
      githubUrl: 'https://github.com/AdamErwee/piggyvault-react-native',
    },
    {
      title: 'ApexFit',
      description: 'A gym management app that enables users to register for memberships, make payments, and book classes. Streamlines the gym experience.',
      stack: 'TypeScript, React, Firebase',
      image: ApexFit,
      githubUrl: 'https://github.com/JurieSpies/kleinmond_crossfit',
      liveUrl: 'https://apexfit-crossfit.netlify.app/',
    },
    {
      title: 'AnyWorx',
      description: 'A professional construction and home improvement service provider in the Western Cape. Showcases 32+ years of experience with modern, responsive design.',
      stack: 'React, TypeScript, Styled Components',
      image: AnyWorx,
      liveUrl: 'https://anyworx.netlify.app/',
    },
    {
      title: 'Bean & Berry',
      description: 'An e-commerce platform specializing in premium nuts, seeds, coffee, and natural treats. Features clean, modern design with intuitive shopping experience.',
      stack: 'React, TypeScript, E-commerce Integration',
      image: BeanAndBerry,
      liveUrl: 'https://beanandberrysa.netlify.app/',
    },
    {
      title: 'Bill Scanner',
      description: 'A utility application for uploading and processing bills/receipts digitally. Simplifies expense tracking and document management.',
      stack: 'React, JavaScript, File Processing APIs',
      image: BillScanner,
      liveUrl: 'https://billscanner.netlify.app/',
    },
    {
      title: 'Helderberg Pickleball',
      description: 'A community platform for pickleball enthusiasts with user authentication, member management, and community features to connect local players.',
      stack: 'React, TypeScript, Authentication, Community Features',
      image: Pickleball,
      liveUrl: 'https://helderbergpickleball.netlify.app/',
    },
    {
      title: 'Password Generator',
      description: 'Sometimes I work, sometimes I play. This password generator helps users generate strong, unique passwords with customizable options.',
      stack: 'JavaScript, React',
      image: PasswordGenerator,
      liveUrl: 'https://juriepasswordgen.netlify.app/',
    },
  ];

  useEffect(() => {
    setRandomizedProjects({
      company: shuffleArray(companyProjects),
      personal: shuffleArray(personalProjects),
    });
  }, []);

  return (
    <Main>
      <Header>
        <Title as="h1">My Work</Title>
        <Subtitle>A collection of projects I've built for companies and personal endeavors</Subtitle>
      </Header>

      {randomizedProjects.company && (
        <CategorySection>
          <CategoryHeader>
            <CategoryIcon aria-hidden="true">
              <FaBriefcase />
            </CategoryIcon>
            <CategoryTitle>Company Projects</CategoryTitle>
          </CategoryHeader>
          <ProjectsGrid>
            {randomizedProjects.company.map((project) => (
              <ProjectCardItem key={project.title} project={project} label="Company" />
            ))}
          </ProjectsGrid>
        </CategorySection>
      )}

      {randomizedProjects.personal && (
        <CategorySection>
          <CategoryHeader>
            <CategoryIcon aria-hidden="true">
              <FaUser />
            </CategoryIcon>
            <CategoryTitle>Personal Projects</CategoryTitle>
          </CategoryHeader>
          <ProjectsGrid>
            {randomizedProjects.personal.map((project) => (
              <ProjectCardItem key={project.title} project={project} label="Personal" />
            ))}
          </ProjectsGrid>
        </CategorySection>
      )}
    </Main>
  );
};

export default Work;
