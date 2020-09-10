import React from "react";
import Main from "./components/Main";
import Weather from "./components/Weather";
import WeatherInfo from "./components/WeatherInfo";

function App() {
  return (
    <Main>
      <Weather />
      <WeatherInfo />
    </Main>
  );
}

export default App;
