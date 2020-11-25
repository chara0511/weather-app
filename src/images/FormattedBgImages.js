import React from 'react';
import PropTypes from 'prop-types';
import CloudBackground from '../styles/CloudBackground';

const FormattedBgImages = ({ name }) => {
  switch (name) {
    // case "01d":
    // case "02d":
    case '03d':
    case '04d':
    case '09d':
    case '10d':
    case '11d':
    case '13d':
    case '50d':
      return <CloudBackground />;

    // case "01n":
    // case "02n":
    case '03n':
    case '04n':
    case '09n':
    case '10n':
    case '11n':
    case '13n':
    case '50n':
      return <CloudBackground night />;

    default:
      return <CloudBackground />;
  }
};

FormattedBgImages.propTypes = {
  name: PropTypes.string.isRequired,
};

export default FormattedBgImages;
