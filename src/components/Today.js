import React from "react";
import styled from "styled-components";
import { theme } from "../styles";
import MapMarkerIcon from "../icons/mapMarkerIcon";

const { fontSizes } = theme;

const StyledContainer = styled.div`
  border: 1px solid black;
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

const Today = () => {
  const today = Date();
  return (
    <StyledContainer>
      <DateNow>Today · {today}</DateNow>

      <MapMarker>
        <MapMarkerIcon /> Helsinki
      </MapMarker>
    </StyledContainer>
  );
};

export default Today;
