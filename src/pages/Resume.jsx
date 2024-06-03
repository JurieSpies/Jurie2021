import Button from '@/components/Button/Button';
import Experience from '@/components/Experience/Experience';
import Skills from '@/components/Skills/Skills';
import { Heading, SubHeading } from '@/utils/globalFonts';
import { useState } from 'react';
import styled from 'styled-components';

const Main = styled.div`
  display: flex;
  height: 100%;
  width: 100%;
  margin-top: 50px;
  `;

const Left = styled.div`
  display: flex;
  flex: 0.5;
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
  height: 100%;
  width: 100%;
  flex-direction: column;
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
        {activeSelection === 'Experience' && <Experience /> }
        {activeSelection === 'Skills' && <Skills /> }
        {activeSelection === 'About me' && <Heading>About me</Heading> }
      </Right>
    </Main>
  );
};

export default Resume;
