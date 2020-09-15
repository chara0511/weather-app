import React, { useContext } from "react";

import styled from "styled-components";
import { WeatherContext } from "../context/weatherContext";

import image from "../images/Shower.png";

import { theme } from "../styles";
import { getFahrenheitValue } from "../utils";
const { colors, fontSizes } = theme;

const StyledContainer = styled.div`
  max-width: 120px;
  height: 177px;
  background-color: ${colors.background};
  align-items: center;
  padding: 18px 0;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  & img {
    width: 56px;
    height: 62px;
  }
`;
const StyledDay = styled.h6`
  font-size: ${fontSizes.md};
  line-height: 19px;
`;

const StyledTemp = styled.div`
  display: flex;
  justify-content: space-between;
  column-gap: 12px;

  & p {
    line-height: 19px;
    font-weight: 500;
    text-transform: uppercase;

    &:nth-of-type(1) {
      color: ${colors.white};
    }
  }
`;

const Day = ({ daily, day }) => {
  const { fahrenheit } = useContext(WeatherContext);

  const valueMax = fahrenheit
    ? getFahrenheitValue(daily.temp.max)
    : daily.temp.max;

  const valueMin = fahrenheit
    ? getFahrenheitValue(daily.temp.min)
    : daily.temp.min;

  return (
    <StyledContainer>
      <StyledDay>{day}</StyledDay>

      <img src={image} alt="shower" />

      <StyledTemp>
        <p>
          {parseFloat(valueMax).toFixed(0)}
          {fahrenheit ? "ºf" : "ºc"}
        </p>

        <p>
          {parseFloat(valueMin).toFixed(0)}
          {fahrenheit ? "ºf" : "ºc"}
        </p>
      </StyledTemp>
    </StyledContainer>
  );
};

export default Day;
