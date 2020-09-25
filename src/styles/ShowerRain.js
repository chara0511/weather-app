import React from "react";

import styled from "styled-components";
import Cloud from "./utils/cloud";
import IconContainer from "./utils/iconContainer";
import Raindrops from "./utils/raindrops";

const StyledShowerRain = styled(IconContainer)`
  transform: scale(${({ withscale }) => (withscale ? withscale : 1)});
`;

const ShowerRain = ({ withscale, zindex }) => {
  return (
    <StyledShowerRain withscale={withscale}>
      <Cloud positiontop="5%" zindex={zindex} />

      <Raindrops />
    </StyledShowerRain>
  );
};

export default ShowerRain;
