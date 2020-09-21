import React from "react";

import styled from "styled-components";
import { theme } from "../../styles";

const { colors, fontSizes, transition } = theme;

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
  width: 230px;
  text-align: right;
`;

const StyledWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;

const StyledParams = styled.p`
  color: ${colors.lightGrey};
  font-weight: 600;
  font-size: ${fontSizes.xs};
  line-height: 14px;
`;

const StyledBarContent = styled.div`
  width: 230px;
  height: 8px;
  position: relative;
  background-color: ${colors.white};
  border-radius: 8px;
`;

const StyledResult = styled.div`
  position: absolute;
  width: ${(props) => `${props.humidity}%`};
  background-color: ${colors.barYellow};
  height: 8px;
  transition: ${transition};
`;

const HumidityStatus = ({ humidity }) => {
  return (
    <>
      <SubTitle>Humidity </SubTitle>

      <StyledStatus>
        {humidity}
        <span>%</span>
      </StyledStatus>

      <StyledBar>
        <StyledWrapper>
          <StyledParams>0</StyledParams>
          <StyledParams>50</StyledParams>
          <StyledParams>100</StyledParams>
        </StyledWrapper>

        <StyledBarContent>
          <StyledResult humidity={humidity} />
        </StyledBarContent>

        <StyledParams>%</StyledParams>
      </StyledBar>
    </>
  );
};

export default HumidityStatus;
