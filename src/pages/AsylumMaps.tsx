import React, { useEffect, useState } from "react";

import { Link } from "react-router-dom";
import { FiPlus, FiArrowRight } from "react-icons/fi";
import { Map, TileLayer, Marker, Popup } from "react-leaflet";
import Leaflet from 'leaflet';

import mapMarkerImg from "../images/map-marker.svg";

import "../styles/pages/asylum-map.css";
import api from "../services/api";

const mapIcon = Leaflet.icon({
  iconUrl: mapMarkerImg,
  iconSize: [58, 68],
  iconAnchor: [29, 68],
  popupAnchor: [178, 2]
})

type TAsylum = {
  id: number;
  latitude: number;
  longitude: number;
  name: string;
}

const AsylumMaps = () => {
  const [asylums, setAsylums] = useState<TAsylum[]>([])

  useEffect(() => {
    api.get('asylums').then(res => {
      setAsylums(res.data)
    })
  }, [])

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

        {
          asylums.map(asylum => {
            return (
              <Marker
                key={asylum.id}
                icon={mapIcon}
                position={[asylum.latitude, asylum.longitude]}
              >
                <Popup closeButton={false} minWidth={240} maxWidth={240} className="map-popup">
                  {asylum.name}
                  <Link to={`asylum/${asylum.id}`}>
                    <FiArrowRight size={20} color="FFF" />
                  </Link>
                </Popup>
              </Marker>
            )
          })
        }


      </Map>

      <Link to="asylum/create" className="create-asylum">
        <FiPlus size={32} color="#fff" />
      </Link>
    </div>
  );
};

export default AsylumMaps;
