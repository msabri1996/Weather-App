
import axios from 'axios';
import { useEffect, useState } from 'react';
import './App.css';
import Form from './Components/Form';
import WeatherComp from './Components/WeatherComp';
import {Weather} from "./model/weather"


// //API CALL
// api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}
const API_KEY="bd7d93f942c599f579f4022304b53a17"
function App() {

  const [weather, setWeather] = useState({})
  const [error, seterror] = useState(false)
  
  // useEffect(() => {
  //   axios.get(`http://api.openweathermap.org/data/2.5/weather?q=karachi&appid=${API_KEY}`)
  //        .then(res=>{setWeather(new Weather(res.data.name,res.data.sys.country,res.data.main.temp,
  //         res.data.main.temp_max,res.data.main.temp_min,res.data.weather[0].description,getWeatherIcons(res.data.weather[0].id)));console.log(res);})
  // }, [])

  const getWeather=(e)=>{
    e.preventDefault()
    const city=e.target.elements.City.value;
    const country=e.target.elements.Country.value;
    if(city==="" || country===""){
      alert("invalid input")
      seterror(true)
    }
    else{
      seterror(false)
      axios.get(`http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${API_KEY}`)
         .then(res=>{if(res.status===200){setWeather(new Weather(res.data.name,res.data.sys.country,res.data.main.temp,
         res.data.main.temp_max,res.data.main.temp_min,res.data.weather[0].description,getWeatherIcons(res.data.weather[0].id)))}})
      e.target.elements.City.value="";
      e.target.elements.Country.value="";   
    }
  }

  const getWeatherIcons=(id)=>{
      switch(true){
        case id>=200 && id<=232 :
          return "wi-thunderstorm";
          
        case id>=300 && id<=321 :
          return "wi-sleet";
          
        case id>=500 && id<=531 :
          return "wi-rain";
          
        case id>=600 && id<=622 :
          return "wi-snow";
          
        case id>=701 && id<=781 :
          return "wi-fog";
          
        case id===800 :
          return "wi-day-sunny";
          
        case id>=801 && id<=804 :
          return "wi-cloudy";
          
        default:
          return "wi-cloudy";
          
      }
  }
  
  return (
    <div className="App">
       <Form getWeather={getWeather} error={error}/>
       <WeatherComp weather={weather}/>

    </div>
  );
}

export default App;
