import React, { useContext } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { WeatherContext } from '../context/weatherContext';
import { theme } from '../styles';
import NextIcon from '../icons/nextIcon';

const { colors } = theme;

const StyledContainer = styled.button`
  align-items: center;
  background-color: transparent;
  border: 1px solid ${colors.background};
  color: ${colors.grayish};
  display: flex;
  justify-content: space-between;
  padding: 22px 12px;
  width: 100%;

  &:hover {
    border: 1px solid ${colors.grayish};
    color: ${colors.white};

    & svg {
      fill: ${colors.white};
    }
  }

  & svg {
    height: 16px;
    width: 16px;
    fill: ${colors.grayish};
  }
`;

const City = ({ name, country, hideSearch }) => {
  const { getDataByTag } = useContext(WeatherContext);

  const handleClick = async () => {
    await getDataByTag(name);
    return hideSearch();
  };

  return (
    <StyledContainer onClick={handleClick}>
      {name}
      {', '}
      {country}
      <NextIcon />
    </StyledContainer>
  );
};

City.propTypes = {
  name: PropTypes.string.isRequired,
  country: PropTypes.string.isRequired,
  hideSearch: PropTypes.func.isRequired,
};

export default City;
