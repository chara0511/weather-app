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

const StyledBar = styled.div`
  border: 1px solid red;
  width: 230px;
  height: 50px;
`;

const StyledNum = styled.div`
  display: flex;
  justify-content: space-between;
`;

const StyledBarContent = styled.div`
  width: 230px;
  height: 8px;
  position: relative;
  background-color: ${colors.white};
  border-radius: 8px;

  & div {
    position: absolute;
    width: 84%;
    background-color: #ffec65;
    height: 8px;
  }
`;

const HumidityStatus = () => {
  return (
    <>
      <SubTitle>Humidity </SubTitle>

      <StyledStatus>
        84<span>%</span>
      </StyledStatus>

      <StyledBar>
        <StyledNum>
          <p>0</p>
          <p>50</p>
          <p>100</p>
        </StyledNum>

        <StyledBarContent>
          <div></div>
        </StyledBarContent>

        <p>%</p>
      </StyledBar>
    </>
  );
};

export default HumidityStatus;
