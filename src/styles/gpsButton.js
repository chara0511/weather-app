import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import GpsIcon from '../icons/gpsIcon';
import theme from './theme';

const { colors, shadows } = theme;

const StyledGpsButton = styled.button`
  border-radius: 50%;
  width: 40px;
  height: 40px;
  background-color: ${colors.inputBg};
  box-shadow: ${shadows.input};

  & svg {
    height: 22px;
    width: 22px;
  }
`;

const GpsButton = ({ currentLocation }) => {
  return (
    <StyledGpsButton onClick={currentLocation}>
      <GpsIcon />
    </StyledGpsButton>
  );
};

GpsButton.propTypes = {
  currentLocation: PropTypes.func.isRequired,
};

export default GpsButton;
