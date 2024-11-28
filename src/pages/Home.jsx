import Button from '@/components/Button/Button';
import { COLOR_GREY, COLOR_PRIMARY, COLOR_WHITE } from '@/utils/globalColors';
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
import RESUME_DATA from '../utils/RESUME_DATA.json';
import { getYearsOfExperience } from '../utils/helpers';
import { GITHUB_CONFIG } from '@/config/github';

// import { FloatingWhatsApp } from 'react-floating-whatsapp';

const rotate = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`;

const GlobalStyle = createGlobalStyle`
  html, body, #root {
    margin: 0;
    padding: 0;
    height: 100vh;
    overflow: hidden;
    position: fixed;
    width: 100%;
  }
`;

const StyledSubHeading = styled(SubHeading)`
  max-width: 30%;
  color:${COLOR_GREY};
  font-size: 16px;

  /* mobile */
  @media (max-width: 768px) {
  max-width: 100%;
  font-size: 14px;
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

  @media (max-width: 768px) {
    margin-top: 20px;
    gap: 20px;
    justify-content: center;
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
  height: 100vh;
  overflow: hidden;

  /* mobile */
  @media (max-width: 768px) {
    padding: 20px;
    justify-content: flex-start;
    padding-top: 40px;
  }
`;

const Main = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  align-content: center;

  /* mobile */
  @media (max-width: 768px) {
    flex-direction: column-reverse;
    margin-bottom: 20px;
  }
`;

const ProfilePicContainer = styled.div`
  flex:1;
  position: relative;
  justify-content: center;
  display: flex;

  &:hover {
    transform: scale(1.03) rotate(5deg);
    transition: all 1s ease-in-out;
  }
`;

const ProfilePic = styled.img`
  border-radius: 200px;
  max-height: 350px;
  max-width: 350px;
  min-height: 250px;
  min-width: 250px;

  /* mobile */
  @media (max-width: 768px) {
  border-radius: 150px;
  max-height: 200px;
  max-width: 200px;
  min-height: 120px;
  min-width: 120px;
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
  color:${COLOR_GREY};
`;

const TypedContainer = styled(SubHeading)`
  color:${COLOR_GREY};
  width: 100%;
  margin-bottom: 15px;
  min-width: 400px;
  flex: 1;

  /* mobile */
  @media (max-width: 768px) {
    justify-content: center;
    min-width: 100px ;
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
  color: ${COLOR_PRIMARY};
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
    box-shadow: 1px 0px 10px 2px ${COLOR_PRIMARY};
    -webkit-box-shadow: 1px 0px 10px 2px ${COLOR_PRIMARY};
    -moz-box-shadow: 1px 0px 10px 2px ${COLOR_PRIMARY};
    transition: all 0.5s ease-in-out;
  }
`;

const PlayStoreIcon = styled(IoLogoGooglePlaystore)`
  display: flex;
  color: ${COLOR_PRIMARY};
  font-size: 32px;
  padding: 5px;
  border-radius: 100%;
  border: 1px solid ${COLOR_PRIMARY};
`;

const DreamCodeIcon = styled(PiBracketsAngleBold)`
  display: flex;
  color: ${COLOR_PRIMARY};
  font-size: 32px;
  padding: 5px;
  border-radius: 100%;
  border: 1px solid ${COLOR_PRIMARY};
`;

const MailIcon = styled(AiOutlineMail)`
  display: flex;
  color: ${COLOR_PRIMARY};
  font-size: 32px;
  padding: 5px;
  border-radius: 100%;
  border: 1px solid ${COLOR_PRIMARY};
`;

const PhoneIcon = styled(AiOutlinePhone)`
  display: flex;
  color: ${COLOR_PRIMARY};
  font-size: 32px;
  padding: 5px;
  border-radius: 100%;
  border: 1px solid ${COLOR_PRIMARY};
  `;

const GithubIcon = styled(FaGithub)`
  display: flex;
  color: ${COLOR_PRIMARY};
  font-size: 32px;
  padding: 5px;
  border-radius: 100%;
  border: 1px solid ${COLOR_PRIMARY};
`;

const LinkedInIcon = styled(FaLinkedinIn)`
  display: flex;
  color: ${COLOR_PRIMARY};
  font-size: 32px;
  padding: 5px;
  border-radius: 100%;
  border: 1px solid ${COLOR_PRIMARY};
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
                I’m a Software Engineer who loves building web and mobile apps. I work with React, React Native, and Vue.js to create fast and user-friendly applications that people enjoy using.
                {' '}
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
      </PageContainer>
    </>
  );
};
export default Home;
