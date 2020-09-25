import React, { useContext } from "react";
import styled from "styled-components";
import { WeatherContext } from "../../context/weatherContext";

import { theme } from "../../styles";
import { getMilesValue } from "../../utils";
const { colors, fontSizes } = theme;

const SubTitle = styled.h6`
  font-size: ${fontSizes.md};
  line-height: 19px;
`;

const StyledStatus = styled.h2`
  font-size: ${fontSizes.h2};
  font-weight: 600;

  & span {
    color: ${colors.white};
    font-size: ${fontSizes.xxl};
    line-height: 42px;
    font-weight: 500;
  }
`;

const VisibilityStatus = ({ visibility = 0 }) => {
  const { fahrenheit } = useContext(WeatherContext);

  const value = fahrenheit
    ? parseFloat(getMilesValue(visibility)).toFixed(1)
    : visibility;

  return (
    <>
      <SubTitle>Visibility </SubTitle>

      <StyledStatus>
        {value}
        <span>{fahrenheit ? " miles" : " m"}</span>
      </StyledStatus>
    </>
  );
};

export default VisibilityStatus;
