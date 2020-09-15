import React from "react";
import Forecast from "./Forecast";
import Hightlights from "./Hightlights";

import { theme } from "../styles";
import styled from "styled-components";
import media from "../styles/media";

const { colors } = theme;

const StyledContainer = styled.div`
  background-color: ${colors.backgroundDetails};
  width: 100%;

  ${media.lgDesktop`
    height: 100vh;
  `}
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
