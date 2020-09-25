import React from "react";

import styled from "styled-components";
import Cloud from "./utils/cloud";
import IconContainer from "./utils/iconContainer";
import Lightning from "./utils/lightning";
import Raindrops from "./utils/raindrops";

const StyledThunderstorm = styled(IconContainer)`
  transform: scale(${({ withscale }) => (withscale ? withscale : 1)});
`;

const Thunderstorm = ({ withscale, zindex }) => {
  return (
    <StyledThunderstorm withscale={withscale}>
      <Cloud positiontop="5%" zindex={zindex} />

      <Lightning />

      <Raindrops>
        <div className="raindrop"></div>
        <div className="raindrop"></div>
        <div className="raindrop"></div>
        <div className="raindrop"></div>
        <div className="raindrop"></div>
        <div className="raindrop"></div>
      </Raindrops>
    </StyledThunderstorm>
  );
};

export default Thunderstorm;
