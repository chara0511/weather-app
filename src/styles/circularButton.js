import React from "react";
import styled from "styled-components";
import GpsIcon from "../icons/gpsIcon";

import { theme } from "../styles";

const { colors, shadows } = theme;

const StyledCircularBtn = styled.button`
  border-radius: 50%;
  width: 40px;
  height: 40px;
  background: ${colors.inputBg};
  box-shadow: ${shadows.input};

  & svg {
    height: 22px;
    width: 22px;
  }
`;

const CircularButton = ({ currentLocation }) => {
  return (
    <StyledCircularBtn onClick={currentLocation}>
      <GpsIcon />
    </StyledCircularBtn>
  );
};

export default CircularButton;
