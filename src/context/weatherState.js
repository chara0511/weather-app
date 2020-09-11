import React, { useReducer } from "react";
import { WeatherReducer } from "./weatherReducer";
import { WeatherContext } from "./weatherContext";

import { CURRENT_WEATHER, WEATHER_FORECAST } from "../types";
import { CurrentWeatherApi, ForecastWeatherApi } from "../api";

const WeatherState = ({ children }) => {
  const initialState = { current: null, forecast: null };

  const [state, dispatch] = useReducer(WeatherReducer, initialState);

  const getData = async (name) => {
    const currentData = await CurrentWeatherApi(name);

    const forecastData = await ForecastWeatherApi(name);

    dispatch({ type: CURRENT_WEATHER, payload: currentData });

    dispatch({ type: WEATHER_FORECAST, payload: forecastData });
  };

  return (
    <WeatherContext.Provider
      value={{ current: state.current, forecast: state.forecast, getData }}
    >
      {children}
    </WeatherContext.Provider>
  );
};

export default WeatherState;
