import React, { useContext } from "react";
import { WeatherContext } from "../context/weatherContext";

import AirPressureStatus from "./sections/AirPressureStatus";
import HumidityStatus from "./sections/HumidityStatus";
import VisibilityStatus from "./sections/VisibilityStatus";
import WindStatus from "./sections/WindStatus";

import styled from "styled-components";
import media from "../styles/media";
import { theme } from "../styles";

const { colors, fontSizes } = theme;

const StyledContainer = styled.div`
  padding: 0px 24px;

  ${media.lgDesktop`
    padding: 0px 150px;
  `}
`;

const Title = styled.h4`
  font-size: ${fontSizes.xl};
`;

const StyledHightlights = styled.div`
  display: grid;
  row-gap: 32px;
  padding: 1.25em 0;

  ${media.smDesktop`
    grid-template-columns: 1fr 1fr;  
  `}

  ${media.lgDesktop`
    column-gap: 48px;
  `}
`;

const StyledContent = styled.div`
  align-items: center;
  background: ${colors.background};
  border: 1px solid red;
  display: flex;
  flex-direction: column;
  font-size: ${fontSizes.md};
  justify-content: space-between;
  height: 204px;
  width: 328px;
  padding: 22px 0;
  margin: auto;
`;

const StyledContentSmall = styled(StyledContent)`
  height: 160px;
`;

const Hightlights = () => {
  const { forecast } = useContext(WeatherContext);

  return (
    <StyledContainer>
      <Title>Today’s Hightlights</Title>

      <StyledHightlights>
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
      </StyledHightlights>
    </StyledContainer>
  );
};

export default Hightlights;
