import React, { useContext } from 'react';
import styled from 'styled-components';
import { WeatherContext } from '../context/weatherContext';
import { getListDays } from '../utils/date';
import Day from './Day';
import media from '../styles/media';

const StyledContainer = styled.div`
  column-gap: 26px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  padding: 52px 0;
  row-gap: 32px;

  ${media.lgTablet`
    grid-template-columns: repeat(3, 1fr);
  `}

  ${media.smDesktop`
    grid-template-columns: repeat(auto-fill, minmax(120px, 1fr));
    margin: auto;
  `}

  ${media.mdDesktop`
    padding: 66px 0;
    /* height: 216px;
    overflow-y: scroll; */
  `}
`;
const Forecast = () => {
  const { forecast } = useContext(WeatherContext);
  // console.log(forecast?.daily[1].weather[0].icon);

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
