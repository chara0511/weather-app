import React, { useContext } from "react";
import styled from "styled-components";
import { WeatherContext } from "../context/weatherContext";
import { theme } from "../styles";
import { getFahrenheitValue } from "../utils";

const { fontSizes } = theme;

const StyledContainer = styled.div`
  border: 1px solid blue;
  text-align: center;
  margin-top: -2em;
`;

const Temp = styled.h1`
  font-size: ${fontSizes.h1};
  line-height: 169px;
  text-transform: uppercase;

  & span {
    font-size: ${fontSizes.xxl};
    line-height: 42px;
  }
`;

const Desc = styled.h3`
  font-size: ${fontSizes.h3};
  line-height: 42px;
  text-transform: capitalize;
`;

const Temperature = ({ temp, desc }) => {
  const { fahrenheit } = useContext(WeatherContext);

  const value = fahrenheit ? getFahrenheitValue(temp) : temp;

  return (
    <StyledContainer>
      <Temp>
        {parseFloat(value).toFixed(0)}

        <span>{fahrenheit ? "ºf" : "ºc"}</span>
      </Temp>

      <Desc>{desc}</Desc>
    </StyledContainer>
  );
};

export default Temperature;
