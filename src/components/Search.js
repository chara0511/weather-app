import React, { useState, useContext, useRef } from "react";
import { WeatherContext } from "../context/weatherContext";

import ListCities from "./ListCities";
import { getCurrentLocation } from "../utils/location";
import SearchIcon from "../icons/searchIcon";
import CloseIcon from "../icons/closeIcon";

import styled from "styled-components";
import CircularButton from "../styles/circularButton";
import media from "../styles/media";
import { theme } from "../styles";

const { colors, shadows, transition } = theme;

const StyledContainer = styled.div`
  align-items: center;
  display: flex;
  justify-content: space-between;
  padding: 18px 11px 0 11px;

  ${media.lgDesktop`
    padding: 42px 46px 0 42px;
    width: 460px;
  `}
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
  margin: 11px;
  position: relative;

  ${media.lgDesktop`
    margin: 42px 46px 0 42px;
  `}
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

  ${media.lgDesktop`
    max-width: 268px;
  `}
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
  const [state, setState] = useState({
    city: "",
    cities: [
      { id: "a1b1c1", name: "London" },
      { id: "a1b1c12", name: "Miami" },
    ],
  });

  const [active, setActive] = useState(false);

  const { getDataByTag } = useContext(WeatherContext);

  const ref = useRef(null);

  const handleChange = (e) => {
    setState({
      ...state,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (state.city.trim() === "") {
      return;
    }

    getDataByTag(state.city);

    setState((prev) => ({
      cities: [
        { id: state.cities[1].id + 1, name: state.city },
        ...prev.cities,
      ],
      city: "",
    }));
  };

  const showSearch = () => {
    setActive(true);

    ref.current.focus();
  };

  const hideSearch = () => {
    setActive(false);
  };

  return (
    <StyledContainer>
      <StyledNav active={active}>
        <StyledWrapper>
          <CloseBtn onClick={hideSearch}>
            <CloseIcon />
          </CloseBtn>

          <StyledForm onSubmit={handleSubmit}>
            <SearchIcon />

            <InputSearch
              type="text"
              placeholder="search location"
              onChange={handleChange}
              ref={ref}
              name="city"
              value={state.city}
            />

            <SearchBtn type="submit">Search</SearchBtn>
          </StyledForm>

          <StyledList>
            <ListCities cities={state.cities} hideSearch={hideSearch} />
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
