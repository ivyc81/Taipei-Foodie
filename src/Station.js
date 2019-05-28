import React, {useEffect} from 'react';
import styled from 'styled-components';
// import './App.css';

const StyledStation = styled.div`
  height: 100vh;
  width: 100vw;
`;

const StyledPopUpDiv = styled.div`
  position: absolute;
  background-color: white;
  width: 30vw;
  top: 0;
`;

function Station(props) {

  const {name} = props;
  return (
    <StyledStation>
      <StyledPopUpDiv>{name}</StyledPopUpDiv>
    </StyledStation>
  );
}

export default Station;