import React from "react";

import { Link } from "react-router-dom";
import { FiPlus } from "react-icons/fi";
import { Map, TileLayer } from "react-leaflet";

import mapMarkerImg from "../images/map-marker.svg";

import "leaflet/dist/leaflet.css";
import "../styles/pages/asylum-map.css";

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
      <Map
        center={[-16.68062, -49.2735347]}
        zoom={15}
        style={{ width: "100%", height: "100%" }}
      >
        {/* <TileLayer url="https://a.tile.openstreetmap.org/{z}/{x}/{y}.png" /> */}
        <TileLayer
          url={`https://api.mapbox.com/styles/v1/mapbox/light-v10/tiles/256/{z}/{x}/{y}@2x?access_token=${process.env.REACT_APP_MAPBOX_TOKEN}`}
        />
      </Map>

      <Link to="" className="create-asylum">
        <FiPlus size={32} color="#fff" />
      </Link>
    </div>
  );
};

export default AsylumMaps;
