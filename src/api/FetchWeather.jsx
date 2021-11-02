import axios from "axios";

const URL = "https://api.openweathermap.org/data/2.5/weather";
const API_Key = "6c53f35efbc32652716dca98ad03ef69";

export const FetchWeather = async (query) => {
  const { data } = await axios.get(URL, {
    params: { q: query, units: "metric", APPID: API_Key },
  });
  return data;
};
