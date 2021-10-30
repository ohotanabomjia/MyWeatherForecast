import React from "react";

import "./CurrentWeather.css";
import { kelvToCels } from "../../assets/tempTransform";

export default function CurrentWeather({ weatherInfo }) {

  const differentTime=(t1,t2)=>{
    const diff = Math.abs(new Date(t1)-new Date(t2))
    const hours = Math.floor(diff/1000/60/60)
    const minutes=Math.round(diff/1000/60%60);
    return `${hours}:${minutes} hr`
  }
  return (
    <div className="currentWeather">
      <div className="currentWeather__header block-title">
        <span className="currentWeather__header__title">Current Weather</span>
        <span className="currentWeather__header__date">
          {new Date().toLocaleDateString("en-GB").replace(/\//g, ".")}
        </span>
      </div>
      <div className="currentWeather__main">
        <div className="currentWeather__main__imgBox">
          <img
            src={`http://openweathermap.org/img/wn/${weatherInfo.weather[0].icon}@2x.png`}
            alt="weather_info"
          />
          <span className="currentWeather__main__imgBox__text">
            {weatherInfo.weather[0].main}
          </span>
        </div>
        <div className="currentWeather__main__degrees">
          <span className="currentWeather__main__degrees__main">
            {Math.round(kelvToCels(weatherInfo.main.temp))}°C
          </span>
          <span className="currentWeather__main__degrees__sub">
            Real Feel {Math.round(kelvToCels(weatherInfo.main.feels_like))}°C
          </span>
        </div>
        <div className="currentWeather__main__dayInfo">
          <p className="currentWeather__main__dayInfo__text">
            Sunrice:{" "}
            {new Date(weatherInfo.sys.sunrise * 1000)
              .toLocaleTimeString([], {
                hour: "2-digit",
                minute: "2-digit",
                hour12: true,
              })
              .toUpperCase()}
          </p>
          <p className="currentWeather__main__dayInfo__text">
            Sunset:{" "}
            {new Date(weatherInfo.sys.sunset * 1000)
              .toLocaleTimeString([], {
                hour: "2-digit",
                minute: "2-digit",
                hour12: true,
              })
              .toUpperCase()}
          </p>
          <p className="currentWeather__main__dayInfo__text">Duration: {differentTime(weatherInfo.sys.sunrise*1000,weatherInfo.sys.sunset*1000)}</p>
        </div>
      </div>
    </div>
  );
}
