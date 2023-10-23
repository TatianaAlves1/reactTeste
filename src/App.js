import Header from './componentes/header'
import styled from 'styled-components';

const AppContainer = styled.div`
    background-color: aqua;
    width: 100vw;
    height: 100vh;
`
function App() {
  return (
    <AppContainer>
      <Header/>
    </AppContainer>
    
  );
}

export default App;