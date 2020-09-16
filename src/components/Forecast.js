import React, { useContext } from "react";
import Day from "./Day";

import styled from "styled-components";
import { WeatherContext } from "../context/weatherContext";
import { getListDays } from "../utils/date";
import media from "../styles/media";

const StyledContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  row-gap: 32px;
  column-gap: 26px;
  padding: 52px 54px;

  ${media.smDesktop`
    grid-template-columns: 1fr 1fr 1fr;
  `}

  ${media.mdDesktop`
    grid-template-columns: 1fr 1fr 1fr 1fr;
  `}
`;
const Forecast = () => {
  const { forecast } = useContext(WeatherContext);

  const day = getListDays();
  return (
    <StyledContainer>
      {forecast?.daily.map((daily, i) => (
        <Day key={i} daily={daily} day={day[i]} />
      ))}
    </StyledContainer>
  );
};

export default Forecast;
