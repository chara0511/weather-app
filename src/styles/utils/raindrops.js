import React from 'react';
import styled, { keyframes } from 'styled-components';

const animation = keyframes`
  0% { top: 0px; }
  100% {
    top: 100px;
  }
`;

const StyledRaindrops = styled.div`
  & .drops {
    position: relative;
    transition: visibility 0.5s, opacity 0.5s, background-color 0.5s, width 0.5s,
      animation-duration 1s;
    /* z-index: 5; */
    animation: ${animation} 0.5s ease-in infinite;
    opacity: 1;
    visibility: visible;
  }

  & .rain {
    width: 1px;
    height: 10px;
    background-color: white;
    border-radius: 25%;
  }
  & #d1 {
    transform: translate(-45px, -2px);
    animation-delay: 1.5s;
  }

  & #d2 {
    transform: translate(-15px, -2px);
    animation-delay: 0.7s;
  }

  & #d3 {
    transform: translate(15px, -2px);
    animation-delay: 0.4;
  }

  & #d4 {
    transform: translate(45px, -2px);
    animation-delay: 0.1;
  }
`;

const Raindrops = () => {
  return (
    <StyledRaindrops>
      <div className="rain drops" id="d1" />
      <div className="rain drops" id="d2" />
      <div className="rain drops" id="d3" />
      <div className="rain drops" id="d4" />
    </StyledRaindrops>
  );
};

export default Raindrops;
