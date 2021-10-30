import React from "react";
import CurrentWeather from "../CurrentWeather/CurrentWeather";
import HourlyForecast from "../HourlyForecast/HourlyForecast";
import NearbyPlaces from "../NearbyPlaces/NearbyPlaces";

import "./TodayWeather.css";

export default function TodayWeather(props) {

  return (
    <div>
      <CurrentWeather weatherInfo={props.weatherInfo}/>
      <HourlyForecast location={props.weatherInfo.coord}/>
      <NearbyPlaces location={props.weatherInfo.coord}/>
    </div>
  );
}
