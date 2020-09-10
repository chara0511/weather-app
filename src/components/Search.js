import React, { useState, useContext, useEffect } from "react";
import styled from "styled-components";
import CircularButton from "../styles/circularButton";
import { WeatherContext } from "../context/weatherContext";

const StyledContainer = styled.div`
  align-items: center;
  display: flex;
  justify-content: space-between;
  margin: 18px 11px;
`;

const Input = styled.input`
  height: 40px;
  width: 161px;
`;

const Search = () => {
  const [state, setState] = useState("");

  const { getData } = useContext(WeatherContext);

  useEffect(() => {
    if (state !== "") {
      getData(state);
    }
  }, [state]);

  const handleInput = (e) => {
    setState(e.target.value);
  };

  return (
    <StyledContainer>
      <Input
        type="text"
        placeholder="Search for places"
        onChange={handleInput}
      />

      <CircularButton nameIcon="gps" />
    </StyledContainer>
  );
};

export default Search;
