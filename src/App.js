import React from "react";
import Main from "./components/Main";

import WeatherState from "./context/weatherState";

import GlobalStyle from "./styles/globalStyles";

function App() {
  return (
    <>
      <GlobalStyle />

      <WeatherState>
        <Main />
      </WeatherState>
    </>
  );
}

export default App;
