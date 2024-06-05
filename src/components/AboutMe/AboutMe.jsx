import styled from 'styled-components';

const CardsContainer = styled.div`
  justify-content: center;
  flex:1;
  height: 100%;
  flex-direction: row;
  justify-content: space-around;
  margin-top: 35px;
`;

const AboutMe = () => (
  <CardsContainer>
    About Me
  </CardsContainer>
);
export default AboutMe;
