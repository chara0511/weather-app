import React from "react";
import styled from "styled-components";

const StyledCircularBtn = styled.button`
  border-radius: 50%;
  width: 40px;
  height: 40px;
`;

const CircularButton = ({ nameIcon }) => {
  return (
    <StyledCircularBtn>
      {/* //FormattedIcon name={nameIcon} */}
      {nameIcon}
    </StyledCircularBtn>
  );
};

export default CircularButton;
