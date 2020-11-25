export const WeatherReducer = (state, action) => {
  switch (action.type) {
    case 'SHOWER':
      return state;

    case 'CURRENT_WEATHER':
      return {
        ...state,
        current: action.payload,
        celsius: true,
        fahrenheit: false,
        errors: {},
        loading: false,
      };

    case 'WEATHER_FORECAST':
      return {
        ...state,
        forecast: action.payload,
      };

    case 'ERROR':
      return {
        ...state,
        errors: action.payload,
        loading: false,
      };

    case 'CELSIUS':
      return {
        ...state,
        celsius: true,
        fahrenheit: false,
      };

    case 'FAHRENHEIT':
      return {
        ...state,
        celsius: false,
        fahrenheit: true,
      };
    default:
      return state;
  }
};
