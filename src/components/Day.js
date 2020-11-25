import React, { useContext } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { WeatherContext } from '../context/weatherContext';
import FormattedImages from '../images/FormattedImages';
import { getFahrenheitValue } from '../utils';
import { theme } from '../styles';

const { colors, fontSizes } = theme;

const StyledContainer = styled.div`
  align-items: center;
  background-color: ${colors.background};
  display: flex;
  flex-direction: column;
  height: 177px;
  padding: 18px 12px;
  justify-content: space-between;
  margin: auto;
  width: 120px;
  position: relative;

  & img {
    height: 62px;
    width: 56px;
  }
`;
const StyledDay = styled.h6`
  font-size: ${fontSizes.md};
  line-height: 19px;
`;

const StyledTemp = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;

  & p {
    line-height: 19px;
    font-weight: 500;
    text-transform: uppercase;

    &:nth-of-type(1) {
      color: ${colors.white};
    }
  }
`;

const Day = ({ daily, day }) => {
  const { fahrenheit } = useContext(WeatherContext);

  const valueMax = fahrenheit ? getFahrenheitValue(daily.temp.max) : daily.temp.max;

  const valueMin = fahrenheit ? getFahrenheitValue(daily.temp.min) : daily.temp.min;

  return (
    <StyledContainer>
      <StyledDay>{day}</StyledDay>

      <FormattedImages name={daily.weather[0].icon} withscale="0.5" zindex />

      <StyledTemp>
        <p>
          {parseFloat(valueMax).toFixed(0)}
          {fahrenheit ? 'ºf' : 'ºc'}
        </p>

        <p>
          {parseFloat(valueMin).toFixed(0)}
          {fahrenheit ? 'ºf' : 'ºc'}
        </p>
      </StyledTemp>
    </StyledContainer>
  );
};

Day.propTypes = {
  daily: PropTypes.object.isRequired,
  day: PropTypes.string.isRequired,
};

export default Day;
