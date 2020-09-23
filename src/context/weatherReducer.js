export const WeatherReducer = (state, action) => {
  switch (action.type) {
    case "SHOWER":
      return state;

    case "CURRENT_WEATHER":
      return {
        ...state,
        current: action.payload,
        celsius: true,
        errors: {},
        loading: false,
      };

    case "WEATHER_FORECAST":
      return {
        ...state,
        forecast: action.payload,
        celsius: true,
        errors: {},
        loading: false,
      };

    case "ERROR":
      return {
        ...state,
        errors: action.payload,
        loading: false,
      }; //celsius:false?

    case "LOADING":
      return {
        ...state,
        loading: action.payload,
      }; //celsius:false?

    default:
      return state;
  }
};
