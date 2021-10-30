import React from "react";
import { kelvToCels } from "../../assets/tempTransform";

const windDirection = (degree) => {
  if (degree > 337.5) return "N";
  if (degree > 292.5) return "NW";
  if (degree > 247.5) return "W";
  if (degree > 202.5) return "SW";
  if (degree > 157.5) return "S";
  if (degree > 122.5) return "SE";
  if (degree > 67.5) return "E";
  if (degree > 22.5) {
    return "NE";
  }
  return "N";
};

export default function HourlyForecastItem(props) {
  const makeHours = (t) => {
    const hours = new Date(t * 1000).toLocaleTimeString([], {
      hour: "2-digit",
      hour12: true,
    });
    return hours;
  };
  let day = props?.day;
  return (
    <div className="hourlyForecast__main__items">
      <div className="hourlyForecast__main__items__title">
        {day ? day : makeHours(props.hourInfo.dt)}
      </div>
      <img
        className="hourlyForecast__main__city__img"
        src={`http://openweathermap.org/img/wn/${props.hourInfo.weather[0].icon}@2x.png`}
        alt="weather_info"
      />
      <div className="hourlyForecast__main__items__forecast">
        <p>{props.hourInfo.weather[0].main}</p>
      </div>
      <div className="hourlyForecast__main__items__temp">
        <p>{Math.round(kelvToCels(props.hourInfo.temp))}°</p>
      </div>
      <div className="hourlyForecast__main__items__realFeel">
        <p>{Math.round(kelvToCels(props.hourInfo.feels_like))}°</p>
      </div>
      <div className="hourlyForecast__main__items__wind">
        <p>
          {Math.round(props.hourInfo.wind_speed) +
            windDirection(props.hourInfo.wind_deg)}
        </p>
      </div>
    </div>
  );
}
