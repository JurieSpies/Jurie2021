import Button from '@/components/Button/Button';
import { COLOR_GREY, COLOR_WHITE } from '@/utils/globalColors';
import { GlobalColors } from '@/utils/globalColors';
import { Heading, SubHeading } from '@/utils/globalFonts';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import CountUp from 'react-countup';
import { AiOutlineDownload, AiOutlineMail, AiOutlinePhone } from 'react-icons/ai';
import { FaGithub, FaLinkedinIn } from 'react-icons/fa';
import { IoLogoGooglePlaystore } from 'react-icons/io5';
import { PiBracketsAngleBold } from 'react-icons/pi';
import ReactTyped from 'react-typed';
import styled, { keyframes, createGlobalStyle } from 'styled-components';
import profilePic from '@/assets/images/JuriePPbw3.png';
import resume from '@/assets/JurieSpiesResume.pdf';
import { GITHUB_CONFIG } from '@/config/github';
import RESUME_DATA from '../utils/RESUME_DATA.json';
import { getYearsOfExperience } from '../utils/helpers';
import ChatBot from '@/components/ChatBot/ChatBot';

const rotate = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`;

const GlobalStyle = createGlobalStyle`
  html {
    scroll-behavior: smooth;
    overflow-x: hidden;
    -ms-overflow-style: none;
    scrollbar-width: none;
  }
  
  body {
    margin: 0;
    padding: 0;
    min-height: 100vh;
    min-height: -webkit-fill-available;
    min-height: -moz-available;
    min-height: fill-available;
    min-height: stretch;
    width: 100%;
    overflow-y: auto;
    overflow-x: hidden;
    position: relative;
    padding-bottom: env(safe-area-inset-bottom, 0px);
    -webkit-text-size-adjust: 100%;
    -ms-text-size-adjust: 100%;
    
    @supports (-webkit-touch-callout: none) {
      min-height: -webkit-fill-available;
    }
    
    @media (min-height: 800px) {
      overflow-y: hidden;
    }
    
    @media (max-width: 768px) {
      -webkit-overflow-scrolling: touch;
      -ms-overflow-style: -ms-autohiding-scrollbar;
    }
  }

  #root {
    min-height: 100vh;
    min-height: -webkit-fill-available;
    min-height: -moz-available;
    min-height: fill-available;
    min-height: stretch;
    width: 100%;
    overflow-y: auto;
    overflow-x: hidden;
    position: relative;
    
    @supports (-webkit-touch-callout: none) {
      min-height: -webkit-fill-available;
    }
    
    @media (min-height: 800px) {
      overflow-y: hidden;
    }
  }
`;

const StyledSubHeading = styled(SubHeading)`
  max-width: 30%;
  color: ${COLOR_GREY};
  font-size: 16px;

  /* mobile */
  @media (max-width: 768px) {
    max-width: 100%;
  }
`;

const AllIcons = styled.div`
  align-items: center;
  display: flex;
  margin: 0px 10px 10px 0px;

  /* mobile */
  @media (max-width: 768px) {
    margin-top: 20px;
    justify-content: center;
  }
`;

const StyledHeading = styled(Heading)`
  font-size: 52px;

  /* mobile */
  @media (max-width: 768px) {
    font-size: 32px;
  }
`;

const StatisticsMainContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
  margin-top: 50px;
  width: 100%;
  -webkit-overflow-scrolling: touch;
  -ms-overflow-style: -ms-autohiding-scrollbar;

  @media (max-width: 768px) {
    margin-top: 20px;
    gap: 20px;
    justify-content: center;
    margin-bottom: calc(env(safe-area-inset-bottom, 20px) + 20px);
    margin-bottom: calc(constant(safe-area-inset-bottom, 20px) + 20px); /* For older iOS */
  }
`;

const Statistics = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  flex: 1;
  min-width: 200px;

  @media (max-width: 768px) {
    min-width: 150px;
  }
