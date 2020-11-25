import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import Sun from './utils/sun';
import IconContainer from './utils/iconContainer';

const StyledClearSkyDay = styled(IconContainer)`
  transform: scale(${({ withscale }) => withscale || 1});
`;

const ClearSkyDay = ({ withscale }) => {
  return (
    <StyledClearSkyDay withscale={withscale}>
      <Sun animated />
    </StyledClearSkyDay>
  );
};

ClearSkyDay.propTypes = {
  withscale: PropTypes.string,
};

export default ClearSkyDay;
