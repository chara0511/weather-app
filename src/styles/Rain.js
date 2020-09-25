import React from "react";

import styled from "styled-components";
import Sun from "./utils/sun";
import Cloud from "./utils/cloud";
import IconContainer from "./utils/iconContainer";
import Raindrops from "./utils/raindrops";

const StyledRain = styled(IconContainer)`
  transform: scale(${({ withscale }) => (withscale ? withscale : 1)});
`;

const Rain = ({ withscale, zindex }) => {
  return (
    <StyledRain withscale={withscale}>
      <Sun withsizes="50%" marginleft="-10%" />

      <Cloud positiontop="5%" zindex={zindex} />

      <Raindrops />
    </StyledRain>
  );
};

export default Rain;
