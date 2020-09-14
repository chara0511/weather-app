import React, { useContext } from "react";
import styled from "styled-components";
import { WeatherContext } from "../context/weatherContext";

import { theme } from "../styles";
import AirPressureStatus from "./sections/AirPressureStatus";
import HumidityStatus from "./sections/HumidityStatus";
import VisibilityStatus from "./sections/VisibilityStatus";
import WindStatus from "./sections/WindStatus";

const { colors, fontSizes } = theme;

const StyledContainer = styled.div`
  padding: 0px 24px;
`;

const Title = styled.h4`
  font-size: ${fontSizes.xl};
`;

const StyledHightlights = styled.div`
  display: grid;
  row-gap: 32px;
  padding: 1.25em 0;
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
  max-width: 328px;
  padding: 22px 0;
`;

const StyledContentSmall = styled(StyledContent)`
  height: 160px;
`;

const Hightlights = () => {
  const { forecast } = useContext(WeatherContext);

  console.log(forecast);

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
