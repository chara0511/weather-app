import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Moon from './utils/moon';
import Cloud from './utils/cloud';
import IconContainer from './utils/iconContainer';
import Raindrops from './utils/raindrops';

const StyledRain = styled(IconContainer)`
  transform: scale(${({ withscale }) => withscale || 1});
`;

const RainNight = ({ withscale, withrotate, zindex }) => {
  return (
    <StyledRain withscale={withscale}>
      <Moon positiontop="-20%" positionleft="-15%" withrotate={withrotate} />

      <Cloud positiontop="5%" zindex={zindex} />

      <Raindrops />
    </StyledRain>
  );
};

RainNight.propTypes = {
  withscale: PropTypes.string,
  withrotate: PropTypes.bool,
  zindex: PropTypes.bool,
};

export default RainNight;
