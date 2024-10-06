import { useState, useEffect, useRef } from "react";
import Globe from "react-globe.gl";
import axios from "axios";
import countries from "../data/countries";
import fires from "../data/backupFire";
import { csvToJson } from "../utils/convertData";
import useWindowSize from "../hooks/useWindowSize";
import { useNavigate } from "react-router-dom";

const WrapperGlobe = () => {
  const globeEl = useRef();
  // const [countries, setCountries] = useState({ features: [] });
  const [altitude, setAltitude] = useState(0.01);
  const [pointsData, setPointsData] = useState([]);

  const { width, height } = useWindowSize();

  const navigate = useNavigate();

  const getFires = async () => {
    try {
      const MAP_KEY = "bf568d3f7456934f8ce6c50efffb8ea9";
      const URL =
        "https://firms.modaps.eosdis.nasa.gov/api/area/csv/" +
        MAP_KEY +
        "/VIIRS_NOAA20_NRT/world/1";
      const response = await axios.get(URL);
      // console.log("axios",response.data);
      console.log(response.data)
      let jsonData = csvToJson(response.data);
      console.log("axios", jsonData);
      if(jsonData.length === 0){
        jsonData = csvToJson(fires);
      }
      setPointsData(jsonData);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    globeEl.current.controls().autoRotate = true;
    globeEl.current.controls().autoRotateSpeed = 0.3;

    globeEl.current.pointOfView({ altitude: 4 }, 5000);

    getFires();
  }, []);

  return (
    <div style={{ width: "500px", height: "500px" }}>
      <Globe
        ref={globeEl}
        globeImageUrl="//unpkg.com/three-globe/example/img/earth-blue-marble.jpg"
        polygonsData={countries.features.filter(
          (d) => d.properties.ISO_A2 !== "AQ"
        )}
        polygonAltitude={altitude}
        polygonCapColor={() => `#${Math.round(Math.random() * Math.pow(2, 24)).toString(16).padStart(6, '0')}80`}
        polygonStrokeColor={() => "#111"}
        polygonSideColor={() => "rgba(0, 100, 0, 0.15)"}
          polygonLabel={({ properties: d }) => `
          <b>${d.ADMIN} (${d.ISO_A2})</b>
        `}
        backgroundImageUrl="//unpkg.com/three-globe/example/img/night-sky.png"
        bumpImageUrl="//unpkg.com/three-globe/example/img/earth-topology.png"
        pointsData={pointsData}
        width={width * 0.7}
        height={height}
        pointColor={() => "#ff0000"}
        pointAltitude={0.01}
      />
    </div>
  );
};

export default WrapperGlobe;
