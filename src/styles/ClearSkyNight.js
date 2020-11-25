import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import Moon from './utils/moon';
import IconContainer from './utils/iconContainer';

const StyledClearSkyNight = styled(IconContainer)`
  transform: scale(${({ withscale }) => withscale || 1});
`;

const ClearSkyNight = ({ withscale }) => {
  return (
    <StyledClearSkyNight withscale={withscale}>
      <Moon />
    </StyledClearSkyNight>
  );
};

ClearSkyNight.propTypes = {
  withscale: PropTypes.string,
};

export default ClearSkyNight;
