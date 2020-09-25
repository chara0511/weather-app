import React from "react";
import styled from "styled-components";
import Cloud from "./utils/cloud";

const StyledContainer = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  overflow-x: hidden;
`;

const CloudBackground = ({ night }) => {
  return (
    <StyledContainer>
      <Cloud positiontop="0" positionleft="0" night={night} />
      <Cloud positiontop="5%" positionright="0" night={night} />
      <Cloud positionbottom="5%" positionleft="0" night={night} />
      <Cloud positionbottom="0" positionright="0" night={night} />
    </StyledContainer>
  );
};

export default CloudBackground;
