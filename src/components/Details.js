import React, { useContext } from 'react';
import styled from 'styled-components';
import { WeatherContext } from '../context/weatherContext';
import Forecast from './Forecast';
import Hightlights from './Hightlights';
import Footer from './Footer';
import media from '../styles/media';
import SwitchTemp from './SwitchTemp';
import { theme } from '../styles';

const { colors } = theme;

const StyledContainer = styled.div`
  background-color: ${colors.backgroundDetails};
  padding: 52px 24px;
  position: relative;

  ${media.smDesktop`
    margin-left: 460px;
    padding: 52px 54px;
  `}

  ${media.mdDesktop`
    width: 100%;
    min-height: 100vh;
  `}

  ${media.lgDesktop`
    min-height: 100vh;
    padding: 52px 150px;
  `}
`;

const Details = () => {
  const { errors } = useContext(WeatherContext);

  return (
    <StyledContainer>
      {errors?.errorInfo === 'Unauthorized' ||
      errors?.errorInfo === 'User denied Geolocation' ? null : (
        <>
          <SwitchTemp />

          <Forecast />

          <Hightlights />

          <Footer />
        </>
      )}
    </StyledContainer>
  );
};

export default Details;
