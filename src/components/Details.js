import React, { useContext } from "react";
import Forecast from "./Forecast";
import Hightlights from "./Hightlights";

import { theme } from "../styles";
import styled from "styled-components";
import media from "../styles/media";
import { WeatherContext } from "../context/weatherContext";

const { colors } = theme;

const StyledContainer = styled.div`
  background-color: ${colors.backgroundDetails};
  width: 100%;

  ${media.lgDesktop`
    height: 100vh;
  `}
`;

const Details = () => {
  const { errors } = useContext(WeatherContext);

  return (
    <StyledContainer>
      {errors?.errorInfo === "Unauthorized" ||
      errors?.errorInfo === "User denied Geolocation" ? null : (
        <>
          <Forecast />

          <Hightlights />
        </>
      )}
    </StyledContainer>
  );
};

export default Details;
