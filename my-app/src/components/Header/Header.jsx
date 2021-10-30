import React from "react";

import {useState} from 'react'
import "./header.css";

export default function Header({handleSearch}) {

    const [cityName, setCityName] = useState("");
  return (
    <div className="header">
      <h2 className="header__title">My Weather</h2>
      <div className="header__search">
        <input className="header__search__input" onChange = {e=>setCityName(e.target.value)} type="text" />
        <button className="header__search__btn" >
          <img src="./images/search.png" onClick={()=>handleSearch(cityName)}alt="search-icon"/>
        </button>
      </div>
    </div>
  );
}
