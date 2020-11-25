import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Cloud from './utils/cloud';
import IconContainer from './utils/iconContainer';
import Raindrops from './utils/raindrops';

const StyledShowerRain = styled(IconContainer)`
  transform: scale(${({ withscale }) => withscale || 1});
`;

const ShowerRain = ({ withscale, zindex }) => {
  return (
    <StyledShowerRain withscale={withscale}>
      <Cloud positiontop="5%" zindex={zindex} />

      <Raindrops />
    </StyledShowerRain>
  );
};

ShowerRain.propTypes = {
  withscale: PropTypes.string,
  zindex: PropTypes.bool,
};

export default ShowerRain;
