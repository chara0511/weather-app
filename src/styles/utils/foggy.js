import React from "react";

import styled, { keyframes } from "styled-components";

const animation = keyframes`
  0% { transform: translateX(-0.5em); }
  100% { transform: translateX(0.5em); }
`;

const StyledFoggy = styled.div`
  width: 100px;
  height: 100px;
  float: left;
  position: relative;
  z-index: 6;

  & .fog,
  & .fog2 {
    position: absolute;
    bottom: 30%;
    left: 5%;
  }

  & .fog2 {
    bottom: 15%;
  }

  & .fog::before,
  & .fog::after,
  & .fog2::before,
  & .fog2::after {
    content: "";
    position: absolute;
    height: 0.5em;
    color: rgba(255, 255, 255, 0.25);
    background: currentColor;
    border-radius: 0.5em;
    animation: ${animation} 6s infinite linear alternate;
  }

  & .fog::before {
    top: 0.75em;
    width: 5em;
  }

  & .fog::after {
    top: 1.5em;
    width: 3em;
    left: 1em;
    animation-delay: -6s;
  }

  & .fog2::before {
    top: 1.5em;
    width: 5em;
  }

  & .fog2::after {
    top: 2.25em;
    width: 4em;
    left: 0.5em;
  }
`;

const Foggy = () => {
  return (
    <StyledFoggy>
      <div className="fog"></div>
      <div className="fog2"></div>
    </StyledFoggy>
  );
};

export default Foggy;
