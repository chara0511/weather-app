import React from "react";

import ClearSkyDay from "../styles/ClearSkyDay";
import ClearSkyNight from "../styles/ClearSkyNight";
import FewCloudsDay from "../styles/FewCloudsDay";
import FewCloudsNight from "../styles/FewCloudsNight";
import ScatteredClouds from "../styles/ScatteredClouds";
import ShowerRain from "../styles/ShowerRain";
import Rain from "../styles/Rain";
import Thunderstorm from "../styles/Thunderstorm";
import Snow from "../styles/Snow";
import Mist from "../styles/Mist";
import ErrorIcon from "../icons/errorIcon";

const FormattedImages = ({ name, withscale }) => {
  switch (name) {
    case "01d":
      return <ClearSkyDay withscale={withscale} />;

    case "01n":
      return <ClearSkyNight withscale={withscale} />;

    case "02d":
      return <FewCloudsDay withscale={withscale} />;
    case "02n":
      return <FewCloudsNight withscale={withscale} />;

    case "03d":
    case "03n":
    case "04d":
    case "04n":
      return <ScatteredClouds withscale={withscale} />;

    case "09d":
    case "09n":
      return <ShowerRain withscale={withscale} />;

    case "10d":
    case "10n":
      return <Rain withscale={withscale} />;

    case "11d":
    case "11n":
      return <Thunderstorm withscale={withscale} />;

    case "13d":
    case "13n":
      return <Snow withscale={withscale} />;

    case "50d":
    case "50n":
      return <Mist withscale={withscale} />;

    default:
      return <ErrorIcon />;
  }
};

export default FormattedImages;
