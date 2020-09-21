import React from "react";

import styled from "styled-components";
import Sun from "./utils/sun";
import Cloud from "./utils/cloud";
import IconContainer from "./utils/iconContainer";
import Raindrops from "./utils/raindrops";

const StyledRain = styled(IconContainer)`
  transform: scale(${({ withscale }) => (withscale ? withscale : 1)});
`;

const Rain = ({ withscale }) => {
  return (
    <StyledRain withscale={withscale}>
      <Sun withsizes="50%" mleft="0" mtop="0" />

      <Cloud positiontop="5%" />

      <Raindrops>
        <div className="raindrop"></div>
        <div className="raindrop"></div>
        <div className="raindrop"></div>
        <div className="raindrop"></div>
        <div className="raindrop"></div>
        <div className="raindrop"></div>
      </Raindrops>
    </StyledRain>
  );
};

export default Rain;
