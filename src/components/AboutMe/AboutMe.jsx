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
  margin-right: 20px;
  color: ${COLOR_GREY};
  font-weight: 100;

  @media (max-width: 768px) {
    font-size: 16px;
  }
`;

const Info = styled.div`
  display: flex;
  align-items: center;
  padding: 10px;
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
  flex-direction: row;
  justify-content: space-around;
  margin-top: 60px;
  color: ${COLOR_WHITE};
  display: flex;

@media (max-width: 768px) {
  flex-direction: column;
  margin-top: 20px;
  }
`;

const AboutMe = () => (
  <CardsContainer>
    <Column>
      <Info>
        <StyledSubHeading>Name</StyledSubHeading>
        <StyledHeading>
          Jurie Spies
        </StyledHeading>
      </Info>
      <Info>
        <StyledSubHeading>Experience</StyledSubHeading>
        <StyledHeading>
          {getYearsOfExperience()}
          + years
        </StyledHeading>
      </Info>
      <Info>
        <StyledSubHeading>Nationality</StyledSubHeading>
        <StyledHeading>
          South African
        </StyledHeading>
      </Info>
      <Info>
        <StyledSubHeading>Freelance</StyledSubHeading>
        <StyledHeading>
          Available
        </StyledHeading>
      </Info>
      <Info>
        <StyledSubHeading>Hobbies</StyledSubHeading>
        <StyledHeading>
          CrossFit, Gaming, Learning, Reading and Outdoors
        </StyledHeading>
      </Info>
    </Column>
    <Spacer />
    <Column>
      <Info onClick={() => window.open('tel:+27768862529')} style={{ cursor: 'pointer' }}>
        <StyledSubHeading>
          Phone
        </StyledSubHeading>
        <StyledHeading>
          (+27) 768 86 2529
        </StyledHeading>
      </Info>
      <Info onClick={() => window.open('mailto:juriespies@gmail.com')} style={{ cursor: 'pointer' }}>
        <StyledSubHeading>Email</StyledSubHeading>
        <StyledHeading>
          juriespies@gmail.com
        </StyledHeading>
      </Info>
      <Info>
        <StyledSubHeading>Languages</StyledSubHeading>
        <StyledHeading>
          Afrikaans , English
        </StyledHeading>
      </Info>
      <Info>
        <StyledSubHeading>Age</StyledSubHeading>
        <StyledHeading>
          {getAge()}
        </StyledHeading>
      </Info>
    </Column>

  </CardsContainer>
);
export default AboutMe;
