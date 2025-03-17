import React from "react";
import "./CurrentWeather.css";
const weatherIcons = {
  "01d": require("../../assets/icons/01d.png"),
  "02d": require("../../assets/icons/02d.png"),
  "03d": require("../../assets/icons/03d.png"),
  "04d": require("../../assets/icons/04d.png"),
  "09d": require("../../assets/icons/09d.png"),
  "10d": require("../../assets/icons/10d.png"),
  "11d": require("../../assets/icons/11d.png"),
  "13d": require("../../assets/icons/13d.png"),
  "50d": require("../../assets/icons/50d.png"),
};
// import _01d from "../../assets/icons/01d.png";
// import _02d from "../../assets/icons/02d.png";
// import _03d from "../../assets/icons/03d.png";
// import _04d from "../../assets/icons/04d.png";
// import _09d from "../../assets/icons/09d.png";
// import _10d from "../../assets/icons/10d.png";
// import _11d from "../../assets/icons/11d.png";
// import _13d from "../../assets/icons/13d.png";
// import _50d from "../../assets/icons/50d.png";



const CurrentWeather = ({ data }) => {
  return (
    <div className="weather">
      <div className="top">
        <div>
          <p className="city">{data.city}</p>
          <p className="weather-description">{data.weather[0].description}</p>
        </div>
        {/* <img src={_01d} alt="weather" className="weather-icon" /> */}
        <img src={weatherIcons[data.weather[0].icon]} alt="weather" className="weather-icon" />
        
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
