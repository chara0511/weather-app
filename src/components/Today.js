import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { theme } from '../styles';
import MapMarkerIcon from '../icons/mapMarkerIcon';
import { getNow } from '../utils/date';

const { fontSizes } = theme;

const StyledContainer = styled.div`
  text-align: center;
  min-height: 65px;
`;

const DateNow = styled.p`
  font-size: ${fontSizes.lg};
  line-height: 21px;
  padding: 0.5em 0;
`;

const MapMarker = styled(DateNow)`
  font-weight: 600;

  & svg {
    width: 22px;
    height: 22px;
    margin-top: -0.25em;
  }
`;

const Today = ({ city, country }) => {
  const today = getNow();
  return (
    <StyledContainer>
      <DateNow>
        Today
        {' · '}
        {today}
      </DateNow>

      <MapMarker>
        <MapMarkerIcon />
        {city}
        {', '}
        {country}
      </MapMarker>
    </StyledContainer>
  );
};

Today.propTypes = {
  city: PropTypes.string.isRequired,
  country: PropTypes.string.isRequired,
};

export default Today;
