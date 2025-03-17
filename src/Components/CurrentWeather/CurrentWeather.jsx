import React from "react";
import "./CurrentWeather.css";
import o1d from "../../assets/icons/01d.png";

const CurrentWeather = () => {
  return (
    <div className="weather">
      <div className="top">
        <div>
          <p className="city">London</p>
          <p className="weather-description">Sunny</p>
        </div>
        <img src={o1d} alt="weather" className="weather-icon" />
      </div>

      <div className="bottom">
        <p className="temperature">18°C</p>
        <div className="details">
          <div className="parameter-row">
            <span className="parameter-label">Details</span>
          </div>

          <div className="parameter-row">
            <span className="parameter-label">Feels like:</span>
            <span className="parameter-value">32°C</span>
          </div>

          <div className="parameter-row">
            <span className="parameter-label">Wind:</span>
            <span className="parameter-value">2 m/s</span>
          </div>

          <div className="parameter-row">
            <span className="parameter-label">Humidity:</span>
            <span className="parameter-value">15%</span>
          </div>

          <div className="parameter-row">
            <span className="parameter-label">Pressure:</span>
            <span className="parameter-value">15hPa</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CurrentWeather;
