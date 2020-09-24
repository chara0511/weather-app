import React, { useContext } from "react";
import Forecast from "./Forecast";
import Hightlights from "./Hightlights";

import { theme } from "../styles";
import styled from "styled-components";
import media from "../styles/media";
import { WeatherContext } from "../context/weatherContext";
import SwitchTemp from "./SwitchTemp";
const { colors } = theme;

const StyledContainer = styled.div`
  background-color: ${colors.backgroundDetails};
  padding: 52px 24px;

  ${media.smDesktop`
    margin-left: 460px;
    padding: 52px 54px;
  `}

  ${media.mdDesktop`
    width: 100%;
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
      {errors?.errorInfo === "Unauthorized" ||
      errors?.errorInfo === "User denied Geolocation" ? null : (
        <>
          <SwitchTemp />

          <Forecast />

          <Hightlights />
        </>
      )}
    </StyledContainer>
  );
};

export default Details;
