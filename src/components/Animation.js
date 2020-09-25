import React, { useContext } from "react";
import styled from "styled-components";
import { WeatherContext } from "../context/weatherContext";
import FormattedBgImages from "../images/FormattedBgImages";
import FormattedImages from "../images/FormattedImages";
import media from "../styles/media";

const StyledContainer = styled.div`
  width: 100%;
  height: 326px;
  position: relative;

  & .errorIcon {
    width: 25%;
    margin: auto;
    display: block;
  }

  ${media.smDesktop`
    background-size: 650px;
    height: 376px;
  `}
`;

const Animation = () => {
  const { current } = useContext(WeatherContext);

  return (
    <StyledContainer>
      <FormattedBgImages name={current?.weather[0].icon} zindex />
      <FormattedImages name={current?.weather[0].icon} />
    </StyledContainer>
  );
};

export default Animation;
