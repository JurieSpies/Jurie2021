import { lazy, Suspense, useState } from 'react';
import styled from 'styled-components';
import BurgerMenu from './components/BurgerMenu/BurgerMenu';
import Header from './pages/Header';
import Home from './pages/Home';
import ColorPicker from './components/ColorPicker/ColorPicker';

const Resume = lazy(() => import('./pages/Resume'));
const Work = lazy(() => import('./pages/Work'));

// https://www.youtube.com/watch?v=dImgZ_AH7uA

const Main = styled.div`
  display: flex;
  width: 100%;
  min-height: 100vh;
  position: relative;
  overflow-x: hidden;
`;

const RenderDesktop = styled.div`
  @media (max-width: 768px) {
    display: none;
  }
`;

const RenderMobile = styled.div`
  @media (min-width: 768px) {
    display: none;
  }
`;

const PageContainer = styled.div`
  display: flex;
  width: 100%;
  flex: 1;
  flex-direction: column;
  min-height: 100vh;
  overflow-y: auto;
  overflow-x: hidden;
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

  return (
    <Main>
      <ColorPicker />
      <Spacer />
      <PageContainer>
        <RenderDesktop>
          {/* Desktop */}
          <Header active={select} />
        </RenderDesktop>
        <RenderMobile>
          {/* Mobile  */}
          <BurgerMenu active={select} />
        </RenderMobile>
        {activeSelection === 'Home'
        && (
        <Animation>
          <Home />
        </Animation>
        )}
        {activeSelection === 'Resume'
        && (
        <Animation>
          <Suspense fallback={null}>
            <Resume />
          </Suspense>
        </Animation>
        )}
        {activeSelection === 'Work'
        && (
        <Animation>
          <Suspense fallback={null}>
            <Work />
          </Suspense>
        </Animation>
        )}
      </PageContainer>
      <Spacer />
    </Main>
  );
};

export default App;
