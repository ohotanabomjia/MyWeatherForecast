import React from "react";
import { useEffect, useState } from "react";
import "./HourlyForecast.css";
import HourlyForecastItem from "./HourlyForecastItem";

export default function HourlyForecast(props) {
  const [hourlyForecast, setHourlyForecast] = useState([]);

  useEffect(() => {
    fetch(
      `http://api.openweathermap.org/data/2.5/onecall?lat=${props.location.lat}&lon=${props.location.lon}&exclude=daily,minutely&appid=9708505d6a2b16e9f7bd5444e6515310`
    )
      .then((res) => res.json())
      .then((data) =>
        setHourlyForecast(data.hourly.filter((forecast, ind) => ind < 6))
      );
  }, [props.location]);

  return (
    <div className="hourlyForecast">
      <div className="hourlyForecast__header block-title">
        <span className="hourlyForecast__header__title">Hourly</span>
      </div>
      <div className="hourlyForecast__main">
        <div className="hourlyForecast__main__items">
          <div className="hourlyForecast__main__items__title">Today</div>
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
        {hourlyForecast.map((item) => (
          <HourlyForecastItem hourInfo={item} key={item.dt} />
        ))}
      </div>
    </div>
  );
}
