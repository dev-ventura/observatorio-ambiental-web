// src/components/Globe.jsx
import React, { useEffect, useRef } from 'react';
import Globe from 'globe.gl';

const Globito = () => {
  const globeRef = useRef(null);

  useEffect(() => {
    const globe = Globe()(globeRef.current)
      .globeImageUrl('//unpkg.com/three-globe/example/img/earth-blue-marble.jpg')
      .bumpImageUrl('//unpkg.com/three-globe/example/img/earth-topology.png')
      .backgroundImageUrl('//unpkg.com/three-globe/example/img/night-sky.png');
      
    return () => {
    };
  }, []);

  return <div ref={globeRef} style={{ width: '100%', height: '100vh' }} />;
};

export default Globito;
