import React from "react";
import Day from "./Day";

import styled from "styled-components";

const StyledContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  row-gap: 32px;
  column-gap: 26px;
  padding: 52px 54px;
`;
const Forecast = () => {
  const forecast = [
    { date: "Tomorrow", temp_max: 16, temp_min: 11 },
    { date: "Sun, 7 Jun", temp_max: 16, temp_min: 11 },
    { date: "Mon, 8 Jun", temp_max: 16, temp_min: 11 },
    { date: "Tue, 9 Jun", temp_max: 16, temp_min: 11 },
    { date: "Wed, 10 Jun", temp_max: 16, temp_min: 11 },
  ];

  return (
    <StyledContainer>
      {forecast.map((day, i) => (
        <Day key={i} data={day} />
      ))}
    </StyledContainer>
  );
};

export default Forecast;
