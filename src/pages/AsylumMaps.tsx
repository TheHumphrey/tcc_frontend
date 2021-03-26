import React from "react";

import { Link } from "react-router-dom";

import { FiPlus } from "react-icons/fi";

import "../styles/pages/asylum-map.css";

import mapMarkerImg from "../images/map-marker.svg";
const AsylumMaps = () => {
  return (
    <div id="page-map">
      <aside>
        <header>
          <img src={mapMarkerImg} alt="logo" />

          <h2>Escolha um Asilo no mapa</h2>

          <p>Muitas velhinhos estão esperando a sua visita :)</p>
        </header>

        <footer>
          <strong>Goiânia</strong>
          <span>Goiás</span>
        </footer>
      </aside>
      <div></div>

      <Link to="" className="create-asylum">
        <FiPlus size={32} color="#fff" />
      </Link>
    </div>
  );
};

export default AsylumMaps;
