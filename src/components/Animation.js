import React, { useContext } from "react";
import styled from "styled-components";
import { WeatherContext } from "../context/weatherContext";
import clouds from "../images/Cloud-background.png";
import FormattedImages from "../images/FormattedImages";
import media from "../styles/media";

const StyledContainer = styled.div`
  border: 1px solid green;
  background-image: url(${clouds});
  background-position: center;
  background-repeat: no-repeat;
  background-size: 564px;
  height: 326px;
  position: relative;
  width: 100%;

  ${media.smDesktop`
    background-size: 650px;
    height: 376px;
  `}
`;

const Animation = () => {
  const { current } = useContext(WeatherContext);

  console.log(current?.weather[0].icon);
  return (
    <StyledContainer>
      <FormattedImages name={current?.weather[0].icon} />
    </StyledContainer>
  );
};

export default Animation;
