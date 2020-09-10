import React from "react";
import "./Weather.css";
import Search from "./Search";
import Animation from "./Animation";
import Temperature from "./Temperature";
import Today from "./Today";

const Weather = () => {
  return (
    <div className="weather">
      <Search />
      <Animation />
      <Temperature />
      <Today />
    </div>
  );
};

export default Weather;
