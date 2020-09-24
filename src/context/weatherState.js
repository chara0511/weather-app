import React, { useReducer } from "react";
import { WeatherContext } from "./weatherContext";
import { WeatherReducer } from "./weatherReducer";

import {
  CURRENT_WEATHER,
  WEATHER_FORECAST,
  ERROR,
  LOADING,
  CELSIUS,
  FAHRENHEIT,
} from "../types";
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
    errors: null,
    celsius: null,
    fahrenheit: null,
  };

  const [state, dispatch] = useReducer(WeatherReducer, initialState);

  const getDataByTag = async (name) => {
    try {
      const current = await currentWeatherByTag(name);

      const lat = current?.coord.lat;
      const lng = current?.coord.lon;

      const forecast = await forecastWeatherByTag(lat, lng);

      dispatch({ type: CURRENT_WEATHER, payload: current });

      dispatch({ type: WEATHER_FORECAST, payload: forecast });
    } catch (error) {
      //console.log({ error });
      showError({ message: error.response?.statusText });
    }
  };

  const getDataByLatLng = async (lat, lng) => {
    try {
      const current = await currentWeatherByLatLng(lat, lng);

      const forecast = await forecastWeatherByLatLng(lat, lng);

      dispatch({ type: CURRENT_WEATHER, payload: current });

      dispatch({ type: WEATHER_FORECAST, payload: forecast });
    } catch (error) {
      console.log(error.error.message);
      showError({ message: error.response?.statusText });
    }
  };

  const showError = (error) => {
    dispatch({ type: ERROR, payload: error });
  };

  const isLoading = () => {
    dispatch({ type: LOADING, payload: true });
  };

  const switchCelsius = () => {
    dispatch({ type: CELSIUS, payload: true });
  };

  const switchFahrenheit = () => {
    dispatch({ type: FAHRENHEIT, payload: true });
  };

  return (
    <WeatherContext.Provider
      value={{
        current: state.current,
        forecast: state.forecast,
        loading: state.loading,
        errors: state.errors,
        celsius: state.celsius,
        fahrenheit: state.fahrenheit,
        getDataByTag,
        getDataByLatLng,
        showError,
        isLoading,
        switchCelsius,
        switchFahrenheit,
      }}
    >
      {children}
    </WeatherContext.Provider>
  );
};

export default WeatherState;
