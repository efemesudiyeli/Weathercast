import React from "react";
import "../App.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

import MainWeatherDisplay from "../components/MainWeatherDisplay";
import WeatherDisplay from "../components/WeatherDisplay";

function Home({ dayArray, userCoords }) {
  return (
    <div className="App">
      <Navbar></Navbar>
      <MainWeatherDisplay userCoords={userCoords} dayArray={dayArray} />
      <WeatherDisplay
        userCoords={userCoords}
        forecastCount={8}
        dayArray={dayArray}
      ></WeatherDisplay>

      <Footer />
    </div>
  );
}

export default Home;
