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
  padding: 52px 24px;
  width: 100%;

  ${media.smDesktop`
    padding: 52px 54px;
  `}

  ${media.mdDesktop`
    margin-left: 460px;
  `}

  ${media.lgDesktop`
    height: 100vh;
    padding: 52px 150px;
  `}
`;

const Details = () => {
  const { errors } = useContext(WeatherContext);

  return (
    <StyledContainer>
      {errors?.errorInfo === "Unauthorized" ||
      errors?.errorInfo === "User denied Geolocation" ? null : (
        <>
          <div>SwitchTemp.js</div>

          <Forecast />

          <Hightlights />
        </>
      )}
    </StyledContainer>
  );
};

export default Details;
