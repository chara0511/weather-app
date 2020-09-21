import React from "react";

import styled from "styled-components";
import Cloud from "./utils/cloud";
import Foggy from "./utils/foggy";
import IconContainer from "./utils/iconContainer";

const StyledMist = styled(IconContainer)`
  transform: scale(${({ withscale }) => (withscale ? withscale : 1)});
`;

const Mist = ({ withscale }) => {
  return (
    <StyledMist withscale={withscale}>
      <Cloud positiontop="10%" />
      <Foggy />
    </StyledMist>
  );
};

export default Mist;
