import React from 'react'
import "../styles/weathercomp.css"

const WeatherComp = ({weather}) => {
  // const geticon=()=>{
  //   getWeatherIcons(weather.weather_icon)
  // }
  return (
    <div className="cards pt-4 text-light">
        <h1 className="mt-5">Weather App</h1>
        {(weather.city!=="" || weather.country!=="") ? <h2 className="py-3">{weather.city} {weather.country}</h2>:null}
        <i className={`wi ${weather.weather_icon} display-1`}></i>
        {weather.temp_celsius ? <h5 className="py-2">{weather.temp_celsius}&deg;</h5>:null}
        {weather.temp_max ? <span className="px-4">{weather.temp_max}&deg;</span>:null}
        {weather.temp_min ? <span className="px-4">{weather.temp_min}&deg;</span>:null}
        <p>{weather.description}</p>
    </div>
  )
}

export default WeatherComp