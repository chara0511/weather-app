import React from "react";
import Main from "./components/Main";
import Hero from "./components/Hero";
import WeatherInfo from "./components/WeatherInfo";
import WeatherState from "./context/weatherState";
import GlobalStyles from "./styles/globalStyles";

function App() {
  return (
    <>
      <GlobalStyles />

      <WeatherState>
        <Main>
          <Hero />
          <WeatherInfo />
        </Main>
      </WeatherState>
    </>
  );
}

export default App;
