import { useState } from 'react';
import styled from 'styled-components';
import Header from './pages/Header';
import Home from './pages/Home';
import Resume from './pages/Resume';

const Main = styled.div`
  display: flex;
  height: 100%;
  width: 100%;
`;

const PageContainer = styled.div`
  display: flex;
  width: 100%;
  flex:1;
  flex-direction: column;
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
      <Spacer />
      <PageContainer>
        <Header active={select} />
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
