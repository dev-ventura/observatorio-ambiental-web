import { useState, useEffect, useRef } from "react";
import Globe from "react-globe.gl";
import axios from "axios";
import countries from "../data/countries";
import { csvToJson } from "../utils/convertData";
import useWindowSize from "../hooks/useWindowSize";

const WrapperGlobe = () => {
  const globeEl = useRef();
  // const [countries, setCountries] = useState({ features: [] });
  const [altitude, setAltitude] = useState(0.1);
  const [transitionDuration, setTransitionDuration] = useState(1000);
  const [pointsData, setPointsData] = useState([]);

  const { width, height } = useWindowSize();

  const getFires = async () => {
    try {
      const MAP_KEY = "bf568d3f7456934f8ce6c50efffb8ea9";
      const URL =
        "https://firms.modaps.eosdis.nasa.gov/api/area/csv/" +
        MAP_KEY +
        "/VIIRS_NOAA20_NRT/world/1";
      const response = await axios.get(URL);
      // console.log("axios",response.data);
      const jsonData = csvToJson(response.data);
      console.log("axios", jsonData);
      setPointsData(jsonData);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    globeEl.current.controls().autoRotate = true;
    globeEl.current.controls().autoRotateSpeed = 0.3;

    globeEl.current.pointOfView({ altitude: 4 }, 5000);

    setTimeout(() => {
      setTransitionDuration(4000);
      setAltitude(
        () => (feat) =>
          Math.max(0.1, Math.sqrt(+feat.properties.POP_EST) * 7e-5)
      );
    }, 3000);

    getFires();
  }, []);

  return (
    <div style={{ width: "500px", height: "500px" }}>
      <Globe
        ref={globeEl}
        globeImageUrl="//unpkg.com/three-globe/example/img/earth-dark.jpg"
        // polygonsData={countries.features.filter(
        //   (d) => d.properties.ISO_A2 !== "AQ"
        // )}
        // polygonAltitude={altitude}
        // polygonCapColor={() => "rgba(200, 0, 0, 0.6)"}
        // polygonSideColor={() => "rgba(0, 100, 0, 0.15)"}
        //   polygonLabel={({ properties: d }) => `
        //   <b>${d.ADMIN} (${d.ISO_A2})</b> <br />
        //   Population: <i>${Math.round(+d.POP_EST / 1e4) / 1e2}M</i>

        // `}
        //   polygonsTransitionDuration={transitionDuration}
        //   onPolygonClick={() => {alert("ANIMALITOS")}}
        pointsData={pointsData}
        width={width * 0.7}
        height={600}
        pointColor={() => "#FF0000"}
        pointAltitude={0.01}
      />
    </div>
  );
};

export default WrapperGlobe;
