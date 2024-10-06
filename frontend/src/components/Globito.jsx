// src/components/Globe.jsx
import { useEffect, useRef } from 'react';
import Globe from "react-globe.gl";
import useWindowSize from "../hooks/useWindowSize";

const Globito = () => {
  const globeRef = useRef(null);

  const { width, height } = useWindowSize();
console.log("width", width);
console.log("height", height);
  return (
    <div style={{ width: "500px", height: "500px" }}>
      <Globe
        ref={globeRef}
        globeImageUrl="//unpkg.com/three-globe/example/img/earth-dark.jpg"

        width={width * 0.72}
        height={height}
      />
    </div>
  )
};

export default Globito;
