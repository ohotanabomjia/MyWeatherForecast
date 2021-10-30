import React from "react";

import { kelvToCels } from "../../assets/tempTransform";

export default function ForecastCard(props) {
  const isToday =
    new Date().getDay() === new Date(props.dayWeatherInfo.dt * 1000).getDay();

  return (
    <div
      onClick={() => {
        props.onClick(props.dayWeatherInfo.dt);
      }}
      className={`fivedays-forecast__main__item ${
        props.isActive ? "active" : ""
      }`}
    >
      <div className="fivedays-forecast__main__item__day">
        {isToday
          ? "Today"
          : new Date(props.dayWeatherInfo.dt * 1000).toLocaleDateString(
              undefined,
              { weekday: "short" }
            )}
      </div>
      <p className="fivedays-forecast__main__item__date">
        {new Date(props.dayWeatherInfo.dt * 1000).toLocaleDateString(
          undefined,
          { month: "short", day: "numeric" }
        )}
      </p>
      <img
        className="fivedays-forecast__main__item__img"
        src={`http://openweathermap.org/img/wn/${props.dayWeatherInfo.weather[0].icon}@2x.png`}
        alt="weather_info"
      />
      <p className="fivedays-forecast__main__item__temp">
        {Math.round(kelvToCels(props.dayWeatherInfo.temp.day))}°C
      </p>
      <p className="fivedays-forecast__main__item__weater">
        {props.dayWeatherInfo.weather.main}
      </p>
    </div>
  );
}
