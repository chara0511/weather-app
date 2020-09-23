import React, { useContext } from "react";
import styled from "styled-components";
import { WeatherContext } from "../context/weatherContext";
import clouds from "../images/Cloud-background.png";
import FormattedImages from "../images/FormattedImages";
import media from "../styles/media";

const StyledContainer = styled.div`
  background-image: url(${clouds});
  background-position: center;
  background-repeat: no-repeat;
  background-size: 564px;
  height: 326px;
  position: relative;
  width: 100%;

  & svg {
    width: 50%;
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
      <FormattedImages name={current?.weather[0].icon} />
    </StyledContainer>
  );
};

export default Animation;
