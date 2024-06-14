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
          Designing and developing dynamic and high-performance user interfaces for web and mobile applications using React and React Native.
          Employing front-end frameworks and libraries like Redux for state management, and integrating with RESTful APIs and GraphQL for seamless data flow.
        </Description>
      </Info>
      <Info>
        <StyledSubHeading>Back-End Development</StyledSubHeading>
        <Description>
          To develop and maintain server-side logic, RESTful APIs, and databases using technologies such as Node.js, Express.js, Knex.js, Docker, and PostgreSQL, you can follow the detailed steps below. This guide includes setting up a Node.js environment with Express.js for the server, Knex.js for database migrations and queries, Docker for containerization, and PostgreSQL as the database.
        </Description>
      </Info>
      <Info>
        <StyledSubHeading>Technical Leadership</StyledSubHeading>
        <Description>
          Providing technical guidance and leadership, conducting code reviews, and ensuring adherence to coding standards and quality guidelines.
          Collaborating with stakeholders to define technical requirements, project milestones, and aligning development efforts with business objectives.
        </Description>
      </Info>
      <Info>
        <StyledSubHeading>Agile Methodologies Implementation</StyledSubHeading>
        <Description>
          Driving Agile methodologies such as Scrum or Kanban to optimize project workflows, increase productivity, and ensure timely delivery of features.
          Facilitating sprint planning, daily stand-ups, retrospectives, and backlog grooming sessions to foster team collaboration and transparency.
        </Description>
      </Info>
      <Info>
        <StyledSubHeading>Collaboration and Communication</StyledSubHeading>
        <Description>
          Collaborating effectively with cross-functional teams including designers, QA engineers, and product managers to deliver high-quality software solutions.
          Facilitating clear and concise communication with stakeholders to gather requirements, provide progress updates, and address project concerns.
        </Description>
      </Info>
      <Info>
        <StyledSubHeading>Documentation and Knowledge Sharing</StyledSubHeading>
        <Description>
          Documenting technical specifications, architectural designs, and operational procedures to ensure clarity and maintainable codebase.
          Sharing knowledge through internal wiki, code repositories, and mentorship to foster continuous learning.
        </Description>
      </Info>
      <Info>
        <StyledSubHeading>Problem Solving and Troubleshooting</StyledSubHeading>
        <Description>
          Identifying and resolving technical challenges, bugs, and performance issues to ensure smooth application functionality and user satisfaction.
          Conducting root cause analysis and implementing solutions to optimize code efficiency, application performance, and user experience.
        </Description>
      </Info>
      <Info>
        <StyledSubHeading>User Experience (UX) Design</StyledSubHeading>
        <Description>
          Applying UX design principles and conducting user research to create intuitive, user-friendly interfaces that enhance overall application usability.
          Prototyping and iterating designs based on user feedback and usability testing to validate design decisions and improve user satisfaction.
        </Description>
      </Info>
      <Info>
        <StyledSubHeading>Tool Proficiency</StyledSubHeading>
        <Description>
          Utilizing a wide range of software tools and technologies such as Git for version control, IDEs like Visual Studio Code, and collaboration platforms like Clickup,Discord,Jira andSlack, .
          Proficient in using cloud services such as AWS, Azure and Firestore for database management, and infrastructure scaling.
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
