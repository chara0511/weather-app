import apiService from "./apiService";

const apiKey = "your api key";

export const currentWeatherByLatLng = async (lat, lng) => {
  const url = `/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${apiKey}&units=metric`;

  const response = await apiService.get(url);

  return response.data;
};

export const forecastWeatherByLatLng = async (lat, lng) => {
  const url = `/data/2.5/onecall?lat=${lat}&lon=${lng}&exclude=minutely,hourly&appid=${apiKey}&units=metric`;

  const response = await apiService.get(url);

  return response.data;
};

export const currentWeatherByTag = async (name) => {
  const url = `/data/2.5/weather?q=${name}&appid=${apiKey}&units=metric`;

  const response = await apiService.get(url);

  return response.data;
};

export const forecastWeatherByTag = async (lat, lng) => {
  const url = `/data/2.5/onecall?lat=${lat}&lon=${lng}&exclude=minutely,hourly&appid=${apiKey}&units=metric`;

  const response = await apiService.get(url);

  return response.data;
};
