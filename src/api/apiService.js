import axios from 'axios';

// Use cors anywhere url to bypass browsers CORS check
const CORS_ANYWHERE_URL = 'https://cors-anywhere.herokuapp.com/';

const API_URL = 'https://api.openweathermap.org';

const BASE_URL = CORS_ANYWHERE_URL + API_URL;

const apiService = axios.create({
  baseURL: BASE_URL,
  withCredentials: false,
  headers: {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE,PATCH,OPTIONS',
  },
});

export default apiService;
