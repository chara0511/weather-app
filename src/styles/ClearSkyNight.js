import React from "react";

import Moon from "./utils/moon";
import styled from "styled-components";
import IconContainer from "./utils/iconContainer";

const StyledClearSkyNight = styled(IconContainer)`
  transform: scale(${({ withscale }) => (withscale ? withscale : 1)});
`;

const ClearSkyNight = ({ withscale }) => {
  return (
    <StyledClearSkyNight withscale={withscale}>
      <Moon />
    </StyledClearSkyNight>
  );
};

export default ClearSkyNight;
