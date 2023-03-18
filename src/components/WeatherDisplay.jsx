import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";
function WeatherDisplay({ dayArray, forecastCount, userCoords }) {
  const [isLoading, setIsLoading] = useState(true);
  const [weatherData, setWeatherData] = useState();

  useEffect(() => {
    axios(
      `https://api.openweathermap.org/data/2.5/forecast?lat=${userCoords.latitude}&lon=${userCoords.longitude}&lang=tr&units=metric&appid=46f690e62c0ea02e842eb9c06da8a5e5`
    )
      .then((res) => {
        setWeatherData(res.data);
      })
      .catch((error) => console.error(error))
      .finally(() => setIsLoading(false));
  }, [userCoords]);

  return isLoading ? (
    <>
      <progress className="progress w-96">Loading</progress>
    </>
  ) : (
    <section
      className={`container mx-auto mt-20 mb-20 ${
        forecastCount === 8
          ? "flex flex-row flex-wrap gap-x-20 gap-y-5 justify-center"
          : "grid lg:grid-cols-5 md:grid-cols-3 sm:grid-cols-1 gap-x-5 gap-y-5"
      }  `}
    >
      {weatherData.list.slice(0, forecastCount).map((forecast, i) => (
        <div key={i} className="card w-auto bg-base-100 shadow-xl">
          <figure>
            <img
              src={`https://openweathermap.org/img/wn/${forecast.weather[0].icon}@2x.png`}
              alt={forecast.weather[0].description}
            />
          </figure>
          <div className="card-body gap-0">
            <h2 className="card-title">
              {dayArray[new Date(forecast.dt * 1000).getDay()]}
              <div className="badge badge-secondary">
                {forecast.main.temp} °C
              </div>
            </h2>
            <p className="text-left opacity-80 ">
              Hissedilen {forecast.main.feels_like} °C.
              <span className="block">
                Hava durumu: {forecast.weather[0].description}.
              </span>
            </p>
            <ul className="grid grid-cols-2 mt-3">
              <li>{forecast.wind.speed}m/s SW</li>
              <li>{forecast.main.pressure}hPa</li>
              <li>
                <span>Nem: </span>%{forecast.main.humidity}
              </li>
              <li>
                <span>Görüş Mesafesi: </span>
                {forecast.visibility.toString().slice(0, 2)}/km
              </li>
            </ul>
            <div className="card-actions justify-end mt-5">
              <div className="badge badge-outline">
                {new Date(forecast.dt * 1000).toLocaleString()}
              </div>
            </div>
          </div>
        </div>
      ))}
    </section>
  );
}

export default WeatherDisplay;
