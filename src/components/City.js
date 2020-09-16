import React from "react";
import styled from "styled-components";
import { theme } from "../styles";
import NextIcon from "../icons/nextIcon";

const { colors } = theme;

const StyledContainer = styled.div`
  align-items: center;
  border: 1px solid ${colors.background};
  cursor: pointer;
  display: flex;
  justify-content: space-between;
  padding: 22px 12px;

  &:hover {
    border: 1px solid ${colors.grayish};
  }

  & svg {
    height: 12px;
    width: 12px;
    fill: ${colors.grayish};
  }
`;

const City = ({ name, hideSearch }) => {
  return (
    <StyledContainer onClick={hideSearch}>
      {name}
      <NextIcon />
    </StyledContainer>
  );
};

export default City;
