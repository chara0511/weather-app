import React from "react";
import styled from "styled-components";
import weather from "../images/Shower.png";
import clouds from "../images/Cloud-background.png";
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

const StyledImage = styled.img`
  border: 1px solid yellow;
  bottom: 0;
  height: 174px;
  margin: auto;
  left: 0;
  position: absolute;
  right: 0;
  top: 0;
  width: 150px;

  ${media.smDesktop`
    height: 234px;
    width: 202px;
  `}
`;

const Animation = () => {
  return (
    <StyledContainer>
      <StyledImage src={weather} alt="weather" />
    </StyledContainer>
  );
};

export default Animation;
