import React from 'react';

import { kelvToCels } from "../../assets/tempTransform";

const NearbyCity = (props) => {
    return (
        <div className="nearbyPlaces__main__city">
        <span className="nearbyPlaces__main__city__name">
            {props.cityInfo.name}
        </span>
        <div className="nearbyPlaces__main__city__imgBox">
        <img className="nearbyPlaces__main__city__img" src={`http://openweathermap.org/img/wn/${props.cityInfo.weather[0].icon}@2x.png`} alt="weather_info" />

        </div>
        <span className="nearbyPlaces__main__city__temp">
        {Math.round(kelvToCels(props.cityInfo.main.temp))}°C
        </span>
    </div>
    );
}

export default NearbyCity;
