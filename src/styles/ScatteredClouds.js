import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Cloud from './utils/cloud';
import IconContainer from './utils/iconContainer';

const StyledScatteredClouds = styled(IconContainer)`
  transform: scale(${({ withscale }) => withscale || 1});
`;

const ScatteredClouds = ({ withscale, zindex }) => {
  return (
    <StyledScatteredClouds withscale={withscale}>
      <Cloud zindex={zindex} />
    </StyledScatteredClouds>
  );
};

ScatteredClouds.propTypes = {
  withscale: PropTypes.string,
  zindex: PropTypes.bool,
};

export default ScatteredClouds;
