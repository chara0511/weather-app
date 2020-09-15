import React, { useContext } from "react";
import { WeatherContext } from "../context/weatherContext";

import Animation from "./Animation";
import Temperature from "./Temperature";

import Today from "./Today";
import styled from "styled-components";
import Search from "./Search";
import media from "../styles/media";
import { theme } from "../styles";

const { colors } = theme;

const StyledContainer = styled.div`
  border: 1px solid red;
  margin: 0;
  width: 100%;
  min-height: 100vh;
  background-color: ${colors.background};

  ${media.mdDesktop`
    max-width: 460px;
  `}
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
