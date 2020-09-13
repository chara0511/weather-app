import React from "react";
import styled from "styled-components";

import { theme } from "../styles";
import WindStatus from "./WindStatus";
const { colors, fontSizes } = theme;

const StyledContainer = styled.div`
  padding: 0px 24px;
`;

const Title = styled.h4`
  font-size: ${fontSizes.xl};
`;

const StyledHightlights = styled.div`
  display: grid;
  row-gap: 32px;
  padding: 1.25em 0;
`;

const StyledContent = styled.div`
  align-items: center;
  background: ${colors.background};
  border: 1px solid red;
  display: flex;
  flex-direction: column;
  font-size: ${fontSizes.md};
  justify-content: space-between;
  height: 204px;
  max-width: 328px;
  padding: 22px 0;
`;

const StyledContentSmall = styled(StyledContent)`
  height: 160px;
`;

const Hightlights = () => {
  return (
    <StyledContainer>
      <Title>Today’s Hightlights</Title>

      <StyledHightlights>
        <StyledContent>
          <WindStatus />
        </StyledContent>

        <StyledContent>Humidity</StyledContent>

        <StyledContentSmall>Visibility</StyledContentSmall>

        <StyledContentSmall>Air Pressure</StyledContentSmall>
      </StyledHightlights>
    </StyledContainer>
  );
};

export default Hightlights;
