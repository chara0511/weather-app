import React from "react";
import Main from "./components/Main";

import WeatherState from "./context/weatherState";
// import CSSWeatherIcons from "./styles/cssWeatherIcons";

import GlobalStyle from "./styles/globalStyles";

function App() {
  return (
    <>
      <GlobalStyle />

      <WeatherState>
        <Main />
        {/* <CSSWeatherIcons /> */}
      </WeatherState>
    </>
  );
}

export default App;
