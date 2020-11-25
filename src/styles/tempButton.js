import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import theme from './theme';

const { colors, shadows } = theme;

const StyledTempButton = styled.button`
  background-color: ${({ temp }) => (temp ? ` ${colors.white}` : `${colors.bgTempBtn}`)};
  box-shadow: ${shadows.input};
  border-radius: 50%;
  color: ${({ temp }) => (temp ? ` ${colors.colorTempBtn}` : `${colors.white}`)};
  font-weight: 700;
  height: 40px;
  margin-left: 12px;
  text-transform: uppercase;
  width: 40px;
`;
const TempButton = ({ value, temp, switchFn }) => {
  return (
    <StyledTempButton temp={temp} onClick={() => switchFn()}>
      {value}
    </StyledTempButton>
  );
};

TempButton.propTypes = {
  value: PropTypes.string.isRequired,
  temp: PropTypes.bool.isRequired,
  switchFn: PropTypes.func.isRequired,
};

export default TempButton;
