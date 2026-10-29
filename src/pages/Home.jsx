import Button from "@/components/Button/Button";
import { COLOR_GREY, COLOR_PRIMARY, COLOR_TEXT_MUTED, COLOR_WHITE } from "@/utils/globalColors";
import { GlobalColors } from "@/utils/globalColors";
import { Heading, SubHeading } from "@/utils/globalFonts";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import CountUp from "react-countup";
import {
  AiOutlineDownload,
  AiOutlineMail,
  AiOutlinePhone,
} from "react-icons/ai";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { IoLogoGooglePlaystore } from "react-icons/io5";
import { PiBracketsAngleBold } from "react-icons/pi";
import ReactTyped from "react-typed";
import styled, { keyframes, createGlobalStyle } from "styled-components";
import profilePic from "@/assets/images/JuriePPbw3.webp";
import resume from "@/assets/JurieSpiesResume.pdf";
import { GITHUB_CONFIG } from "@/config/github";
import RESUME_DATA from "../utils/RESUME_DATA.json";
import { getYearsOfExperience } from "../utils/helpers";
import ChatBot from "@/components/ChatBot/ChatBot";
import { useRef } from "react";

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
    width: 100%;
    overflow-y: auto !important;
    overflow-x: hidden;
    position: relative;
    padding-bottom: env(safe-area-inset-bottom, 0px);

    @media (min-height: 800px) {
      overflow-y: auto !important; /* Force auto instead of hidden */
    }
  }

  #root {
    min-height: 100vh;
    width: 100%;
    overflow-y: auto !important;
    overflow-x: hidden;
    position: relative;

    @media (min-height: 800px) {
      overflow-y: auto !important; /* Force auto instead of hidden */
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
    margin-bottom: calc(env(safe-area-inset-bottom, 40px) + 40px);
    margin-bottom: calc(
      constant(safe-area-inset-bottom, 40px) + 40px
    ); /* For older iOS */
    padding-bottom: 20px; /* Additional padding for safety */
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

const StatisticsLabel = styled(StyledSubHeading)`
  justify-content: center;
  text-align: center;
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
  width: 100%;
  overflow-y: auto; /* Always allow scrolling */
  overflow-x: hidden;
  position: relative;
  padding-bottom: 40px; /* Add bottom padding to prevent cutoff */

  @media (max-width: 768px) {
    padding-bottom: 60px; /* More padding on mobile */
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
    width: 100%;
    min-width: 0;
    box-sizing: border-box;
    padding: 0 24px;
  }
`;

const Jurie = styled(Heading)`
  color: var(--color-primary);
  font-size: 72px;

  /* mobile */
  @media (max-width: 768px) {
    font-size: 40px;
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
  const refDate = "2019-03-01";
  const today = new Date();
  const linesOfCodePerDay = 20;
  const diff = today - new Date(refDate);
  const days = diff / (1000 * 60 * 60 * 24);
  return days * linesOfCodePerDay;
};

const getCupsOfCoffee = () => {
  const refDate = "2019-03-01";
  const today = new Date();
  const cupsPerDay = 1;
  const diff = today - new Date(refDate);
  const days = diff / (1000 * 60 * 60 * 24);
  return days * cupsPerDay;
};

const Home = () => {
  const contentRef = useRef(null);

  const { data: totalRepositories } = useQuery({
    queryKey: ["githubRepos"],
    queryFn: async () => {
      const CACHE_KEY = "githubRepoCount";
      const CACHE_TTL = 1000 * 60 * 60 * 24;
      let cached = null;
      try {
        cached = JSON.parse(localStorage.getItem(CACHE_KEY));
      } catch {
        cached = null;
      }
      if (cached && Date.now() - cached.savedAt < CACHE_TTL) {
        return { total_count: cached.total_count };
      }
      try {
        const response = await axios({
          method: "get",
          url: `https://api.github.com/users/${GITHUB_CONFIG.USERNAME}`,
          headers: {
            Accept: "application/vnd.github+json",
            "X-GitHub-Api-Version": GITHUB_CONFIG.API_VERSION,
          },
        });
        const total_count = response.data.public_repos + 25; // Adding 25 to account for private repos
        try {
          localStorage.setItem(CACHE_KEY, JSON.stringify({ total_count, savedAt: Date.now() }));
        } catch {
          // Storage unavailable (e.g. private mode); the count still displays
        }
        return { total_count };
      } catch (error) {
        console.log("Error fetching GitHub repos:", error);
        if (cached) return { total_count: cached.total_count };
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
        <Center ref={contentRef}>
          <Main>
            <InfoContainer>
              <Occupation>Software Engineer</Occupation>
              <StyledHeading>Hello, I&apos;m</StyledHeading>
              <Jurie>Jurie Spies</Jurie>
              <Description>
                I’ve been building websites and mobile apps for over{" "}
                {getYearsOfExperience()} years. Most of my work is with React
                and React Native. I enjoy the tricky part of taking a design and
                turning it into something that feels good to use, especially
                when the UX needs a bit of extra thought. When I’m not fixing
                bugs or chasing performance, I’m usually trying out a new tool
                or looking for a cleaner way to ship a feature.
              </Description>
              <AINote>
                With AI, anyone can build a portfolio website like this. But if
                it were that easy, why aren’t more people doing it? The truth
                is, technology can assist—but it can’t replace dedication,
                curiosity, and the drive to build something meaningful. I may
                not have the highest formal education, but I am not lazy. I
                learn, I build, and I improve. That’s what sets me apart.
              </AINote>
              <br />
              <TypedContainer>
                {"{"}
                <ReactTyped
                  strings={RESUME_DATA.coolSoftwareTitles}
                  typeSpeed={60}
                  backSpeed={60}
                  shuffle
                  loop
                />
                {"}"}
              </TypedContainer>
            </InfoContainer>
            <ProfilePicContainer>
              <Border />
              <ProfilePic alt="Jurie Spies" src={profilePic} />
            </ProfilePicContainer>
          </Main>
          <SocialsContainer>
            <Button
              invert
              onClick={() => window.open(resume, "_blank")}
              rel="noreferrer"
            >
              <>
                Download CV
                <DownloadIcon />
              </>
            </Button>
            <AllIcons>
              <SocialIconContainer
                href={RESUME_DATA.github}
                aria-label="GitHub profile"
                target="_blank"
                rel="noreferrer"
              >
                <GithubIcon />
              </SocialIconContainer>
              <SocialIconContainer
                href={RESUME_DATA.linkedIn}
                aria-label="LinkedIn profile"
                target="_blank"
                rel="noreferrer"
              >
                <LinkedInIcon />
              </SocialIconContainer>
              <SocialIconContainer href={`tel:${RESUME_DATA.phoneNumber}`} aria-label="Call Jurie">
                <PhoneIcon />
              </SocialIconContainer>
              <SocialIconContainer href={`mailto:${RESUME_DATA.email}`} aria-label="Email Jurie">
                <MailIcon />
              </SocialIconContainer>
              <SocialIconContainer
                href={RESUME_DATA.dreamCode}
                aria-label="ForgeDev website"
                target="_blank"
                rel="noreferrer"
              >
                <DreamCodeIcon />
              </SocialIconContainer>
              <SocialIconContainer
                href={RESUME_DATA.dreamCodePlayStore}
                aria-label="ForgeDev apps on Google Play"
                target="_blank"
                rel="noreferrer"
              >
                <PlayStoreIcon />
              </SocialIconContainer>
            </AllIcons>
          </SocialsContainer>
          <StatisticsMainContainer>
            <Statistics>
              <StatisticsNumber>{getYearsOfExperience()}</StatisticsNumber>
              <StatisticsLabel>Years of Experience</StatisticsLabel>
            </Statistics>
            <Statistics>
              <StatisticsNumber>
                {totalRepositories?.total_count ?? "66"}
              </StatisticsNumber>
              <StatisticsLabel>Projects</StatisticsLabel>
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
              <StatisticsLabel>Lines of Code</StatisticsLabel>
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
              <StatisticsLabel>Cups of Coffee</StatisticsLabel>
            </Statistics>
          </StatisticsMainContainer>
        </Center>
        <ChatBot />
      </PageContainer>
    </>
  );
};
export default Home;

const AINote = styled.div`
  color: ${COLOR_TEXT_MUTED};
  font-size: 14px;
  margin-top: 20px;
  font-style: italic;
  padding: 15px;
  border-left: 2px solid ${COLOR_PRIMARY};
  background: rgba(255, 255, 255, 0.05);
`;
