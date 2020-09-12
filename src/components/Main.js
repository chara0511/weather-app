import React from "react";
import styled from "styled-components";

const StyledContainer = styled.div`
  max-width: 100%; /* 459px in 1440px */
`;

const Main = ({ children }) => {
  return <StyledContainer className="sizes">{children}</StyledContainer>;
};

export default Main;
