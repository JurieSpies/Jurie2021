import styled from 'styled-components';
import { COLOR_GREY, COLOR_WHITE } from '../../utils/globalColors';
import { Heading, SubHeading } from '../../utils/globalFonts';
import { getAge, getYearsOfExperience } from '../../utils/helpers';

const StyledHeading = styled(Heading)`
  font-size: 18px;

  @media (max-width: 768px) {
    font-size: 20px;
    }
    `;

const StyledSubHeading = styled(SubHeading)`
  font-size: 18px;
  /* margin-right: 20px; */
  color: ${COLOR_WHITE};
  font-weight: 100;

  @media (max-width: 768px) {
    font-size: 16px;
  }
`;

const Info = styled.div`
  display: flex;
  align-items: left;
  padding: 10px;
  flex-direction: column;
`;

const Column = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;

`;

const Spacer = styled.div`
  display: flex;
  flex: 0.1;

  @media (max-width: 1260px) {
    display: none;
  }
`;

const CardsContainer = styled.div`
  justify-content: center;
  flex:1;
  height: 100%;
   width: 85%;
  flex-direction: row;
  justify-content: space-around;
  margin-top: 60px;
  align: left;
  grid-template-columns: 10fr 1fr;
  gap: 50px
  color: ${COLOR_WHITE};
  display: flex;


@media (max-width: 768px) {
  flex-direction: column;
  margin-top: 20px;
  grid-template-columns: 1fr;
  }
`;
const Description = styled.div`
  color: ${COLOR_GREY};
  font-size: 16px;
  margin-top: 20px;
  display: flex;
  flex: 1;
  width: 100%;

  /* mobile */
  @media (max-width: 768px) {
    width: 100%;
    text-align: left;
  }
`;

const Responsibilities = () => (
  <CardsContainer>
    <Column>
      <Info>
        <StyledSubHeading>Front-End Development</StyledSubHeading>
        <Description>
          I build user-friendly websites and mobile apps using React,React Native and Vuejs. I work with tools like Axios,Tanstack,Redux,Jotai and Context API to manage data and connect to various APIs to make everything work smoothly.
        </Description>
      </Info>
      <Info>
        <StyledSubHeading>Back-End Development</StyledSubHeading>
        <Description>
          I work on the server side of applications using Node.js and Express.js. This includes creating APIs, managing databases with PostgreSQL, and using Docker to package everything together nicely.
        </Description>
      </Info>
      <Info>
        <StyledSubHeading>Technical Leadership</StyledSubHeading>
        <Description>
          Beyond writing code, I've grown into guiding technical decisions and mentoring team members. I enjoy the collaborative aspects of code reviews – both giving constructive feedback and receiving it. I've learned that aligning technical choices with business goals is just as important as writing elegant code.
        </Description>
      </Info>
      <Info>
        <StyledSubHeading>Agile Methodologies Implementation</StyledSubHeading>
        <Description>
          I use Agile methods like Scrum to keep projects organized and on track. This includes running daily meetings, planning sprints, and making sure everyone knows what they need to do.
        </Description>
      </Info>
      <Info>
        <StyledSubHeading>Collaboration and Communication</StyledSubHeading>
        <Description>
          Some of my best work has come from close collaboration with designers and product managers. I've learned to translate technical concepts for non-technical stakeholders and, equally important, to understand business needs and translate them into technical requirements. Clear communication has saved countless hours of rework.
        </Description>
      </Info>
      <Info>
        <StyledSubHeading>Documentation and Knowledge Sharing</StyledSubHeading>
        <Description>
          I believe good documentation is a gift to your future self and your team. I've created everything from API docs to onboarding guides. Teaching concepts to others has deepened my own understanding, whether through pair programming sessions, tech talks, or simply answering questions in Slack threads.
        </Description>
      </Info>
      <Info>
        <StyledSubHeading>Problem Solving and Troubleshooting</StyledSubHeading>
        <Description>
          I'm good at finding and fixing technical problems and bugs. I look for ways to make applications run faster and work better for users.
        </Description>
      </Info>
      <Info>
        <StyledSubHeading>User Experience (UX) Design</StyledSubHeading>
        <Description>
          I create easy-to-use interfaces that make sense for users. I test designs with real users and make improvements based on their feedback.
        </Description>
      </Info>
      <Info>
        <StyledSubHeading>Tool Proficiency</StyledSubHeading>
        <Description>
          I'm experienced with common development tools like Git for code management, VS Code for writing code, and team collaboration tools like Clickup , Discord , Jira , Microsoft Teams , Slack , Figma and more.
        </Description>
      </Info>
      <Info>
        <StyledSubHeading>Project Domain Expertise</StyledSubHeading>
        <Description>
          I've had the privilege of working across diverse industries – from PropTech and security systems to fitness apps and payment solutions. Each domain has taught me something valuable. I enjoy the challenge of diving into a new industry, learning its unique requirements, and applying my technical skills to solve domain-specific problems.
        </Description>
      </Info>

    </Column>
  </CardsContainer>
);
export default Responsibilities;
