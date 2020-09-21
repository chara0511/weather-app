import React from "react";

import styled from "styled-components";
import Moon from "./utils/moon";
import Cloud from "./utils/cloud";
import IconContainer from "./utils/iconContainer";

const StyledFewCloudsNight = styled(IconContainer)`
  transform: scale(${({ withscale }) => (withscale ? withscale : 1)});
`;

const FewCloudsNight = ({ withscale }) => {
  return (
    <StyledFewCloudsNight withscale={withscale}>
      <Moon />

      <Cloud withsizes="50%" animated />
    </StyledFewCloudsNight>
  );
};

export default FewCloudsNight;