`;

const StatisticsNumber = styled(Heading)`
  font-size: 42px;

  @media (max-width: 768px) {
    font-size: 32px;
  }
`;

const SocialsContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-top: 30px;

  @media (max-width: 768px) {
    margin-top: 15px;
    flex-direction: column;
  }
`;

const PageContainer = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  justify-content: center;
  min-height: 100vh;
  min-height: -webkit-fill-available;
  min-height: -moz-available;
  min-height: fill-available;
  min-height: stretch;
  width: 100%;
  overflow-y: auto;
  overflow-x: hidden;
  position: relative;
  -webkit-overflow-scrolling: touch;
  -ms-overflow-style: -ms-autohiding-scrollbar;

  @supports (-webkit-touch-callout: none) {
    min-height: -webkit-fill-available;
  }

  @media (min-height: 800px) {
    overflow-y: hidden;
    height: 100vh;
    height: -webkit-fill-available;
    height: -moz-available;
    height: fill-available;
    height: stretch;
  }

  /* mobile */
  @media (max-width: 768px) {
    padding: 20px;
    padding-bottom: calc(env(safe-area-inset-bottom, 20px) + 60px);
    padding-bottom: calc(constant(safe-area-inset-bottom, 20px) + 60px); /* For older iOS */
    justify-content: flex-start;
    padding-top: max(40px, env(safe-area-inset-top, 40px));
    overscroll-behavior-y: none;
    -ms-scroll-chaining: none;
  }
`;

const Main = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  align-content: center;
  width: 100%;
  max-width: 100%; /* Ensure content doesn't overflow */

  /* mobile */
  @media (max-width: 768px) {
    flex-direction: column-reverse;
    margin-bottom: 20px;
  }
`;

const ProfilePicContainer = styled.div`
  flex: 1;
  position: relative;
  justify-content: center;
  display: flex;
  width: 350px;
  height: 350px;

  &:hover {
    transform: scale(1.03) rotate(5deg);
    transition: all 1s ease-in-out;
  }

  /* mobile */
  @media (max-width: 768px) {
    width: 200px;
    height: 200px;
  }
`;

const ProfilePic = styled.img`
  border-radius: 200px;
  height: 350px;
  width: 350px;
  object-fit: cover;
  aspect-ratio: 1;

  /* mobile */
  @media (max-width: 768px) {
    border-radius: 150px;
    height: 200px;
    width: 200px;
  }
`;

const Border = styled.div`
  border-radius: 100%;
  border: 5px solid ${COLOR_WHITE};
  border-right-style: dotted;
  animation: ${rotate} 80s linear infinite;
  position: absolute;
  width: 354px;
  height: 354px;

  /* mobile */
  @media (max-width: 768px) {
    max-height: 204px;
    max-width: 204px;
    min-height: 124px;
    min-width: 124px;
  }
`;

const Occupation = styled(Heading)`
  font-weight: normal;
  color: ${COLOR_GREY};
`;

const TypedContainer = styled(SubHeading)`
  color: ${COLOR_GREY};
  width: 100%;
  margin-bottom: 15px;
  min-width: 400px;
  flex: 1;

  /* mobile */
  @media (max-width: 768px) {
    justify-content: center;
    min-width: 100px;
  }
`;

const Description = styled.div`
  color: ${COLOR_WHITE};
  font-size: 16px;
  margin-top: 30px;
  display: flex;
  flex: 1;
  width: 100%;

  /* mobile */
  @media (max-width: 768px) {
    width: 100%;
    text-align: Left;
  }
`;

const Center = styled.div`
  display: flex;
  flex-direction: column;
  padding-bottom: env(safe-area-inset-bottom, 0px);
  padding-bottom: constant(safe-area-inset-bottom, 0px); /* For older iOS */
  -webkit-overflow-scrolling: touch;
  -ms-overflow-style: -ms-autohiding-scrollbar;
`;

const InfoContainer = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;

  /* mobile */
  @media (max-width: 768px) {
    align-items: center;
  }
