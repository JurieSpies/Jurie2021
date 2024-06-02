import styled from 'styled-components';
import { useState } from 'react';
import Header from './pages/Header';
import Home from './pages/Home';

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
        {activeSelection === 'Home' && <Home />}
      </PageContainer>
      <Spacer />
    </Main>
  );
};

export default App;
