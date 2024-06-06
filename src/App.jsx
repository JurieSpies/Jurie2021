import { useState } from 'react';
import styled from 'styled-components';
import Header from './pages/Header';
import Home from './pages/Home';
import Resume from './pages/Resume';
import BurgerMenu from './components/BurgerMenu/BurgerMenu';
import useIsMobile from './hooks/useIsMobile';
import AboutMe from './components/AboutMe/AboutMe';

const Main = styled.div`
  overflow: hidden;
  display: flex;
  width: 100%;
  position: fixed;

  @media (min-width: 768px) {
  position: relative;
  }


  @media (max-width: 768px) {
  position: relative;
  }
`;

const PageContainer = styled.div`
  display: flex;
  width: 100%;
  flex:1;
  flex-direction: column;
  /* background-color: blue; */
`;

const Spacer = styled.div`
  display: flex;
  flex: 0.1;
`;

const Animation = styled.div`
  display: flex;
  flex: 1;
  animation: fadeIn 1.5s ease-in-out;

  @keyframes fadeIn {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
`;

const App = () => {
  const [activeSelection, setActiveSelection] = useState('');

  const select = (e) => {
    setActiveSelection(e);
  };
  const isMobile = useIsMobile();

  return (
    <Main>
      <Spacer />
      <PageContainer>
        {isMobile ? <BurgerMenu active={select} /> : <Header active={select} />}
        {activeSelection === 'Home'
        && (
        <Animation>
          <Home />
        </Animation>
        )}
        {activeSelection === 'Resume'
        && (
        <Animation>
          <Resume />
        </Animation>
        )}
      </PageContainer>
      <Spacer />
    </Main>
  );
};

export default App;
