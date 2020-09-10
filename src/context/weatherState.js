import React, { useReducer } from "react";
import { WeatherReducer } from "./weatherReducer";
import { WeatherContext } from "./weatherContext";

import { DATA } from "../types";
import { WeatherApi } from "../api";

const WeatherState = ({ children }) => {
  const initialState = { data: null, city: "" };

  const [state, dispatch] = useReducer(WeatherReducer, initialState);

  const getData = async (name) => {
    const data = await WeatherApi(name);

    dispatch({ type: DATA, payload: data });
  };

  return (
    <WeatherContext.Provider value={{ data: state.data, getData }}>
      {children}
    </WeatherContext.Provider>
  );
};

export default WeatherState;
