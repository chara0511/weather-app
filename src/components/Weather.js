import React from "react";
import "./Weather.css";
import Search from "./Search";
import Animation from "./Animation";

const Weather = () => {
  return (
    <div className="weather">
      <Search />
      <Animation />
    </div>
  );
};

export default Weather;
