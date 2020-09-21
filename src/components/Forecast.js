import React, { useContext } from "react";
import Day from "./Day";

import styled from "styled-components";

import { WeatherContext } from "../context/weatherContext";
import { getListDays } from "../utils/date";
import media from "../styles/media";

const StyledContainer = styled.div`
  column-gap: 26px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  margin: 0 30px;
  padding-bottom: 20px;
  row-gap: 32px;

  ${media.smDesktop`
    grid-template-columns: 1fr 1fr 1fr 1fr;
    margin: auto;
  `}

  ${media.mdDesktop`
    grid-template-columns: repeat(auto-fill, minmax(120px, 1fr));
    /* height: 216px;
    overflow-y: scroll; */
  `}
`;
const Forecast = () => {
  const { forecast } = useContext(WeatherContext);
  console.log(forecast?.daily[1].weather[0].icon);

  const day = getListDays();
  return (
    <StyledContainer>
      {forecast?.daily.map((daily, i) => (
        <Day key={daily.dt} daily={daily} day={day[i]} />
      ))}
    </StyledContainer>
  );
};

export default Forecast;
