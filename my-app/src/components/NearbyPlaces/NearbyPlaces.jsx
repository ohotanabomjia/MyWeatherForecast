import React from "react";
import { useEffect ,useState} from "react";
import NearbyCity from "./NearbyCity";

import "./NearbyPlaces.css";

export default function NearbyPlaces(props) {

  const [cities, setCities] = useState([]);

  useEffect(() => {
    fetch(
      `http://api.openweathermap.org/data/2.5/find?lat=${props.location.lat}&lon=${props.location.lon}&cnt=5&appid=9708505d6a2b16e9f7bd5444e6515310`
    )
      .then((res) => res.json())
      .then((data) => setCities(data.list));
  }, [props.location]);
  if(!cities){
    return
  }
  return (
    <div className="nearbyPlaces">
      <div className="nearbyPlaces__header block-title">
        <span className="nearbyPlaces__header__title">Nearby Places</span>
      </div>
      <div className="nearbyPlaces__main">
          {cities.map((item,ind)=>{
            if(ind===0)return ""
            return <NearbyCity cityInfo={item} key={item.id}/>
          })}
      </div>
    </div>
  );
}
