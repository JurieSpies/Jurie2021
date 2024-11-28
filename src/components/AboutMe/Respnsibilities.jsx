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
          I build user-friendly websites and mobile apps using React and React Native. I work with tools like Redux to manage data and connect to various APIs to make everything work smoothly.
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
          I help guide the technical direction of projects and review code to maintain high quality. I work closely with team members to plan features and make sure we're meeting business goals.
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
          I work well with designers, testers, and product managers to build great software. I make sure to keep everyone updated on progress and discuss any concerns openly.
        </Description>
      </Info>
      <Info>
        <StyledSubHeading>Documentation and Knowledge Sharing</StyledSubHeading>
        <Description>
          I write clear documentation for code and processes to help the team understand how things work. I also enjoy teaching others and sharing what I know through wikis and mentoring.
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
          I'm experienced with common development tools like Git for code management, VS Code for writing code, and team collaboration tools like Clickup and Discord.
        </Description>
      </Info>
      <Info>
        <StyledSubHeading>Project Domain Expertise</StyledSubHeading>
        <Description>
          Managing projects within diverse domains including PropTech, CCTV solutions, video monitoring, product solutions, loyalty systems, budgeting, fitness, payment solutions, and more.
          Leveraging domain knowledge to develop tailored solutions that meet specific business requirements and industry standards.
        </Description>
      </Info>

    </Column>
  </CardsContainer>
);
export default Responsibilities;
