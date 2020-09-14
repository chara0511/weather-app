export const WeatherReducer = (state, action) => {
  switch (action.type) {
    case "SHOWER":
      return state;

    case "CURRENT_WEATHER":
      return {
        ...state,
        current: action.payload,
        loading: false,
        celsius: true,
      };

    case "WEATHER_FORECAST":
      return {
        ...state,
        forecast: action.payload,
        loading: false,
        celsius: true,
      };

    case "ERROR":
      return { ...state, error: action.payload };

    // case "CLEAR":
    //   return state;

    // case "HAIL":
    //   return state;

    // case "HEAVYCLOUD":
    //   return state;

    // case "HEAVYRAIN":
    //   return state;

    // case "LIGHTCLOUD":
    //   return state;

    // case "LIGHTRAIN":
    //   return state;

    // case "SLEET":
    //   return state;

    // case "SNOW":
    //   return state;

    // case "THUNDERSTORM":
    //   return state;

    default:
      return state;
  }
};
