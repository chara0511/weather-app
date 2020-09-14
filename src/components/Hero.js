import React, { useContext } from "react";
import { WeatherContext } from "../context/weatherContext";

import Animation from "./Animation";
import Temperature from "./Temperature";

import Today from "./Today";
import styled from "styled-components";
import Search from "./Search";

const StyledContainer = styled.div`
  border: 1px solid red;
  margin: 0;
  max-width: 460px;
  min-height: 100vh;
`;

const Hero = () => {
  const { current } = useContext(WeatherContext);

  const {
    main: { temp },
    sys: { country },
    name,
  } = current;

  return (
    <StyledContainer>
      <Search />

      <Animation />

      <Temperature temp={temp} />

      <Today city={name} country={country} />
    </StyledContainer>
  );
};

export default Hero;
