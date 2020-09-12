import React, { useContext } from "react";
import { WeatherContext } from "../context/weatherContext";

import Search from "./Search";
import Animation from "./Animation";
import Temperature from "./Temperature";

import Today from "./Today";
import styled from "styled-components";

const StyledContainer = styled.div`
  border: 1px solid red;
  margin: 0;
  max-width: 460px;
  min-height: 100vh;
  background-color: #1e213a;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const Hero = () => {
  const { current } = useContext(WeatherContext);
  console.log(current);
  return (
    <StyledContainer>
      <Search />
      <Animation />
      <Temperature />
      <Today />
    </StyledContainer>
  );
};

export default Hero;
