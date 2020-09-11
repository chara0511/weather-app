import axios from "axios";

export const CurrentWeatherApi = async (name) => {
  try {
    const appId = "0c0b7d1bcc3e964ca6ef54c3aa586a5d";

    const url = `http://api.openweathermap.org/data/2.5/weather?q=${name}&appid=${appId}&units=metric`;

    const response = await axios.get(url);

    return response.data;
  } catch (error) {
    console.log(error);
  }
};

export const ForecastWeatherApi = async (name) => {
  try {
    const appId = "0c0b7d1bcc3e964ca6ef54c3aa586a5d";

    const url = `http://api.openweathermap.org/data/2.5/forecast?q=${name}&appid=${appId}&units=metric`;

    const response = await axios.get(url);

    return response.data;
  } catch (error) {
    console.log(error);
  }
};
