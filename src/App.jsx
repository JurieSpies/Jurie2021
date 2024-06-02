import styled from 'styled-components';
import { useState } from 'react';
import AboutMe from './pages/AboutMe';
import Header from './pages/Header';

const Main = styled.div`
  display: flex;
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
  // const [activeMenu, setActiveMenu] = useState(0);
  console.log('🚀 example');

  return (
    <Main>
      <Spacer />
      <PageContainer>
        <Header />
        <AboutMe />
      </PageContainer>
      <Spacer />
    </Main>
  );
};

export default App;
