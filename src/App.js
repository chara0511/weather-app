import React from "react";

import Main from "./components/Main";

import WeatherState from "./context/weatherState";

import GlobalStyles from "./styles/globalStyles";

function App() {
  return (
    <>
      <GlobalStyles />

      <WeatherState>
        <Main />
      </WeatherState>
    </>
  );
}

export default App;
