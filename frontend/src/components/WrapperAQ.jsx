import { useState, useEffect, useRef } from 'react';
import Globe from 'react-globe.gl';
import axios from 'axios';
import { csvToJson } from '../utils/convertDataQA';
import useWindowSize from '../hooks/useWindowSize';

const WrapperAQ = () => {
  const globeEl = useRef();
  const [pointsData, setPointsData] = useState([]);

  const { width, height } = useWindowSize();

  const getPM25Data = async () => {
    try {
      const response = await axios.get('/pm25_data.csv');
      const csvData = response.data;
      const jsonData = csvToJson(csvData);

      // Filtrar los datos para incluir solo los valores altos de PM2.5
      const filteredData = jsonData.filter((d) => {
        const value = d['value_pm25'];
        return value >= 13.5; // Incluir valores mayores o iguales a 55.5
      });

      console.log('Datos filtrados:', filteredData.length);
      setPointsData(filteredData);
    } catch (error) {
      console.error('Error al cargar los datos PM2.5:', error);
    }
  };

  useEffect(() => {
    getPM25Data();

    if (globeEl.current) {
      globeEl.current.controls().autoRotate = true;
      globeEl.current.controls().autoRotateSpeed = 0.3;
      globeEl.current.pointOfView({ altitude: 4 }, 5000);
    }
  }, []);

  return (
    <div style={{ width: '500px', height: '500px' }}>
      <Globe
        ref={globeEl}
        globeImageUrl="//unpkg.com/three-globe/example/img/earth-day.jpg"
        pointsData={pointsData}
        width={width * 0.7}
        height={height}
        pointColor={(d) => {
          const value = d['value_pm25'];

          if (isNaN(value) || value == null) {
            return '#ffffff'; // Color por defecto para valores inválidos
          }

          if (value < 55.5) return '#ff7e00'; // Dañino para grupos sensibles
          else if (value < 150.5) return '#ff0000'; // Dañino
          else if (value < 250.5) return '#8f3f97'; // Muy dañino
          else return '#7e0023'; // Peligroso
        }}
        pointAltitude={() => 0.01}
        pointRadius={0.4}
      />
    </div>
  );
};

export default WrapperAQ;
