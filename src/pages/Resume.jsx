import Button from '@/components/Button/Button';
import Experience from '@/components/Experience/Experience';
import Skills from '@/components/Skills/Skills';
import { Heading, SubHeading } from '@/utils/globalFonts';
import { useState } from 'react';
import styled from 'styled-components';
import AboutMe from '../components/AboutMe/AboutMe';

const Main = styled.div`
  display: flex;
  width: 100%;
  padding-top: 50px;
  height: 85vh;
`;

const Left = styled.div`
  display: flex;
  flex: 0.6;
  height: 50%;
  flex-direction: column;
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
        <Heading size="52px">{title[selection] || ''}</Heading>
        <SubHeading>{subTitle[selection]}</SubHeading>
      </>
    );
  };

  return (
    <Main>
      <Left>
        <Heading size="52px">Why hire me ?</Heading>
        <SubHeading>lorem ipsum dolor sit amet lorem ipsum dolor sit amet</SubHeading>
        {buttonsTitles.map((buttonTitle) => (
          <Button style={buttonStyle} onClick={selectionHandler} invert={activeSelection !== buttonTitle} key={buttonTitle}>
            {buttonTitle}
          </Button>
        ))}
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
