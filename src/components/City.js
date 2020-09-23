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

const City = ({ name, country, hideSearch }) => {
  const { getDataByTag } = useContext(WeatherContext);

  const handleClick = async () => {
    console.log(name);
    await getDataByTag(name);
    return hideSearch();
  };

  return (
    <StyledContainer onClick={handleClick}>
      {name}, {country} <NextIcon />
    </StyledContainer>
  );
};

export default City;
