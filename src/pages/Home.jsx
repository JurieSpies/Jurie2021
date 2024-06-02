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
import styled, { keyframes } from 'styled-components';
import resumeData from '../RESUME_DATA.json';
import profilePic from '../assets/images/JuriePPbw3.png';

const REACT_APP_GITHUB_REPO_TOKEN = import.meta.env.VITE_REACT_APP_GITHUB_REPO_TOKEN;

const StatisticsMainContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex: 1;
  margin-top: 100px;
`;

const Statistics = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  flex: 1;
`;

const StatisticsNumber = styled(Heading)`
  font-size: 52px;
  margin-right: 10px;
`;

const SocialsContainer = styled.div`
  display: flex;
  flex-direction: row;
  width: fit-content;
  /* margin-top: 15px; */
  margin-bottom: 15px;
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

const DownloadIcon = styled(AiOutlineDownload)`
  margin-left: 10px;
  font-size: 20px;
`;

const Occupation = styled(Heading)`
  font-weight: normal;
  color:${COLOR_GREY};
`;

const TypedContainer = styled(SubHeading)`
  color:${COLOR_GREY};
  width: 100%;
  min-width: 400px;
  flex: 1;
  display: flex;
`;

const Description = styled.div`
  color: ${COLOR_WHITE};
  font-size: 16px;
  margin-top: 30px;
  display: flex;
`;

const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  justify-content: center;
`;

const Center = styled.div`
  display: flex;
  flex-direction: column;
`;

const Main = styled.div`
  display: flex;
  flex-wrap: wrap;
  /* margin-top: 100px; */
`;

const InfoContainer = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-self: center;
`;

const rotate = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
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
`;

const Jurie = styled(Heading)`
  color: ${COLOR_PRIMARY};
  font-size: 72px;
`;

const ProfilePicContainer = styled.div`
  flex:1;
  position: relative;
  justify-content: center;
  display: flex;
`;

const ProfilePic = styled.img`
  border-radius: 200px;
  /* position: relative; */
  max-height: 350px;
  max-width: 350px;
  min-height: 250px;
  min-width: 250px;
`;

const getYearsOfExperience = () => {
  const startDate = new Date('2019-03-01');
  const endDate = new Date();
  const yearsExperience = Math.floor((endDate - startDate) / (1000 * 60 * 60 * 24 * 365));
  return yearsExperience;
};

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
    queryFn: () => axios({
      method: 'get',
      url: 'https://api.github.com/search/repositories?q=user:JurieSpies',
      headers: {
        Accept: 'application/vnd.github+json',
        Authorization: `Bearer ${REACT_APP_GITHUB_REPO_TOKEN}`,
        'X-GitHub-Api-Version': '2022-11-28',
      },
    }).then((response) => response.data),
  });

  return (
    <PageContainer>
      <Center>
        <Main>
          <InfoContainer>
            <Occupation>
              Software Engineer
            </Occupation>
            <Heading style={{ fontSize: 52 }}>
              Hello, I&apos;m
            </Heading>
            <Jurie>
              Jurie Spies
            </Jurie>
            <Description>
              Front-end engineer specializing in building dynamic and high-performance web and mobile applications using React,React Native
            </Description>
            <br />
            <TypedContainer>
              {'{'}
              <ReactTyped
                strings={resumeData.coolSoftwareTitles}
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
          <Button invert onClick={() => window.open(resumeData.resume, '_blank')} style={{ marginRight: 10 }}>
            <>
              Download CV
              <DownloadIcon />
            </>
          </Button>
          <SocialIconContainer href={resumeData.github} target="_blank" rel="noreferrer">
            <GithubIcon />
          </SocialIconContainer>
          <SocialIconContainer href={resumeData.linkedIn} target="_blank" rel="noreferrer">
            <LinkedInIcon />
          </SocialIconContainer>
          <SocialIconContainer href={`tel:${resumeData.phoneNumber}`}>
            <PhoneIcon />
          </SocialIconContainer>
          <SocialIconContainer href={`mailto:${resumeData.email}`}>
            <MailIcon />
          </SocialIconContainer>
          <SocialIconContainer href={resumeData.dreamCode} target="_blank" rel="noreferrer">
            <DreamCodeIcon />
          </SocialIconContainer>
          <SocialIconContainer href={resumeData.dreamCodePlayStore} target="_blank" rel="noreferrer">
            <PlayStoreIcon />
          </SocialIconContainer>
        </SocialsContainer>
        <StatisticsMainContainer>
          <Statistics>
            <StatisticsNumber>
              {getYearsOfExperience()}
            </StatisticsNumber>
            <SubHeading>
              Years of Experience
            </SubHeading>
          </Statistics>
          <Statistics>
            <StatisticsNumber>
              {totalRepositories?.total_count ?? '00'}
            </StatisticsNumber>
            <SubHeading>
              Projects
            </SubHeading>
          </Statistics>
          <Statistics>
            <StatisticsNumber>
              <CountUp
                start={0}
                end={getLinesOfCode()}
                delay={0.5}
                preserveValue
                useEasing
              />
            </StatisticsNumber>
            <SubHeading>
              Lines of Code
            </SubHeading>
          </Statistics>
          <Statistics>
            <StatisticsNumber>
              <CountUp
                start={0}
                end={getCupsOfCoffee()}
                delay={0.5}
                preserveValue
                useEasing
                duration={10}
              />
            </StatisticsNumber>
            <SubHeading>
              Cups of Coffee
            </SubHeading>
          </Statistics>
        </StatisticsMainContainer>
      </Center>
    </PageContainer>
  );
};
export default Home;
