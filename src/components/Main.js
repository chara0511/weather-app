import React, { useContext, useEffect } from "react";
import Hero from "./Hero";
import Details from "./Details";
import { getCurrentLocation } from "../utils/location";

import styled from "styled-components";

import { WeatherContext } from "../context/weatherContext";
import media from "../styles/media";

const StyledContainer = styled.div`
  max-width: 100%; /* 459px in 1440px */
  overflow: auto;

  ${media.mdDesktop`
    display:flex;
  `}
`;

const Main = () => {
  const { loading, getDataByLatLng } = useContext(WeatherContext); //

  useEffect(() => {
    getCurrentLocation().then(({ lat, lng }) => getDataByLatLng(lat, lng));
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
        <div>Loading.</div>
      )}
    </StyledContainer>
  );
};

export default Main;
