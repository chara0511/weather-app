import React from "react";

import Main from "./components/Main";
import Hero from "./components/Hero";
import WeatherState from "./context/weatherState";

import GlobalStyles from "./styles/globalStyles";
import Details from "./components/Details";

function App() {
  return (
    <>
      <GlobalStyles />

      <WeatherState>
        <Main>
          <Hero />

          <Details />
        </Main>
      </WeatherState>
    </>
  );
}

export default App;
