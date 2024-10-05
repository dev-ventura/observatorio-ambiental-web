//import React from 'react'
import './Menu.css';

export const Menu = () => {
  return (
    <div className="menu">
        <img className="logoProject" src="logo-project.png"></img>
        <h2 className="titleProject">OBSERVATORIO AMBIENTAL</h2>
        <span className="option">Mapa de incendios</span><br></br>
        <span className="option">Calidad del aire</span><br></br>
        <span className="option">Biodiversidad afectada</span><br></br>
        <span className="option">Noticias</span>
    </div>
  )
}
