import React from "react";
import styled from "styled-components";

const StyledContainer = styled.div`
  text-align: center;
`;

const Today = () => {
  return (
    <StyledContainer>
      <h3>Today - Fri, 5 Jun</h3>
      <p>
        <i>icon</i> Helsinki
      </p>
    </StyledContainer>
  );
};

export default Today;
