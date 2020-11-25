import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Sun from './utils/sun';
import Cloud from './utils/cloud';
import IconContainer from './utils/iconContainer';
import Raindrops from './utils/raindrops';

const StyledRain = styled(IconContainer)`
  transform: scale(${({ withscale }) => withscale || 1});
`;

const Rain = ({ withscale, zindex }) => {
  return (
    <StyledRain withscale={withscale}>
      <Sun withsizes="50%" marginleft="-10%" />

      <Cloud positiontop="5%" zindex={zindex} />

      <Raindrops />
    </StyledRain>
  );
};

Rain.propTypes = {
  withscale: PropTypes.string,
  zindex: PropTypes.bool,
};

export default Rain;
