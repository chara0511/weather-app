import React, { useState, useRef, useContext, useLayoutEffect } from "react";

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
import LoopIcon from "../icons/loopIcon";
import ErrorIcon from "../icons/errorIcon";

const { colors, fontSizes, shadows, transition } = theme;

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
  margin-top: 60px;
  position: relative;

  & .searchIcon {
    position: absolute;
    width: 24px;
    height: 24px;
    fill: ${colors.grayish};
    margin: 12px;
  }

  & .loopIcon {
    width: 24px;
    height: 24px;
    margin: 12px;
  }
`;

const StyledAlert = styled.div`
  display: flex;
  align-items: center;
  height: 30px;
  margin-bottom: 30px;
  font-size: ${fontSizes.md};

  & .errorIcon {
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
  line-height: 19px;
  width: 86px;
  position: relative;
`;

const Search = () => {
  const {
    current,
    errors,
    getDataByTag,
    getDataByLatLng,
    showError,
  } = useContext(WeatherContext);

  const [state, setState] = useState({
    city: "",
    cities: [],
  });

  const [active, setActive] = useState(false);

  const [loading, setLoading] = useState(null);

  const ref = useRef(null);

  const handleChange = (e) => {
    showError({ message: "" });

    setState({
      ...state,
      [e.target.name]: e.target.value,
    });
  };

  const addCity = async (nameCity) => {
    await getDataByTag(nameCity);
    return setLoading(false);
  };

  useLayoutEffect(() => {
    if (Object.keys(errors).length === 0) {
      setState((prev) => ({
        city: "",
        cities: [
          { id: uuidv4(), name: current.name, country: current.sys.country },
          ...prev.cities,
        ],
      }));

      hideSearch();
    } else {
      ref.current.focus();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [errors?.message]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    if (state.city.trim() === "") {
      setTimeout(() => {
        setLoading(false);
      }, 300);
      showError({ message: "Woops, enter a valid city name" });
      return;
    }

    addCity(state.city);
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
      .catch((error) => showError({ message: error.message }));
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
              ref={ref}
              name="city"
              onChange={handleChange}
              value={state.city}
            />

            <StyledSubmit type="submit">
              {loading ? <LoopIcon /> : "Search"}
            </StyledSubmit>
          </StyledForm>

          <StyledAlert>
            {errors?.message && (
              <>
                <ErrorIcon /> <p>{errors?.message}</p>
              </>
            )}
          </StyledAlert>

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
