import apiService from "./apiService";

const apiKey = "0c0b7d1bcc3e964ca6ef54c3aa586a5d";

export const currentWeatherByLatLng = async (lat, lng) => {
  try {
    const url = `/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${apiKey}&units=metric`;

    const response = await apiService.get(url);

    return response.data;
  } catch (error) {
    console.log(error);
  }
};

export const forecastWeatherByLatLng = async (lat, lng) => {
  try {
    const url = `/data/2.5/onecall?lat=${lat}&lon=${lng}&
exclude=minutely,hourly&appid=${apiKey}&units=metric`;

    const response = await apiService.get(url);

    return response.data;
  } catch (error) {
    console.log(error);
  }
};

export const currentWeatherByTag = async (name) => {
  try {
    const url = `/data/2.5/weather?q=${name}&appid=${apiKey}&units=metric`;

    const response = await apiService.get(url);

    return response.data;
  } catch (error) {
    console.log(error);
  }
};

export const forecastWeatherByTag = async (lat, lng) => {
  try {
    const url = `/data/2.5/onecall?lat=${lat}&lon=${lng}&
exclude=minutely,hourly&appid=${apiKey}&units=metric`;

    const response = await apiService.get(url);

    return response.data;
  } catch (error) {
    console.log(error);
  }
};
