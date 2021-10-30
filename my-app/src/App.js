import "./App.css";

import { useState, useEffect } from "react";
import Header from "./components/Header/Header";
import WeatherInfo from "./components/WeatherInfo/WeatherInfo";
import PageNotFound from "./components/PageNotFound/PageNotFound";

function App() {
  const [currentGeolocation, setCurrentGeolocation] = useState({
    lat: null,
    lon: null,
  });
  const [currentCity, setCurrentCity] = useState(null);
  const [weatherInfo, setWeatherInfo] = useState(null);
  const [isGeolocationTaked, setIsGeolocationTaked] = useState(false);
  const [myCity, setMyCity] = useState(null);

  useEffect(() => {
    navigator.geolocation.getCurrentPosition((pos) => {
      setCurrentGeolocation((prev) => {
        prev.lat = pos.coords.latitude;
        prev.lon = pos.coords.longitude;
        setIsGeolocationTaked(true);
        return prev;
      });
    });
  }, []);

  useEffect(() => {
    if (currentGeolocation.lat) {
      fetch(
        `http://api.openweathermap.org/data/2.5/weather?lat=${currentGeolocation.lat}&lon=${currentGeolocation.lon}&appid=9708505d6a2b16e9f7bd5444e6515310`
      )
        .then((res) => res.json())
        .then((data) => {
          setCurrentCity(data.name);
          setMyCity(data.name);
        });
    }
  }, [currentGeolocation.lat, currentGeolocation.lon, isGeolocationTaked]);

  useEffect(() => {
    if (currentCity === "") {
      fetch(
        `http://api.openweathermap.org/data/2.5/weather?q=${myCity}&appid=9708505d6a2b16e9f7bd5444e6515310`
      )
        .then((res) => res.json())
        .then((data) => setWeatherInfo(data));
    }
    if (currentCity) {
      fetch(
        `http://api.openweathermap.org/data/2.5/weather?q=${currentCity}&appid=9708505d6a2b16e9f7bd5444e6515310`
      )
        .then((res) => res.json())
        .then((data) => setWeatherInfo(data));
    }
  }, [currentCity, currentGeolocation.lat, currentGeolocation.lat, myCity]);

  return (
    <div className="container">
      <Header handleSearch={setCurrentCity}></Header>
      {isGeolocationTaked ? (
        !weatherInfo || weatherInfo.cod === "404" ? (
          <PageNotFound city={currentCity} />
        ) : (
          <WeatherInfo
            weatherInfo={weatherInfo}
            city={currentCity}
          ></WeatherInfo>
        )
      ) : (
        <div className="loader">
          <img src="https://i.gifer.com/YMXw.gif" alt="cloud_gid"></img>
        </div>
      )}
    </div>
  );
}

export default App;
