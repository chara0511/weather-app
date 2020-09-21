import React, { useState, useRef, useContext } from "react";

import ListCities from "./ListCities";
import { getCurrentLocation } from "../utils/location";
import SearchIcon from "../icons/searchIcon";
import CloseIcon from "../icons/closeIcon";

import { v4 as uuidv4 } from "uuid";

import styled from "styled-components";
import CircularButton from "../styles/circularButton";
import media from "../styles/media";
import { theme } from "../styles";
import ScrollY from "../styles/scrollY";
import { WeatherContext } from "../context/weatherContext";

const { colors, shadows, transition } = theme;

const StyledContainer = styled.div`
  position: absolute;
  top: 0;
  width: 100%;
  display: flex;
  justify-content: space-between;
  padding: 18px 11px 0 11px;
  z-index: 1;

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
  height: 90vh;
  margin: 11px;
  position: relative;
  ${media.lgDesktop`
    margin: 42px 46px 0 42px;
  `}
`;

const StyledCloseBtn = styled.button`
  background: transparent;
  padding: 0;
  position: absolute;
  right: 0;
  top: -50px;

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

const StyledSearchBtn = styled.button`
  color: ${colors.white};
  height: 40px;
  box-shadow: ${shadows.input};
  background-color: ${colors.inputBg};
  padding: 0 16px;
  width: 165px;
`;

const StyledSearchInput = styled.input`
  background-color: transparent;
  border: 1px solid ${colors.white};
  color: ${colors.white};
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

const StyledSubmit = styled.button`
  background-color: ${colors.buttonBackground};
  color: ${colors.white};
  height: 48px;
  width: 86px;
  line-height: 19px;
`;

const Search = () => {
  const { getDataByLatLng, showError } = useContext(WeatherContext);

  const [state, setState] = useState({
    city: "",
    cities: [{ id: uuidv4(), name: "London" }],
  });

  const [active, setActive] = useState(false);

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

    setState((prev) => ({
      city: "",
      cities: [{ id: uuidv4(), name: state.city }, ...prev.cities],
    }));
  };

  const showSearch = () => {
    setActive(true);

    ref.current.focus();
  };

  const hideSearch = () => {
    setActive(false);
  };

  const currentLocation = () => {
    getCurrentLocation()
      .then(({ lat, lng }) => getDataByLatLng(lat, lng))
      .catch((error) => showError(error.message));
  };

  return (
    <StyledContainer>
      <StyledNav active={active}>
        <StyledWrapper>
          <StyledCloseBtn onClick={hideSearch}>
            <CloseIcon />
          </StyledCloseBtn>

          <StyledForm onSubmit={handleSubmit}>
            <SearchIcon />

            <StyledSearchInput
              type="text"
              placeholder="search location"
              onChange={handleChange}
              ref={ref}
              name="city"
              value={state.city}
            />

            <StyledSubmit type="submit">Search</StyledSubmit>
          </StyledForm>

          <ScrollY withHeight="65vh">
            <ListCities cities={state.cities} hideSearch={hideSearch} />
          </ScrollY>
        </StyledWrapper>
      </StyledNav>

      <StyledSearchBtn onClick={showSearch}>Search for places</StyledSearchBtn>

      <CircularButton currentLocation={currentLocation} />
    </StyledContainer>
  );
};

export default Search;
