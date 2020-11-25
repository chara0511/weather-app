import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Cloud from './utils/cloud';
import IconContainer from './utils/iconContainer';
import Lightning from './utils/lightning';
import Raindrops from './utils/raindrops';

const StyledThunderstorm = styled(IconContainer)`
  transform: scale(${({ withscale }) => withscale || 1});
`;

const Thunderstorm = ({ withscale, zindex }) => {
  return (
    <StyledThunderstorm withscale={withscale}>
      <Cloud positiontop="5%" zindex={zindex} />

      <Lightning />

      <Raindrops>
        <div className="raindrop" />
        <div className="raindrop" />
        <div className="raindrop" />
        <div className="raindrop" />
        <div className="raindrop" />
        <div className="raindrop" />
      </Raindrops>
    </StyledThunderstorm>
  );
};

Thunderstorm.propTypes = {
  withscale: PropTypes.string,
  zindex: PropTypes.bool,
};

export default Thunderstorm;
