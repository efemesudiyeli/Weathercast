import { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Forecast from "./pages/Forecast";

function App() {
  const [dayArray] = useState([
    "Pazar",
    "Pazartesi",
    "Salı",
    "Çarşamba",
    "Perşembe",
    "Cuma",
    "Cumartesi",
  ]);
  const [userCoords, setUserCoords] = useState({
    latitude: 40.7128,
    longitude: -74.006,
  });
  const [searchLocation, setSearchLocation] = useState();
  useEffect(() => {
    navigator.geolocation.getCurrentPosition((position) => {
      setUserCoords({
        latitude: position.coords.latitude,
        longitude: position.coords.longitude,
      });
    }); // eslint-disable-next-line
  }, []);

  return (
    <>
      <Routes>
        <Route
          path="/"
          element={
            <Home
              userCoords={userCoords}
              searchLocation={searchLocation}
              setSearchLocation={setSearchLocation}
              dayArray={dayArray}
            />
          }
        />
        <Route
          path="/forecasts"
          element={
            <Forecast
              userCoords={userCoords}
              searchLocation={searchLocation}
              setSearchLocation={setSearchLocation}
              dayArray={dayArray}
            />
          }
        />
      </Routes>
    </>
  );
}

export default App;