`;

const Jurie = styled(Heading)`
  color: var(--color-primary);
  font-size:72px;

  /* mobile */
  @media (max-width: 768px) {
    font-size: 52px;
  }
`;

const DownloadIcon = styled(AiOutlineDownload)`
  margin-left: 10px;
  font-size: 20px;
`;

const SocialIconContainer = styled.a`
  display: flex;
  width: 32px;
  border-radius: 100%;
  margin: 0 10px;
  height: 32px;
  &:hover {
    box-shadow: 1px 0px 10px 2px var(--color-primary);
    -webkit-box-shadow: 1px 0px 10px 2px var(--color-primary);
    -moz-box-shadow: 1px 0px 10px 2px var(--color-primary);
    transition: all 0.5s ease-in-out;
  }
`;

const PlayStoreIcon = styled(IoLogoGooglePlaystore)`
  display: flex;
  color: var(--color-primary);
  font-size: 32px;
  padding: 5px;
  border-radius: 100%;
  border: 1px solid var(--color-primary);
`;

const DreamCodeIcon = styled(PiBracketsAngleBold)`
  display: flex;
  color: var(--color-primary);
  font-size: 32px;
  padding: 5px;
  border-radius: 100%;
  border: 1px solid var(--color-primary);
`;

const MailIcon = styled(AiOutlineMail)`
  display: flex;
  color: var(--color-primary);
  font-size: 32px;
  padding: 5px;
  border-radius: 100%;
  border: 1px solid var(--color-primary);
`;

const PhoneIcon = styled(AiOutlinePhone)`
  display: flex;
  color: var(--color-primary);
  font-size: 32px;
  padding: 5px;
  border-radius: 100%;
  border: 1px solid var(--color-primary);
`;

const GithubIcon = styled(FaGithub)`
  display: flex;
  color: var(--color-primary);
  font-size: 32px;
  padding: 5px;
  border-radius: 100%;
  border: 1px solid var(--color-primary);
`;

const LinkedInIcon = styled(FaLinkedinIn)`
  display: flex;
  color: var(--color-primary);
  font-size: 32px;
  padding: 5px;
  border-radius: 100%;
  border: 1px solid var(--color-primary);
`;

const SocialIcon = styled.div`
  margin: 0 10px;
  height: 32px;
  &:hover {
    box-shadow: 1px 0px 10px 2px var(--color-primary);
    -webkit-box-shadow: 1px 0px 10px 2px var(--color-primary);
    -moz-box-shadow: 1px 0px 10px 2px var(--color-primary);
    transition: all 0.5s ease-in-out;
  }
