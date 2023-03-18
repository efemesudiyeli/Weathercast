import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

function MainWeatherDisplay({ dayArray, userCoords }) {
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState();
  const [iconData, setIconData] = useState("01d");

  useEffect(() => {
    axios(
      `https://api.openweathermap.org/data/2.5/weather?lat=${userCoords.latitude}&lon=${userCoords.longitude}&lang=tr&units=metric&appid=${process.env.REACT_APP_API_KEY}`
    )
      .then((res) => {
        setData(res.data);
        setIconData(res.data.weather[0].icon);
      })
      .catch((error) => console.error(error))
      .finally(() => setIsLoading(false));
  }, [userCoords]);

  return isLoading ? (
    <>
      <progress className="progress w-96">Loading</progress>
    </>
  ) : (
    <header className="container mx-auto">
      <div className="hero bg-base-200 rounded-3xl mt-10">
        <div className="hero-content flex-col lg:flex-row">
          <img
            alt={data.weather[0].description}
            src={`https://openweathermap.org/img/wn/${iconData}@2x.png`}
            className="max-w-sm rounded-lg "
          />
          <div>
            <h1 className="text-5xl font-bold">
              {data.name}, {data.sys.country}
              <div className="badge badge-secondary align-middle -translate-y-1">
                {data.main.temp} °C
              </div>
            </h1>
            <p className="opacity-70 text-sm">
              Hissedilen {data.main.feels_like} °C.
              <span className="block">
                {dayArray[new Date(data.dt * 1000).getDay()]}
                {dayArray[new Date(data.dt * 1000)]}
              </span>
            </p>
            <p className="py-6">Hava {data.weather[0].description}</p>
            <ul className="grid grid-cols-2 mt-3 mb-5">
              <li>{data.wind.speed}m/s SW</li>
              <li>{data.main.pressure}hPa</li>
              <li>
                <span>Nem: </span>%{data.main.humidity}
              </li>
              <li>
                <span>Görüş Mesafesi: </span>
                {data.visibility.toString().slice(0, 2)}
              </li>
            </ul>
            <Link to={"/forecasts"} className="btn btn-primary">
              Tahminler
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}

export default MainWeatherDisplay;
