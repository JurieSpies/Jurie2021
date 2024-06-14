import resumeData from '@/utils/RESUME_DATA.json';
import { COLOR_BACKGROUND, COLOR_GREY, COLOR_PRIMARY } from '@/utils/globalColors';
import { SubHeading } from '@/utils/globalFonts';
import styled from 'styled-components';

const StyledSubHeading = styled(SubHeading)`

@media (max-width: 768px) {
  font-size: 16px;
  }
`;

const CardsContainer = styled.div`
  flex-direction: column;
  justify-content: center;
  flex:1;
  flex-direction: row;
  justify-content: space-around;
  margin-top: 35px;

  @media (max-width: 768px) {
    flex-direction: column;
    margin-top: 0px;
  }
`;

const ExperienceCard = styled.div`
  margin: 20px;
  background-color: ${COLOR_BACKGROUND};
  padding: 20px;
  border-radius: 10px;
  border: 1px solid ${COLOR_PRIMARY};
  display: block;
  align-self: center;
  width: 80%;
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

  @media (max-width: 768px) {
    flex-direction: column;
    width: auto;
  }
`;

const Experience = () => {
  const { work } = resumeData;

  return (
    <CardsContainer>
      {work.map((workItem) => (
        <ExperienceCard key={workItem.title}>
          <StyledSubHeading>{workItem.timeline}</StyledSubHeading>
          <StyledSubHeading>{workItem.title}</StyledSubHeading>
          <br />
          <StyledSubHeading fontWeight="thin" color={COLOR_PRIMARY}>
            <li>
              {workItem.occupation}
            </li>
          </StyledSubHeading>
          <br />
          <StyledSubHeading fontWeight="thin" color={COLOR_GREY}>
            {workItem.description}
          </StyledSubHeading>
        </ExperienceCard>
      ))}
    </CardsContainer>
  );
};
export default Experience;
