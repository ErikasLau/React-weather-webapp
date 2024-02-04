import { useState } from "react";
import LineChart from "./LineChart";


const WeatherChart = ({ weather }) => {
    console.log(weather)
    if(weather !== undefined){
    const setUserData = ({
        labels: weather.slice(0, 20).map((item => item.dt_txt.substring(10, 13)+'h') ),
        datasets: [
          {
            type:'line',
            label: "Oro temperatūra (°C)",
            data: weather.slice(0, 20).map((item => Math.round(item.main.temp))),
            backgroundColor: [
              "#fff"
            ],
            borderColor: "black",
            borderWidth: 2,
          },
          {
            type: 'bar',
            label: "Krituliai (mm³)",
            data: weather.slice(0, 20).map((item) => ((item.rain !== undefined) ? item.rain['3h'] : 0)),
            backgroundColor: [
              "blue"
            ],
            borderColor: "black",
            borderWidth: 2,
          },
          {
            type: 'line',
            label: "Vėjo greitis (m/s)",
            data: weather.map((item => item.wind.speed)),
            backgroundColor: [
              "#000"
            ],
            borderColor: "black",
            borderWidth: 2,
          },
        ],
      });

  return (
    <div className="w-11/12 m-auto mt-6 max-w-5xl bg-gray-100 border-solid border-gray-600 rounded-md border-2 p-3">
      <h2 className="font-bold text-4xl pb-3">Orų diagrama</h2>
      <div id="forecastChart">
        <LineChart chartData={setUserData} />
      </div>
      </div>
  );
    } else {
      return null
    }
}

export default WeatherChart