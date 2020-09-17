import React, { useContext, useEffect } from "react";
import Hero from "./Hero";
import Details from "./Details";
import { getCurrentLocation } from "../utils/location";

import styled from "styled-components";

import { WeatherContext } from "../context/weatherContext";
import media from "../styles/media";
import LoadingPage from "./LoadingPage";

const StyledContainer = styled.div`
  max-width: 100%; /* 459px in 1440px */
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
      .catch((error) => showError(error.message));
    // eslint-disable-next-line react-hooks/exhaustive-deps
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
