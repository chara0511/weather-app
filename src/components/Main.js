import React, { useContext, useEffect } from 'react';
import styled from 'styled-components';
import { WeatherContext } from '../context/weatherContext';
import Hero from './Hero';
import Details from './Details';
import { getCurrentLocation } from '../utils/location';
import LoadingPage from './LoadingPage';
import media from '../styles/media';

const StyledContainer = styled.div`
  max-width: 100%;
  overflow-x: auto;

  ${media.mdDesktop`
    display:flex;
  `}
`;

const Main = () => {
  const { loading, getDataByLatLng, showError } = useContext(WeatherContext); //

  useEffect(() => {
    getCurrentLocation()
      .then(({ lat, lng }) => getDataByLatLng(lat, lng))
      .catch((error) => showError({ message: error.message }));
  }, []);

  return (
    <StyledContainer>
      {!loading ? (
        <>
          <Hero />

          <Details />
        </>
      ) : (
        <LoadingPage />
      )}
    </StyledContainer>
  );
};

export default Main;
