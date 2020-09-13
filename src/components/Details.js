import React from "react";
import Forecast from "./Forecast";
import Hightlights from "./Hightlights";

import { theme } from "../styles";
import styled from "styled-components";

const { colors } = theme;

const StyledContainer = styled.div`
  background-color: ${colors.backgroundDetails};
`;

const Details = () => {
  return (
    <StyledContainer>
      <Forecast />

      <Hightlights />
    </StyledContainer>
  );
};

export default Details;
