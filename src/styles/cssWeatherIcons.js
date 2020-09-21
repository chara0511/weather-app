import React from "react";
import ClearSkyDay from "./ClearSkyDay";
import ClearSkyNight from "./ClearSkyNight";
import FewCloudsDay from "./FewCloudsDay";
import FewCloudsNight from "./FewCloudsNight";
import Mist from "./Mist";
import Rain from "./Rain";
import ScatteredClouds from "./ScatteredClouds";
import ShowerRain from "./ShowerRain";
import Snow from "./Snow";
import Thunderstorm from "./Thunderstorm";

const CSSWeatherIcons = () => {
  return (
    <>
      <ClearSkyDay />
      <ClearSkyNight />
      <FewCloudsDay />
      <FewCloudsNight />
      <ScatteredClouds />
      <ShowerRain />
      <Rain />
      <Thunderstorm />
      <Snow />
      <Mist />
    </>
  );
};

export default CSSWeatherIcons;
