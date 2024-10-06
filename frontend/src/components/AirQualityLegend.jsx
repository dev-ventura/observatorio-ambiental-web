import React from 'react';
import './AirQualityLegend.css';

const AirQualityLegend = () => {
  return (
    <div className="legend-container">
      <h3>Índice de Calidad del Aire (PM2.5)</h3>
      <ul className="legend-list">
        <li>
          <span className="legend-color" style={{ backgroundColor: '#ff7e00' }}></span>
          Dañino para grupos sensibles (35.5 - 55.4 µg/m³)
        </li>
        <li>
          <span className="legend-color" style={{ backgroundColor: '#ff0000' }}></span>
          Dañino (55.5 - 150.4 µg/m³)
        </li>
        <li>
          <span className="legend-color" style={{ backgroundColor: '#8f3f97' }}></span>
          Muy dañino (150.5 - 250.4 µg/m³)
        </li>
        <li>
          <span className="legend-color" style={{ backgroundColor: '#7e0023' }}></span>
          Peligroso (≥ 250.5 µg/m³)
        </li>
      </ul>
    </div>
  );
};

export default AirQualityLegend;
