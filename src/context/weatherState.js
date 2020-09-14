import React, { useReducer } from "react";
import { WeatherReducer } from "./weatherReducer";
import { WeatherContext } from "./weatherContext";

import { CURRENT_WEATHER, WEATHER_FORECAST } from "../types";
import {
  currentWeatherByLatLng,
  currentWeatherByTag,
  forecastWeatherByLatLng,
  forecastWeatherByTag,
} from "../api";

const WeatherState = ({ children }) => {
  const initialState = { current: null, forecast: null, loading: true };

  const [state, dispatch] = useReducer(WeatherReducer, initialState);

  const getDataByTag = async (name) => {
    const current = await currentWeatherByTag(name);

    const forecast = await forecastWeatherByTag(name);

    dispatch({ type: CURRENT_WEATHER, payload: current });

    dispatch({ type: WEATHER_FORECAST, payload: forecast });
  };

  const getDataByLatLng = async (lat, lng) => {
    const current = await currentWeatherByLatLng(lat, lng);

    const forecast = await forecastWeatherByLatLng(lat, lng);

    dispatch({ type: CURRENT_WEATHER, payload: current });

    dispatch({ type: WEATHER_FORECAST, payload: forecast });
  };

  return (
    <WeatherContext.Provider
      value={{
        current: state.current,
        forecast: state.forecast,
        loading: state.loading,
        getDataByTag,
        getDataByLatLng,
      }}
    >
      {children}
    </WeatherContext.Provider>
  );
};

export default WeatherState;