`;

const getLinesOfCode = () => {
  const refDate = '2019-03-01';
  const today = new Date();
  const linesOfCodePerDay = 20;
  const diff = today - new Date(refDate);
  const days = diff / (1000 * 60 * 60 * 24);
  return days * linesOfCodePerDay;
};

const getCupsOfCoffee = () => {
  const refDate = '2019-03-01';
  const today = new Date();
  const cupsPerDay = 1;
  const diff = today - new Date(refDate);
  const days = diff / (1000 * 60 * 60 * 24);
  return days * cupsPerDay;
};

const Home = () => {
  const { data: totalRepositories } = useQuery({
    queryKey: ['githubRepos'],
    queryFn: async () => {
      try {
        const response = await axios({
          method: 'get',
          url: `https://api.github.com/users/${GITHUB_CONFIG.USERNAME}/repos`,
          headers: {
            Accept: 'application/vnd.github+json',
            'X-GitHub-Api-Version': GITHUB_CONFIG.API_VERSION,
          },
        });
        return { total_count: response.data.length + 25 }; // Adding 25 to account for private repos
      } catch (error) {
        console.log('Error fetching GitHub repos:', error);
        return { total_count: 66 }; // Fallback value on error
      }
    },
    retry: false,
    staleTime: 1000 * 60 * 60, // Cache for 1 hour
  });

  return (
    <>
      <GlobalStyle />
      <GlobalColors />
      <PageContainer>
        {/* <FloatingWhatsApp
          accountName="Jurie"
          phoneNumber="27768862529"
          allowClickAway
          avatar={profilePic}
          chatMessage="Hi there! How can I help you?"
          notification
          darkMode
          messageDelay={0}
          allowEsc
        /> */}
        <Center>
          <Main>
            <InfoContainer>
              <Occupation>
                Software Engineer
              </Occupation>
              <StyledHeading>
                Hello, I&apos;m
              </StyledHeading>
              <Jurie>
                Jurie Spies
              </Jurie>
              <Description>
                Building digital experiences has been my passion for over {getYearsOfExperience()} years now. I develop responsive web apps and intuitive mobile solutions, with React and React Native as my tools of choice. What I enjoy most is tackling those tricky UX challenges – finding that sweet spot where code meets human behavior. When I'm not debugging or optimizing performance, you'll find me exploring new frameworks or brainstorming better ways to translate design concepts into functional interfaces.
              </Description>
              <br />
              <TypedContainer>
                {'{'}
                <ReactTyped
                  strings={RESUME_DATA.coolSoftwareTitles}
                  typeSpeed={60}
                  backSpeed={60}
                  shuffle
                  loop
                />
                {'}'}
              </TypedContainer>
            </InfoContainer>
            <ProfilePicContainer>
              <Border />
              <ProfilePic alt="jurie" src={profilePic} />
            </ProfilePicContainer>
          </Main>
          <SocialsContainer>
            <Button invert onClick={() => window.open(resume, '_blank')} rel="noreferrer">
              <>
                Download CV
                <DownloadIcon />
              </>
            </Button>
            <AllIcons>
              <SocialIconContainer href={RESUME_DATA.github} target="_blank" rel="noreferrer">
                <GithubIcon />
              </SocialIconContainer>
              <SocialIconContainer href={RESUME_DATA.linkedIn} target="_blank" rel="noreferrer">
                <LinkedInIcon />
              </SocialIconContainer>
              <SocialIconContainer href={`tel:${RESUME_DATA.phoneNumber}`}>
                <PhoneIcon />
              </SocialIconContainer>
              <SocialIconContainer href={`mailto:${RESUME_DATA.email}`}>
                <MailIcon />
              </SocialIconContainer>
              <SocialIconContainer href={RESUME_DATA.dreamCode} target="_blank" rel="noreferrer">
                <DreamCodeIcon />
              </SocialIconContainer>
              <SocialIconContainer href={RESUME_DATA.dreamCodePlayStore} target="_blank" rel="noreferrer">
                <PlayStoreIcon />
              </SocialIconContainer>
            </AllIcons>
          </SocialsContainer>
          <StatisticsMainContainer>
            <Statistics>
              <StatisticsNumber>
                {getYearsOfExperience()}
              </StatisticsNumber>
              <StyledSubHeading>
                Years of Experience
              </StyledSubHeading>
            </Statistics>
            <Statistics>
              <StatisticsNumber>
                {totalRepositories?.total_count ?? '66'}
              </StatisticsNumber>
              <StyledSubHeading>
                Projects
              </StyledSubHeading>
            </Statistics>
            <Statistics>
              <StatisticsNumber>
                <CountUp
                  start={0}
                  end={getLinesOfCode()}
                  delay={0.5}
                  preserveValue
                  useEasing={false}
                />
              </StatisticsNumber>
              <StyledSubHeading>
                Lines of Code
              </StyledSubHeading>
            </Statistics>
            <Statistics>
              <StatisticsNumber>
                <CountUp
                  start={0}
                  end={getCupsOfCoffee()}
                  delay={0.5}
                  preserveValue
                  useEasing={false}
                />
              </StatisticsNumber>
              <StyledSubHeading>
                Cups of Coffee
              </StyledSubHeading>
            </Statistics>
          </StatisticsMainContainer>
        </Center>
        <ChatBot />
      </PageContainer>
    </>
  );
};
export default Home;
