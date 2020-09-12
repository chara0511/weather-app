import React, { useState, useContext, useEffect } from "react";
import styled from "styled-components";
import CircularButton from "../styles/circularButton";
import { WeatherContext } from "../context/weatherContext";

import { theme } from "../styles";
import CloseIcon from "../icons/closeIcon";
import ListCities from "./ListCities";
import SearchIcon from "../icons/searchIcon";

const { colors, shadows, transition } = theme;

const StyledContainer = styled.div`
  align-items: center;
  display: flex;
  justify-content: space-between;
  padding: 18px 11px 0 11px;
`;

const StyledContent = styled.div`
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

const Wrapper = styled.div`
  border: 1px solid red;
  margin: 11px;
  height: 90vh;
`;

const CloseBtn = styled.button`
  background: transparent;
  padding: 0;
  position: absolute;
  right: 11px;
  top: 18px;

  & svg {
    width: 24px;
    height: 24px;
  }
`;

const Form = styled.form`
  display: flex;
  gap: 0.5em;
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

const Search = () => {
  const [city, setCity] = useState("");
  const [active, setActive] = useState(false);

  const { getData } = useContext(WeatherContext);

  useEffect(() => {
    console.log(active);
  }, [active]);

  const handleInput = (e) => {
    setCity(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (city.trim() === "") {
      return;
    }
    getData(city);
  };

  return (
    <StyledContainer>
      <StyledContent active={active}>
        <Wrapper>
          <CloseBtn onClick={() => setActive(false)}>
            <CloseIcon />
          </CloseBtn>

          <Form onSubmit={handleSubmit}>
            <SearchIcon />

            <InputSearch
              type="text"
              placeholder="search location"
              onChange={handleInput}
            />

            <SearchBtn type="submit">Search</SearchBtn>
          </Form>

          <ListCities />
        </Wrapper>
      </StyledContent>

      <InputClick
        type="text"
        placeholder="Search for places"
        onClick={() => setActive(true)}
      />

      <CircularButton />
    </StyledContainer>
  );
};

export default Search;
