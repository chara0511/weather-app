import React, { useContext, useEffect } from "react";
import Hero from "./Hero";
import Details from "./Details";

import styled from "styled-components";

import { theme } from "../styles";
import { WeatherContext } from "../context/weatherContext";
import { getCurrentLocation } from "../utils/location";

const { colors } = theme;

const StyledContainer = styled.div`
  max-width: 100%; /* 459px in 1440px */
  background-color: ${colors.background};
`;

const Main = () => {
  const { getDataByLatLng, loading } = useContext(WeatherContext);

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
