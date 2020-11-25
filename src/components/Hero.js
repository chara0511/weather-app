import React, { useContext } from 'react';
import styled from 'styled-components';
import { WeatherContext } from '../context/weatherContext';

import Animation from './Animation';
import Temperature from './Temperature';
import Today from './Today';
import Search from './Search';
import media from '../styles/media';
import ErrorPage from './ErrorPage';
import { theme } from '../styles';

const { colors } = theme;

const StyledContainer = styled.div`
  background-color: ${colors.background};
  margin: 0;
  min-height: 100vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  position: relative;

  ${media.smDesktop`
    max-width: 460px;
    position: fixed;
  `}
`;

const Hero = () => {
  const { current, errors } = useContext(WeatherContext);

  return (
    <StyledContainer>
      {errors?.errorInfo === 'Unauthorized' || errors?.errorInfo === 'User denied Geolocation' ? (
        <ErrorPage message={errors?.errorInfo} />
      ) : (
        <>
          <Search />

          <Animation />

          <Temperature temp={current?.main.temp} desc={current?.weather[0].description} />

          <Today city={current?.name} country={current?.sys.country} />
        </>
      )}
    </StyledContainer>
  );
};

export default Hero;
