import Button from '@/components/Button/Button';
import Experience from '@/components/Experience/Experience';
import Skills from '@/components/Skills/Skills';
import { Heading, SubHeading } from '@/utils/globalFonts';
import { useState } from 'react';
import styled from 'styled-components';
import AboutMe from '../components/AboutMe/AboutMe';

const StyledSubHeading = styled(SubHeading)`
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
    width: 90%;
    align-self: center;
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
    background-color: blue;
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
    background-color: #f0f;
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
  width: '100%',
  borderRadius: 5,
  marginTop: 40,
  justifyContent: 'center',
};

const Resume = () => {
  const [activeSelection, setActiveSelection] = useState('Experience');

  const buttonsTitles = [
    'Experience',
    'Skills',
    'About me',
  ];

  const selectionHandler = (e) => {
    setActiveSelection(e.target.innerText);
  };

  const renderHeading = (selection) => {
    const title = {
      Experience: 'Work Experience',
      Skills: 'Work Skills',
      'About me': 'About Me',
    };

    const subTitle = {
      Experience: 'Work Experience',
      Skills: 'Work Skills',
      'About me': 'About Me',
    };

    return (
      <>
        <StyledHeading>{title[selection] || ''}</StyledHeading>
        <StyledSubHeading>{subTitle[selection]}</StyledSubHeading>
      </>
    );
  };

  return (
    <Main>
      <Left>
        <StyledHeading>Why hire me ?</StyledHeading>
        <StyledSubHeading>lorem ipsum dolor sit amet lorem ipsum dolor sit amet</StyledSubHeading>
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
          {activeSelection === 'Skills' && <Skills /> }
          {activeSelection === 'About me' && <AboutMe /> }
        </Selections>
      </Right>
    </Main>
  );
};

export default Resume;
