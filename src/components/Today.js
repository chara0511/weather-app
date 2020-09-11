import React from "react";
import styled from "styled-components";
import { theme } from "../styles";

const { fontSizes } = theme;

const StyledContainer = styled.div`
  border: 1px solid black;
  text-align: center;
  min-height: 65px;
`;

const DateNow = styled.p`
  font-size: ${fontSizes.lg};
  line-height: 21px;
  padding: 0.5em 0;
`;

const GPS = styled(DateNow)`
  font-weight: 600;
`;

const Today = () => {
  return (
    <StyledContainer>
      <DateNow>Today · Fri, 5 Jun</DateNow>

      <GPS>
        <i>i</i> Helsinki
      </GPS>
    </StyledContainer>
  );
};

export default Today;
