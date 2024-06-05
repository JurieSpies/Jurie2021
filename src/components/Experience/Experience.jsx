import resumeData from '@/utils/RESUME_DATA.json';
import { COLOR_BACKGROUND, COLOR_GREY, COLOR_PRIMARY } from '@/utils/globalColors';
import { SubHeading } from '@/utils/globalFonts';
import styled from 'styled-components';

const CardsContainer = styled.div`
  flex-direction: column;
  justify-content: center;
  flex:1;
  display: flow;
  flex-direction: row;
  justify-content: space-around;
  margin-top: 35px;
`;

const ExperienceCard = styled.div`
  margin: 20px;
  background-color: ${COLOR_BACKGROUND};
  padding: 20px;
  border-radius: 10px;
  border: 1px solid ${COLOR_PRIMARY};
  display: block;
  align-self: center;
  width: 50%;
  animation: fadeIn 1s ease-in-out;

  @keyframes fadeIn {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }

  &:hover {
    transform: scale(1.01) rotate(1deg);
    transition: all 0.5s ease-in-out;
  }
`;

const Experience = () => {
  const { work } = resumeData;

  return (
    <CardsContainer>
      {work.map((workItem) => (
        <ExperienceCard key={workItem.title}>
          <SubHeading style={{ color: COLOR_PRIMARY }}>{workItem.timeline}</SubHeading>
          <SubHeading>{workItem.title}</SubHeading>
          <br />
          <SubHeading fontWeight="thin" color={COLOR_GREY}>
            <li>
              {workItem.occupation}
            </li>
          </SubHeading>
        </ExperienceCard>
      ))}
    </CardsContainer>
  );
};
export default Experience;
