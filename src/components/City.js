import React from "react";
import styled from "styled-components";
import { theme } from "../styles";
import NextIcon from "../icons/nextIcon";

const { colors } = theme;

const StyledContainer = styled.li`
  align-items: center;
  border: 1px solid ${colors.background};
  cursor: pointer;
  display: flex;
  justify-content: space-between;

  &:hover {
    border: 1px solid ${colors.grayish};
  }

  & svg {
    height: 12px;
    width: 12px;
    fill: ${colors.grayish};
  }
`;

const City = ({ name }) => {
  return (
    <StyledContainer>
      {name}
      <NextIcon />
    </StyledContainer>
  );
};

export default City;
