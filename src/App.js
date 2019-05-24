import React from 'react';
import tpeMetroRoute from './TPE_Metro_Route.svg';
import Svg  from './TPE_Metro_Route';
import styled from 'styled-components';
// import './App.css';

const StyledApp = styled.div`
  height: 100vh;
  width: 100vw;
`;

function App() {
  return (
    <StyledApp>
      <Svg />
    </StyledApp>
  );
}

export default App;
