import React from "react";

import Main from "./components/Main";

import WeatherState from "./context/weatherState";
// import CSSWeatherIcons from "./styles/cssWeatherIcons";

import GlobalStyles from "./styles/globalStyles";

function App() {
  return (
    <>
      <GlobalStyles />

      <WeatherState>
        <Main />
        {/* <CSSWeatherIcons /> */}
      </WeatherState>
    </>
  );
}

export default App;
