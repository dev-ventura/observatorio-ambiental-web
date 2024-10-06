// src/components/Globe.jsx
import { useEffect, useRef } from "react";
import Globe from "react-globe.gl";
import useWindowSize from "../hooks/useWindowSize";

const Globito = () => {
  const globeRef = useRef(null);

  const { width, height } = useWindowSize();
  console.log("width", width);
  console.log("height", height);
  useEffect(() => {
    globeRef.current.controls().autoRotate = true;
    globeRef.current.controls().autoRotateSpeed = 0.2;
  }, []);
  return (
    <div style={{ width: "500px", height: "500px" }}>
      <Globe
        ref={globeRef}
        backgroundImageUrl="//unpkg.com/three-globe/example/img/night-sky.png"
        bumpImageUrl="//unpkg.com/three-globe/example/img/earth-topology.png"
        globeImageUrl="//unpkg.com/three-globe/example/img/earth-blue-marble.jpg"
        width={width * 0.72}
        height={height}
      />
    </div>
  );
};

export default Globito;
