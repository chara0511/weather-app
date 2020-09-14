import React, { useContext } from "react";
import Day from "./Day";

import styled from "styled-components";
import { WeatherContext } from "../context/weatherContext";

const StyledContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  row-gap: 32px;
  column-gap: 26px;
  padding: 52px 54px;
`;
const Forecast = () => {
  const { forecast } = useContext(WeatherContext);

  return (
    <StyledContainer>
      {forecast?.daily.map((daily, i) => (
        <Day key={i} daily={daily} />
      ))}
    </StyledContainer>
  );
};

export default Forecast;
