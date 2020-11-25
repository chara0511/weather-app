import React, { useContext } from 'react';
import styled from 'styled-components';
import { WeatherContext } from '../context/weatherContext';
import AirPressureStatus from './sections/AirPressureStatus';
import HumidityStatus from './sections/HumidityStatus';
import VisibilityStatus from './sections/VisibilityStatus';
import WindStatus from './sections/WindStatus';
import media from '../styles/media';
import { theme } from '../styles';

const { colors, fontSizes } = theme;

const Title = styled.h4`
  font-size: ${fontSizes.xl};
  padding-bottom: 32px;
`;

const StyledContainer = styled.div`
  display: grid;
  row-gap: 32px;
  padding: 1.25em 0;

  ${media.mdDesktop`
    grid-template-columns: 1fr 1fr;  
    column-gap: 36px; 
  `}

  ${media.lgDesktop`
    column-gap: 48px;
  `}
`;

const StyledContent = styled.div`
  align-items: center;
  background: ${colors.background};
  display: flex;
  flex-direction: column;
  font-size: ${fontSizes.md};
  justify-content: space-between;
  height: 204px;
  max-width: 328px;
  margin: auto;
  padding: 22px 0;
  width: 100%;
`;

const StyledContentSmall = styled(StyledContent)`
  height: 160px;
`;

const Hightlights = () => {
  const { forecast } = useContext(WeatherContext);

  return (
    <>
      <Title>Today’s Hightlights</Title>

      <StyledContainer>
        <StyledContent>
          <WindStatus windSpeed={forecast?.current.wind_speed} />
        </StyledContent>

        <StyledContent>
          <HumidityStatus humidity={forecast?.current.humidity} />
        </StyledContent>

        <StyledContentSmall>
          <VisibilityStatus visibility={forecast?.current.visibility} />
        </StyledContentSmall>

        <StyledContentSmall>
          <AirPressureStatus pressure={forecast?.current.pressure} />
        </StyledContentSmall>
      </StyledContainer>
    </>
  );
};

export default Hightlights;
