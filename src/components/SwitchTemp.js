import React, { useContext } from 'react';
import styled from 'styled-components';
import { WeatherContext } from '../context/weatherContext';
import { TempButton } from '../styles';

const StyledContainer = styled.div`
  display: flex;
  justify-content: flex-end;
`;

const SwitchTemp = () => {
  const { celsius, fahrenheit, switchCelsius, switchFahrenheit } = useContext(WeatherContext);

  return (
    <StyledContainer>
      <TempButton value="ºc" temp={celsius} switchFn={switchCelsius} />
      <TempButton value="ºf" temp={fahrenheit} switchFn={switchFahrenheit} />
    </StyledContainer>
  );
};

export default SwitchTemp;
