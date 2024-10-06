//import React from 'react'
import "./Menu.css";
import { NavLink, Link } from "react-router-dom";

export const Menu = () => {
  return (
    <div className="menu">
      <img className="logoProject" src="logo-project.png"></img>
      <Link to="/">
        <h2 className="titleProject">OBSERVATORIO AMBIENTAL</h2>
      </Link>
      <NavLink to="/fire-map">
        <span className="option">Mapa de incendios</span> 
      </NavLink>
      <NavLink to="/air-quality-map">
        <span className="option">Calidad del aire</span>  
      </NavLink>
      <NavLink to="/animal-biodiversity">
        <span className="option">Biodiversidad afectada</span>  
      </NavLink>
      <NavLink to="/news">
        <span className="option">Noticias</span>
      </NavLink>
    </div>
  );
};
