import React from "react";
import "./CurrentWeather.css";

import _01d from "../../assets/icons/01d.png";
import _02d from "../../assets/icons/02d.png";

const CurrentWeather = ({ data }) => {
  return (
    <div className="weather">
      <div className="top">
        <div>
          <p className="city">{data.city}</p>
          <p className="weather-description">{data.weather[0].description}</p>
        </div>
        <img src={_02d} alt="weather" className="weather-icon" />
      </div>

      <div className="bottom">
        <p className="temperature">{Math.round(data.main.temp)}°C</p>
        <div className="details">
          <div className="parameter-row">
            <span className="parameter-label">Details</span>
          </div>

          <div className="parameter-row">
            <span className="parameter-label">Feels like:</span>
            <span className="parameter-value">
              {Math.round(data.main.feels_like)}°C
            </span>
          </div>

          <div className="parameter-row">
            <span className="parameter-label">Wind:</span>
            <span className="parameter-value">{data.wind.speed}m/s</span>
          </div>

          <div className="parameter-row">
            <span className="parameter-label">Humidity:</span>
            <span className="parameter-value">{data.main.humidity}%</span>
          </div>

          <div className="parameter-row">
            <span className="parameter-label">Pressure:</span>
            <span className="parameter-value">{data.main.pressure}hPa</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CurrentWeather;
