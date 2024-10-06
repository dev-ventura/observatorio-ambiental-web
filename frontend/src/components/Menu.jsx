//import React from 'react'
import "./Menu.css";
import { Link } from "react-router-dom";

export const Menu = () => {
  return (
    <div className="menu">
      <img className="logoProject" src="logo-project.png"></img>
      <Link to="/">
        <h2 className="titleProject">OBSERVATORIO AMBIENTAL</h2>
      </Link>
      <Link to="/fire-map">
        <span className="option">Mapa de incendios</span>
        <br></br>
      </Link>
      <Link to="/air-quality-map">
        <span className="option">Calidad del aire</span>
        <br></br>
      </Link>
      <Link to="/animal-biodiversity">
        <span className="option">Biodiversidad afectada</span>
        <br></br>
      </Link>
      <Link to="/news">
        <span className="option">Noticias</span>
      </Link>
    </div>
  );
};
