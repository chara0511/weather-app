import React, { useState, useContext, useEffect } from "react";
import styled from "styled-components";
import CircularButton from "../styles/circularButton";
import { WeatherContext } from "../context/weatherContext";

const StyledContainer = styled.div`
  align-items: center;
  display: flex;
  justify-content: space-between;
  padding: 18px 11px 0 11px;
`;

const StyledContent = styled.div`
  position: fixed;
  background: #1e213a;
  bottom: 0;
  top: 0;
  left: 0;
  right: 0;
  z-index: 2;
`;

const Wrapper = styled.div`
  border: 1px solid red;
  margin: 11px;
  height: 90vh;
`;

const InputClick = styled.input`
  height: 40px;
  width: 161px;
`;

const InputSearch = styled(InputClick)`
  height: 48px;
  width: 252px;
`;

const SearchButton = styled.button`
  background-color: #3c47e9;
  width: 86px;
  height: 48px;
`;

const Search = () => {
  const [city, setCity] = useState("");
  const [active, setActive] = useState(false);

  const { getData } = useContext(WeatherContext);

  useEffect(() => {}, []);

  const handleInput = (e) => {
    setCity(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (city === "") {
      return;
    }
    getData(city);

    setActive(false);
  };

  return (
    <StyledContainer>
      {active ? (
        <StyledContent>
          <Wrapper>
            <button onClick={() => setActive(false)}>X</button>

            <form onSubmit={handleSubmit}>
              <InputSearch
                type="text"
                placeholder="search location"
                onChange={handleInput}
              />
              <SearchButton type="submit">search</SearchButton>
            </form>
          </Wrapper>
        </StyledContent>
      ) : (
        <InputClick
          type="text"
          placeholder="Search for places"
          onClick={() => setActive(true)}
        />
      )}

      <CircularButton nameIcon="gps" />
    </StyledContainer>
  );
};

export default Search;
