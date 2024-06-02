import styled from 'styled-components';
import AboutMe from './pages/AboutMe';
import Header from './pages/Header';

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

const App = () => (
  <Main>
    <Spacer />
    <PageContainer>
      <Header active={(e) => console.log(e)} />
      <AboutMe />
    </PageContainer>
    <Spacer />
  </Main>
);

export default App;
