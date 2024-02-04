const WeatherData = ({ weather }) => {
    return (
      <div className="w-[16rem] bg-slate-100 h-[18rem] inline-block p-4 rounded-md border-2 border-solid border-black m-2">
        <h2>{weather.dt_txt}</h2>
        <div className="flex flex-wrap flex-row justify-around items-center">
          <div>
            <img
              className="m-auto mt-3 mb-3 h-20 rounded-md border-solid border-2 border-gray-500 bg-black"
              src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`}
              alt={`${weather.weather[0].main}`}
            ></img>
          </div>
          <div className="w-6/12">
            <h1 className="text-4xl font-bold">
              {Math.round(weather.main.temp)} °C
            </h1>
            <p>Temperatūra</p>
          </div>
        </div>
        <p>
          Juntamoji temperatūra:{" "}
          <strong>{Math.round(weather.main.feels_like)} °C</strong>
        </p>
        <p>
          Lietaus tikimybė: <strong>{Math.round(weather.pop * 100)} %</strong>
        </p>
        <p>
          Santykinė oro drėgmė: <strong>{weather.main.humidity} %</strong>
        </p>
        <p>
          Vėjo greitis: <strong>{Math.round(weather.wind.speed)} m/s</strong>
        </p>
        <p>
          Slėgis: <strong>{weather.main.pressure} hPa</strong>
        </p>
      </div>
    );
  };

const WeatherForecast = ({ weather }) => {
    if (weather.list !== undefined) {
      return (
        <div className="forecast overflow-x-scroll max-w-5xl m-auto whitespace-nowrap mt-4 scroll-smooth">
          {weather.list.map((p, index) => (
            <WeatherData key={index} weather={p} />
          ))}
        </div>
      );
    }
    return <p>Nėra duomenų</p>;
  };

  export default WeatherForecast