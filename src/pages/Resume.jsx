import Button from '@/components/Button/Button';
import Experience from '@/components/Experience/Experience';
import Skills from '@/components/Skills/Skills';
import { Heading, SubHeading } from '@/utils/globalFonts';
import { useState } from 'react';
import styled from 'styled-components';
import AboutMe from '../components/AboutMe/AboutMe';
import Responsibilities from '../components/AboutMe/Respnsibilities';
import Education from '../components/Skills/Education';
import { COLOR_GREY } from '../utils/globalColors';

const StyledSubHeading = styled(SubHeading)`
color:${COLOR_GREY};
@media (max-width: 768px) {
  font-size: 16px;
}
`;

const StyledHeading = styled(Heading)`
font-size: 52px;

@media (max-width: 768px) {
  font-size: 32px;
}
`;

const Main = styled.div`
  display: flex;
  width: 100%;
  padding-top: 50px;
  height: 85vh;


  @media (max-width: 768px) {
    flex-direction: column;
    display: flex;
    padding-top: 0px;
    overflow: auto;
    height: 100%;
  }
`;

const ButtonsContainer = styled.div`

@media (max-width: 768px) {
    width: 100%;
    justify-content: center;
    display: grid;
  }
`;

const Left = styled.div`
  display: flex;
  flex: 0.6;
  height: 50%;
  flex-direction: column;


  @media (max-width: 768px) {
    flex-direction: column;
    height: 100%;
    margin-bottom: 25px;
  }
  `;

const Spacer = styled.div`
  display: flex;
  flex: 0.1;
`;

const Right = styled.div`
  display: flex;
  flex: 1;
  height: 85vh;
  width: 100%;
  flex-direction: column;


  @media (max-width: 768px) {
    flex-direction: column;
    height: 100%;
  }
`;

const Selections = styled.div`
  display: flex;
  flex: 1;
  height: 100vh;
  width: 100%;
  flex-direction: column;
  overflow: auto;
  scrollbar-width: none;
  mask-image: linear-gradient(to top, black calc(100% - 100px), transparent 100%);


  @media (max-width: 768px) {
    mask-image: none;
    overflow: hidden;
  }
`;

const buttonStyle = {
  display: 'flex',
  width: '100%',
  borderRadius: 5,
  marginTop: 40,
  justifyContent: 'center',
  minWidth: 200,
};

const Resume = () => {
  const [activeSelection, setActiveSelection] = useState('Experience');

  const buttonsTitles = [
    'Experience',
    'Responsibilities',
    'Skills',
    'Education',
    'About me',
  ];

  const selectionHandler = (e) => {
    setActiveSelection(e.target.innerText);
  };

  const renderHeading = (selection) => {
    const title = {
      Experience: 'Work Experience',
      Skills: 'Work Skills',
      Responsibilities: 'Work Responsibilities',
      Education: 'Education',
      'About me': 'About Me',
    };

    const subTitle = {
      Experience: 'Work Experience',
      Skills: 'Work Skills',
      'About me': 'About Me',
    };

    return (
      <StyledHeading>{title[selection] || ''}</StyledHeading>
    );
  };

  return (
    <Main>
      <Left>
        <StyledHeading>Why Hire Me ?</StyledHeading>
        <StyledSubHeading>
          Front-end developer making fast and easy-to-use apps with React, Vue.js and React Native
        </StyledSubHeading>
        <ButtonsContainer>
          {buttonsTitles.map((buttonTitle) => (
            <Button style={buttonStyle} onClick={selectionHandler} invert={activeSelection !== buttonTitle} key={buttonTitle}>
              {buttonTitle}
            </Button>
          ))}
        </ButtonsContainer>
      </Left>
      <Spacer />
      <Right>
        {renderHeading(activeSelection)}
        <Selections>
          {activeSelection === 'Experience' && <Experience /> }
          {activeSelection === 'Skills' && <Skills />}
          {activeSelection === 'Responsibilities' && <Responsibilities />}
          {activeSelection === 'Education' && <Education />}
          {activeSelection === 'About me' && <AboutMe /> }
        </Selections>
      </Right>
    </Main>
  );
};

export default Resume;
