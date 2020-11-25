import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Cloud from './utils/cloud';
import Flakes from './utils/flakes';
import IconContainer from './utils/iconContainer';

const StyledSnow = styled(IconContainer)`
  transform: scale(${({ withscale }) => withscale || 1});
`;

const Snow = ({ withscale, zindex }) => {
  return (
    <StyledSnow withscale={withscale}>
      <Cloud positiontop="10%" zindex={zindex} />

      <Flakes />
    </StyledSnow>
  );
};

Snow.propTypes = {
  withscale: PropTypes.string,
  zindex: PropTypes.bool,
};

export default Snow;
