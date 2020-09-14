import React from "react";

import styled from "styled-components";
import { theme } from "../../styles";

const { colors, fontSizes } = theme;

const SubTitle = styled.h6`
  font-size: ${fontSizes.md};
  line-height: 19px;
`;

const StyledStatus = styled.h2`
  font-size: ${fontSizes.h2};
  font-weight: 600;

  & span {
    color: ${colors.white};
    font-size: ${fontSizes.xxl};
    line-height: 42px;
    font-weight: 500;
  }
`;

const AirPressureStatus = ({ pressure }) => {
  return (
    <>
      <SubTitle>Air Pressure</SubTitle>

      <StyledStatus>
        {pressure}
        <span> mb</span>
      </StyledStatus>
    </>
  );
};

export default AirPressureStatus;
