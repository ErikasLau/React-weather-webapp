import React from "react";
import { useEffect, useState } from "react";
import Cookies from 'js-cookie'
import Button from './components/Button'
import WeatherForecast from "./components/WeatherForecast";
import CitySearchForm from "./components/CitySearchForm";
import weatherServices from './services/weather'
import CityWeather from "./components/CityWeather";
import WeatherChart from "./components/WeatherChart";


function App() {
  if(Cookies.get('city') === undefined){
    Cookies.set('city', 'Vilnius')
  }
  const [weather, setWeather] = useState(null);
  const [forecast, setForecast] = useState({});
  const [city, setCity] = useState(Cookies.get('city'));

  useEffect(() => {
    console.log("fetching...")
    weatherServices.getAll(city).then((res) => {
      setWeather(res);
    });
    weatherServices.getAllForecast(city).then((res) => {
      setForecast(res);
    });
  }, [city]);

  if (weather) {
    return (
      <div className="p-2 text-center">
        <CitySearchForm setCity={setCity} />
        <div>
          <Button cityName={"Vilnius"} setCity={setCity} city={city} />
          <Button cityName={"Kaunas"} setCity={setCity} city={city} />
          <Button cityName={"Klaipėda"} setCity={setCity} city={city} />
          <Button cityName={"Šiauliai"} setCity={setCity} city={city} />
          <Button cityName={"Panevėžys"} setCity={setCity} city={city} />
        </div>
        <CityWeather weather={weather} />
        <div>
        <WeatherForecast weather={forecast} />
        </div>
        <WeatherChart weather={forecast.list}/>
      </div>
    );
  }
  return <p>Loading...</p>;
}

export default App;