import React, { useState } from "react";
import { FetchWeather } from "./api/FetchWeather";

const Aplication = () => {
  const [query, setQuery] = useState("");
  const [weather, setWeather] = useState({});

  const search = async (e) => {
    if (e.key === "Enter") {
      const data = await FetchWeather(query);
      setWeather(data);
      setQuery();
    }
  };

  return (
    <div className="main-container">
      <div className="search-container">
        <input
          type="text"
          className="search"
          placeholder="Country name english"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onKeyPress={search}
        />
      </div>
      {weather.main && (
        <div className="city">
          <div className="info">
            <h2 className="city-name">
              <span>{weather.name}</span>
              <sup>{weather.sys.country}</sup>
            </h2>
          </div>
          <div className="city-temp">
            {Math.round(weather.main.temp)}
            <sup>&deg;C</sup>
            <p>{weather.weather[0].description}</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Aplication;
