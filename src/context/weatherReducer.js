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
        errors: null,
      };

    case "WEATHER_FORECAST":
      return {
        ...state,
        forecast: action.payload,
        loading: false,
        celsius: true,
        errors: null,
      };

    case "ERROR":
      return {
        ...state,
        loading: false,
        errors: { error: true, errorInfo: action.payload },
      }; //celsius:false?

    default:
      return state;
  }
};
