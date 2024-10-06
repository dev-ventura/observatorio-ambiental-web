//import React from 'react'
import "./Menu.css";
import { NavLink, Link } from "react-router-dom";

export const Menu = () => {
  return (
    <div className="menu">
      <div className="wrapperLogo">
        <img className="logoProject" src="logo-project.png"></img>
        <Link to="/">
          <h2 className="titleProject">OBSERVATORIO <br/> AMBIENTAL</h2>
        </Link>
      </div>
      <NavLink to="/fire-map">
        <span className="option">
          <i className="fa-solid fa-fire"></i>{" "}
          <span className="text-link">Mapa de incendios</span>
        </span>
      </NavLink>
      <NavLink to="/air-quality-map">
        <span className="option">
          <i className="fa-solid fa-wind"></i>{" "}
          <span className="text-link">Calidad del aire</span>
        </span>
      </NavLink>
      <NavLink to="/animal-biodiversity">
        <span className="option">
          <i className="fa-solid fa-frog"></i>{" "}
          <span className="text-link">Biodiversidad afectada</span>
        </span>
      </NavLink>
      <NavLink to="/news/incendios bolivia">
        <span className="option">
          <i className="fa-solid fa-newspaper"></i>{" "}
          <span className="text-link">Noticias</span>
        </span>
      </NavLink>
    </div>
  );
};
