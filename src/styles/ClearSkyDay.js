import React from "react";

import Sun from "./utils/sun";
import styled from "styled-components";
import IconContainer from "./utils/iconContainer";

const StyledClearSkyDay = styled(IconContainer)`
  transform: scale(${({ withscale }) => (withscale ? withscale : 1)});
`;

const ClearSkyDay = ({ withscale }) => {
  return (
    <StyledClearSkyDay withscale={withscale}>
      <Sun animated />
    </StyledClearSkyDay>
  );
};

export default ClearSkyDay;
