import React from "react";
import styled, { keyframes } from "styled-components";
import LoopIcon from "../icons/loopIcon";

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
`;

const StyledContainer = styled.div`
  display: flex;
  width: 100%;
  height: 100vh;
  align-items: center;
  justify-content: center;

  & svg {
    animation: ${rotate} 2s linear infinite;
    width: 60px;
    height: 60px;
  }
`;

const LoadingPage = () => {
  return (
    <StyledContainer>
      <LoopIcon />
    </StyledContainer>
  );
};

export default LoadingPage;
