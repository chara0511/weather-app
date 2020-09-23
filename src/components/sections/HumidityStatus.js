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
    font-weight: 500;
    line-height: 42px;
  }
`;

const StyledBar = styled.div`
  text-align: right;
  width: 230px;
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
  background-color: ${colors.white};
  border-radius: 8px;
  height: 8px;
  position: relative;
  width: 230px;
`;

const StyledResult = styled.div`
  background-color: ${colors.barYellow};
  border-radius: 8px;
  height: 8px;
  position: absolute;
  transition: ${transition};
  width: ${(props) => `${props.humidity}%`};
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
