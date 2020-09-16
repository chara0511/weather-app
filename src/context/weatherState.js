import React, { useReducer } from "react";
import { WeatherReducer } from "./weatherReducer";
import { WeatherContext } from "./weatherContext";

import { CURRENT_WEATHER, WEATHER_FORECAST, ERROR } from "../types";
import {
  currentWeatherByLatLng,
  currentWeatherByTag,
  forecastWeatherByLatLng,
  forecastWeatherByTag,
} from "../api";

const WeatherState = ({ children }) => {
  const initialState = {
    current: null,
    forecast: null,
    loading: true,
    error: null,
    celsius: null,
    fahrenheit: null,
  };

  const [state, dispatch] = useReducer(WeatherReducer, initialState);

  const getDataByTag = async (name) => {
    const current = await currentWeatherByTag(name);

    const lat = current?.coord.lat;
    const lng = current?.coord.lon;

    const forecast = await forecastWeatherByTag(lat, lng);

    dispatch({ type: CURRENT_WEATHER, payload: current });

    dispatch({ type: WEATHER_FORECAST, payload: forecast });
  };

  const getDataByLatLng = async (lat, lng) => {
    const current = await currentWeatherByLatLng(lat, lng);

    const forecast = await forecastWeatherByLatLng(lat, lng);

    dispatch({ type: CURRENT_WEATHER, payload: current });

    dispatch({ type: WEATHER_FORECAST, payload: forecast });
  };

  const showError = (error) => {
    dispatch({ type: ERROR, payload: error.message });
  };

  return (
    <WeatherContext.Provider
      value={{
        current: state.current,
        forecast: state.forecast,
        loading: state.loading,
        celsius: state.celsius,
        fahrenheit: state.fahrenheit,
        getDataByTag,
        getDataByLatLng,
        showError,
      }}
    >
      {children}
    </WeatherContext.Provider>
  );
};

export default WeatherState;
