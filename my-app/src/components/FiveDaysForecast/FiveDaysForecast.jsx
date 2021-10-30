import { React, useEffect, useState } from "react";

import "./FiveDaysForecast.css";
import FiveDaysHourlyForecast from "./FiveDaysHourlyForecast";
import ForecastCard from "./ForecastCard";

export default function FiveDaysForecast(props) {
  const [activeDay, setActiveDay] = useState(+new Date());

  const [daylyForecast, setDaylyForecast] = useState([]);
  const [hourlyForecast, setHourlyForecast] = useState([]);

  const [hourlyForecastForCurrentDay, setHourlyForecastForCurrentDay] =
    useState([]);

  useEffect(() => {
    fetch(
      `http://api.openweathermap.org/data/2.5/onecall?lat=${props.weatherInfo.coord.lat}&lon=${props.weatherInfo.coord.lon}&exclude=minutely&appid=9708505d6a2b16e9f7bd5444e6515310`
    )
      .then((res) => res.json())
      .then((data) => {
        setDaylyForecast(data.daily.filter((item, ind) => ind < 5));
        setActiveDay(data.daily[0].dt);
        setHourlyForecast(data.hourly);
        setHourlyForecastForCurrentDay(
          data.hourly
            .filter((item) => item.dt * 1000 > activeDay)
            .filter((i, ind) => ind < 6)
        );
      });
  }, [props.weatherInfo.coord]);

  useEffect(() => {
    setHourlyForecastForCurrentDay(
      hourlyForecast
        .filter((item) => item.dt > activeDay)
        .filter((i, ind) => ind < 6)
    );
  }, [activeDay]);

  return (
    <div className="fivedays-forecast">
      <div className="fivedays-forecast__main">
        {daylyForecast.map((item) => (
          <ForecastCard
            isActive={activeDay === item.dt}
            onClick={setActiveDay}
            dayWeatherInfo={item}
            key={item.dt}
          />
        ))}
      </div>
      {
        <FiveDaysHourlyForecast
          currentDay={activeDay}
          hourlyForecast={hourlyForecastForCurrentDay}
        />
      }
    </div>
  );
}
