import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { theme } from '../../styles';

const { colors, fontSizes } = theme;

const StyledSubTitle = styled.h6`
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
      <StyledSubTitle>Air Pressure</StyledSubTitle>

      <StyledStatus>
        {pressure}
        <span> mb</span>
      </StyledStatus>
    </>
  );
};

AirPressureStatus.propTypes = {
  pressure: PropTypes.number,
};

export default AirPressureStatus;
