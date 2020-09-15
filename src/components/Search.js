import React, { useState, useContext, useRef } from "react";
import styled from "styled-components";
import CircularButton from "../styles/circularButton";
import { WeatherContext } from "../context/weatherContext";

import { theme } from "../styles";
import CloseIcon from "../icons/closeIcon";
import ListCities from "./ListCities";
import SearchIcon from "../icons/searchIcon";
import { getCurrentLocation } from "../utils/location";

const { colors, shadows, transition } = theme;

const StyledContainer = styled.div`
  align-items: center;
  display: flex;
  justify-content: space-between;
  max-width: 460px;
  padding: 18px 11px 0 11px;
`;

const StyledNav = styled.div`
  position: fixed;
  background: ${colors.background};
  max-width: 460px;
  bottom: 0;
  top: 0;
  left: 0;
  right: 0;
  z-index: 2;
  transition: ${transition};
  transform: translateX(${(props) => (props.active ? `0px` : `-460px`)});
`;

const StyledWrapper = styled.div`
  border: 1px solid red;
  height: 90vh;
  margin: 11px; /* 11px 42px in 1440px */
  position: relative;
`;

const CloseBtn = styled.button`
  background: transparent;
  padding: 0;
  position: absolute;
  right: 0;
  top: 7px;

  & svg {
    width: 24px;
    height: 24px;
  }
`;

const StyledForm = styled.form`
  display: flex;
  gap: 0.5em;
  justify-content: space-between;
  margin: 60px auto;
  position: relative;

  & svg {
    position: absolute;
    width: 24px;
    height: 24px;
    fill: ${colors.grayish};
    margin: 12px;
  }
`;

const InputClick = styled.input`
  height: 40px;
  width: 165px;
  box-shadow: ${shadows.input};
  background-color: ${colors.inputBg};
  padding: 0 16px;
  color: ${colors.white};

  &::placeholder {
    color: ${colors.white};
  }
`;

const InputSearch = styled(InputClick)`
  background-color: transparent;
  border: 1px solid ${colors.white};
  box-shadow: none;
  height: 48px;
  max-width: 252px;
  padding-left: 50px;
  width: 100%;

  &::placeholder {
    color: ${colors.grayish};
  }
`;

const SearchBtn = styled.button`
  background-color: ${colors.buttonBackground};
  color: ${colors.white};
  height: 48px;
  width: 86px;
  line-height: 19px;
`;

const StyledList = styled.div`
  border: 1px solid green;
  overflow: auto;
  height: 65vh;

  &::-webkit-scrollbar {
    width: 8px;
    height: 8px;
  }

  &::-webkit-scrollbar-thumb {
    background-color: ${colors.grey};
    border-radius: 4px;
  }

  &::-webkit-scrollbar-thumb {
    &:hover,
    &:active {
      background-color: ${colors.grayish};
      box-shadow: ${shadows.scroll};
    }
  }

  &::-webkit-scrollbar-track {
    background-color: ${colors.white};
    border-radius: 4px;
  }

  &::-webkit-scrollbar-track {
    &:hover,
    &:active {
      background: ${colors.lightGrey};
    }
  }
`;

const Search = () => {
  const [city, setCity] = useState("");
  const [active, setActive] = useState(false);

  const { getDataByTag } = useContext(WeatherContext);

  const ref = useRef(null);

  const handleInput = (e) => {
    setCity(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (city.trim() === "") {
      return;
    }
    getDataByTag(city);
  };

  const showSearch = () => {
    setActive(true);

    ref.current.focus();
  };

  return (
    <StyledContainer>
      <StyledNav active={active}>
        <StyledWrapper>
          <CloseBtn onClick={() => setActive(false)}>
            <CloseIcon />
          </CloseBtn>

          <StyledForm onSubmit={handleSubmit}>
            <SearchIcon />

            <InputSearch
              type="text"
              placeholder="search location"
              onChange={handleInput}
              ref={ref}
              value={city}
            />

            <SearchBtn type="submit">Search</SearchBtn>
          </StyledForm>

          <StyledList>
            <ListCities />
          </StyledList>
        </StyledWrapper>
      </StyledNav>

      <InputClick
        type="text"
        placeholder="Search for places"
        onClick={showSearch}
      />

      <CircularButton currentLocation={getCurrentLocation} />
    </StyledContainer>
  );
};

export default Search;
