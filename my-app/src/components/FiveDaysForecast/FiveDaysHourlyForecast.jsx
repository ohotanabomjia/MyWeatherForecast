import React from "react";
import "../HourlyForecast/HourlyForecast.css";
import HourlyForecastItem from "../HourlyForecast/HourlyForecastItem";

export default function FiveDaysHourlyForecast(props) {
  if (props.hourlyForecast.length < 5) {
    return (
      <div className="hourlyForecast">
        <div className="hourlyForecast__header block-title">
          <span className="hourlyForecast__header__title">no information available, oops</span>
        </div>
      </div>
    );
  }
  return (
    <div className="hourlyForecast">
      <div className="hourlyForecast__header block-title">
        <span className="hourlyForecast__header__title">Hourly</span>
      </div>
      <div className="hourlyForecast__main">
        <div className="hourlyForecast__main__items">
          <div className="hourlyForecast__main__items__title">
            {new Date(props.currentDay * 1000).toLocaleDateString(undefined, {
              weekday: "long",
            })}
          </div>
          <div className="hourlyForecast__main__items__forecast">
            <p>Forecast</p>
          </div>
          <div className="hourlyForecast__main__items__temp">
            <p>Tepm (°C)</p>
          </div>
          <div className="hourlyForecast__main__items__realFeel">
            <p>RealFeel</p>
          </div>
          <div className="hourlyForecast__main__items__wind">
            <p>Wind (km/h)</p>
          </div>
        </div>
        {props.hourlyForecast.map((item) => (
          <HourlyForecastItem hourInfo={item} key={item.dt} />
        ))}
      </div>
    </div>
  );
}
