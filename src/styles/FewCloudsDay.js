import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import Sun from './utils/sun';
import Cloud from './utils/cloud';
import IconContainer from './utils/iconContainer';

const StyledFewCloudsDay = styled(IconContainer)`
  transform: scale(${({ withscale }) => withscale || 1});
`;

const FewCloudsDay = ({ withscale, zindex }) => {
  return (
    <StyledFewCloudsDay withscale={withscale}>
      <Sun animated />

      <Cloud withsizes="50%" animated zindex={zindex} />
    </StyledFewCloudsDay>
  );
};

FewCloudsDay.propTypes = {
  withscale: PropTypes.string,
  zindex: PropTypes.bool,
};

export default FewCloudsDay;
