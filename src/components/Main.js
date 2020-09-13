import React from "react";
import styled from "styled-components";

import { theme } from "../styles";

const { colors } = theme;

const StyledContainer = styled.div`
  max-width: 100%; /* 459px in 1440px */
  background-color: ${colors.background};
`;

const Main = ({ children }) => {
  return <StyledContainer className="sizes">{children}</StyledContainer>;
};

export default Main;
