import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Cloud from './utils/cloud';
import Foggy from './utils/foggy';
import IconContainer from './utils/iconContainer';

const StyledMist = styled(IconContainer)`
  transform: scale(${({ withscale }) => withscale || 1});
`;

const Mist = ({ withscale, zindex }) => {
  return (
    <StyledMist withscale={withscale}>
      <Cloud positiontop="10%" zindex={zindex} />
      <Foggy />
    </StyledMist>
  );
};

Mist.propTypes = {
  withscale: PropTypes.string,
  zindex: PropTypes.bool,
};

export default Mist;
