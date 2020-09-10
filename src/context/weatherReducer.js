export const WeatherReducer = (state, action) => {
  switch (action.type) {
    case "SHOWER":
      return state;

    case "DATA":
      return { ...state, data: action.payload };

    case "CITY":
      return { ...state, city: action.payload };

    case "CLEAR":
      return state;

    case "HAIL":
      return state;

    case "HEAVYCLOUD":
      return state;

    case "HEAVYRAIN":
      return state;

    case "LIGHTCLOUD":
      return state;

    case "LIGHTRAIN":
      return state;

    case "SLEET":
      return state;

    case "SNOW":
      return state;

    case "THUNDERSTORM":
      return state;

    default:
      return state;
  }
};
