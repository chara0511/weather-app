import React from "react";

import styled from "styled-components";

import image from "../images/Shower.png";

import { theme } from "../styles";
const { colors, fontSizes } = theme;

const StyledContainer = styled.div`
  max-width: 120px;
  height: 177px;
  background-color: ${colors.background};
  align-items: center;
  padding: 18px 0;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  & img {
    width: 56px;
    height: 62px;
  }
`;
const StyledDay = styled.h6`
  font-size: ${fontSizes.md};
  line-height: 19px;
`;

const StyledTemp = styled.div`
  display: flex;
  justify-content: space-between;
  column-gap: 12px;

  & p {
    line-height: 19px;
    font-weight: 500;

    &:nth-of-type(1) {
      color: ${colors.white};
    }
  }
`;

const Day = ({ data }) => {
  return (
    <StyledContainer>
      <StyledDay>{data.date}</StyledDay>
      <img src={image} alt="shower" />
      <StyledTemp>
        <p>{data.temp_max}ºC</p>
        <p>{data.temp_min}ºC</p>
      </StyledTemp>
    </StyledContainer>
  );
};

export default Day;
