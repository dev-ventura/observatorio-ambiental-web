// aqui vamos a hacer el enrutamiento
//import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Principal from "./components/Principal";
import FireMap from "./components/FireMap";
import AirQualityMap from "./components/AirQualityMap";
import AnimalBiodiversity from "./components/AnimalBiodiversity";
import Donativos from "./components/Donativos";
import News from "./components/News";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Principal />} />
        <Route path="fire-map" element={<FireMap />} />
        <Route path="air-quality-map" element={<AirQualityMap />} />
        <Route path="animal-biodiversity" element={<AnimalBiodiversity />} />
        <Route path="news/:q" element={<News />} />
        <Route path="donate" element={<Donativos />} />
      </Routes>
    </BrowserRouter>
  );
}

export { App };
