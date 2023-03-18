import React from "react";
import "../App.css";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import WeatherDisplay from "../components/WeatherDisplay";
import ScrollTopButton from "../components/ScrollTopButton";
function Forecast({ dayArray, userCoords,   }) {
  return (
    <div className="App">
      <Navbar
      
      ></Navbar>
      <WeatherDisplay
        userCoords={userCoords}
        dayArray={dayArray}
      ></WeatherDisplay>
      <ScrollTopButton></ScrollTopButton>
      <Footer />
    </div>
  );
}

export default Forecast;
