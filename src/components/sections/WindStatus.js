import React, { useContext } from 'react';

import styled from 'styled-components';
import { WeatherContext } from '../../context/weatherContext';
import NavigationIcon from '../../icons/navigationIcon';

import { getMphValue } from '../../utils';
import { theme } from '../../styles';

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

const StyledDetails = styled.div`
  display: flex;
  align-items: center;

  & i {
    width: 24px;
    height: 24px;
    background-color: rgba(255, 255, 255, 0.3);
    border-radius: 50%;
    text-align: center;
    padding: 3px 0;
    margin: 0 8px;

    & svg {
      width: 16px;
      height: 16px;
      transform: rotate(-150deg);
    }
  }

  & p {
    text-transform: uppercase;
    color: ${colors.white};
    font-weight: 500;
    font-size: ${fontSizes.sm};
    line-height: 16px;
  }
`;

const WindStatus = ({ windSpeed = 0 }) => {
  const { fahrenheit } = useContext(WeatherContext);

  const value = fahrenheit ? getMphValue(windSpeed) : windSpeed;

  return (
    <>
      <SubTitle>Wind status </SubTitle>

      <StyledStatus>
        {parseFloat(value).toFixed(1)}
        <span>{fahrenheit ? 'mph' : 'mps'}</span>
      </StyledStatus>

      <StyledDetails>
        <i>
          <NavigationIcon />
        </i>
        <p>wsw</p>
      </StyledDetails>
    </>
  );
};

export default WindStatus;
