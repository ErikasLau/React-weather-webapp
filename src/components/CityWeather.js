import Map from "./Map";
import time from "../services/time";
import Clock from './Clock'

const CityWeather = ({ weather }) => {

  return (
    <div className="flex flex-wrap flex-row justify-around items-center max-w-[64rem] m-auto">
      <div className="bg-slate-100 border-solid border-2 border-black rounded-md p-4 max-w-sm m-0 w-full">
        <h1 className="text-5xl font-bold">{weather.name}</h1>
        <Clock timezone={weather.timezone} />
        <div className="flex flex-wrap flex-row justify-around items-center">
          <div>
            <img
              className="m-auto mt-3 mb-3 rounded-md border-solid border-2 border-gray-500 bg-black"
              src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`}
              alt={`${weather.weather[0].main}`}
            ></img>
          </div>
          <div className="w-6/12">
            <h1 className="text-6xl font-bold">
              <strong>{Math.round(weather.main.temp)} °C</strong>
            </h1>
            <p>Temperatūra</p>
          </div>
        </div>
        <p>
          Juntamoji temperatūra:{" "}
          <strong>{Math.round(weather.main.feels_like)} °C</strong>
        </p>
        {weather.rain ? (
          <p>
            Lietaus kiekis: <strong>{weather.rain["1h"]} mm³</strong>
          </p>
        ) : null}
        <p>
          Santykinė oro drėgmė: <strong>{weather.main.humidity} %</strong>
        </p>
        <p>
          Vėjo greitis: <strong>{Math.round(weather.wind.speed)} m/s</strong>
        </p>
        <p>
          Slėgis: <strong>{weather.main.pressure} hPa</strong>
        </p>
        <p>
          Saulė kyla:{" "}
          <strong>{time.time(weather.sys.sunrise, weather.timezone)}</strong>
        </p>
        <p>
          Saulė leidžiasi:{" "}
          <strong>{time.time(weather.sys.sunset, weather.timezone)}</strong>
        </p>
      </div>
      <Map coords={weather.coord} />
    </div>
  );
};

export default CityWeather;