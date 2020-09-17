import React, { useContext } from "react";
import { WeatherContext } from "../context/weatherContext";

import Animation from "./Animation";
import Temperature from "./Temperature";

import Today from "./Today";
import styled from "styled-components";
import Search from "./Search";
import media from "../styles/media";
import { theme } from "../styles";
import ErrorPage from "./ErrorPage";

const { colors } = theme;

const StyledContainer = styled.div`
  background-color: ${colors.background};
  border: 1px solid red;
  margin: 0;
  min-height: 100vh;
  width: 100%;

  ${media.mdDesktop`
    max-width: 460px;
  `}
`;

const Hero = () => {
  const { current, errors } = useContext(WeatherContext);

  return (
    <StyledContainer>
      {errors?.errorInfo === "Unauthorized" ||
      errors?.errorInfo === "User denied Geolocation" ? (
        <ErrorPage message={errors.errorInfo} />
      ) : (
        <>
          <Search />

          <Animation />

          <Temperature temp={current.main.temp} />

          <Today city={current.name} country={current.sys.country} />
        </>
      )}
    </StyledContainer>
  );
};

export default Hero;
