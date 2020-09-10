import React from "react";
import Main from "./components/Main";
import Weather from "./components/Weather";
import WeatherInfo from "./components/WeatherInfo";
import WeatherState from "./context/weatherState";

function App() {
  return (
    <WeatherState>
      <Main>
        <Weather />
        <WeatherInfo />
      </Main>
    </WeatherState>
  );
}

export default App;
