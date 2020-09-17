import React, { useContext } from "react";
import styled from "styled-components";
import { theme } from "../styles";
import NextIcon from "../icons/nextIcon";
import { WeatherContext } from "../context/weatherContext";

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

const City = ({ name, hideSearch }) => {
  const { getDataByTag, errors } = useContext(WeatherContext);

  const getCityData = () => {
    getDataByTag(name);

    if (!errors) {
      hideSearch(); // useEffect
    }
  };

  return (
    <StyledContainer onClick={getCityData}>
      {name} <NextIcon />
    </StyledContainer>
  );
};

export default City;
