import React from 'react';
import PropTypes from 'prop-types';
import ClearSkyDay from '../styles/ClearSkyDay';
import ClearSkyNight from '../styles/ClearSkyNight';
import FewCloudsDay from '../styles/FewCloudsDay';
import FewCloudsNight from '../styles/FewCloudsNight';
import ScatteredClouds from '../styles/ScatteredClouds';
import ShowerRain from '../styles/ShowerRain';
import Rain from '../styles/Rain';
import Thunderstorm from '../styles/Thunderstorm';
import Snow from '../styles/Snow';
import Mist from '../styles/Mist';
import ErrorIcon from '../icons/errorIcon';
import RainNight from '../styles/RainNight';

const FormattedImages = ({ name, withscale, zindex }) => {
  switch (name) {
    case '01d':
      return <ClearSkyDay withscale={withscale} />;

    case '01n':
      return <ClearSkyNight withscale={withscale} />;

    case '02d':
      return <FewCloudsDay withscale={withscale} zindex={zindex} />;
    case '02n':
      return <FewCloudsNight withscale={withscale} zindex={zindex} />;

    case '03d':
    case '03n':
    case '04d':
    case '04n':
      return <ScatteredClouds withscale={withscale} zindex={zindex} />;

    case '09d':
    case '09n':
      return <ShowerRain withscale={withscale} zindex={zindex} />;

    case '10d':
      return <Rain withscale={withscale} zindex={zindex} />;
    case '10n':
      return <RainNight withscale={withscale} zindex={zindex} withrotate />;

    case '11d':
    case '11n':
      return <Thunderstorm withscale={withscale} zindex={zindex} />;

    case '13d':
    case '13n':
      return <Snow withscale={withscale} zindex={zindex} />;

    case '50d':
    case '50n':
      return <Mist withscale={withscale} zindex={zindex} />;

    default:
      return <ErrorIcon />;
  }
};

FormattedImages.propTypes = {
  name: PropTypes.string.isRequired,
  withscale: PropTypes.string,
  zindex: PropTypes.bool,
};

export default FormattedImages;
