import React from "react";
import styled from "styled-components";
import LoopIcon from "../icons/loopIcon";

const StyledContainer = styled.div`
  display: flex;
  width: 100%;
  height: 100vh;
  align-items: center;
  justify-content: center;

  & .loopIcon {
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
