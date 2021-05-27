import React, { useEffect, useState } from "react";
import { FaWhatsapp } from "react-icons/fa";
import { FiClock, FiInfo } from "react-icons/fi";
import { Map, Marker, TileLayer } from "react-leaflet";
import mapIcon from '../utils/mapIcon';

import '../styles/pages/asylum.css';
import Sidebar from "../components/Sidebar";
import api from "../services/api";
import { useParams } from "react-router";

type TAsylum = {
  latitude: number;
  longitude: number;
  name: string;
  about: string;
  instructions: string;
  opening_hours: string;
  open_on_weekends: string;
  images: Array<{
    url: string;
    id: number;
  }>
}

type TParams = {
  id: string;
}

const Asylum = () => {
  const params = useParams<TParams>()
  const [asylum, setAsylum] = useState<TAsylum>()
  const [activeImageIndex, setActiveImageIndex] = useState(0)

  useEffect(() => {
    api.get(`asylum/${params.id}`).then(res => {
      setAsylum(res.data)
    })
  }, [params.id])

  return (
    <>
      {
        asylum ? (
          <div id="page-orphanage">
            <Sidebar />

            <main>
              <div className="orphanage-details">
                <img src={asylum.images[activeImageIndex].url} alt={asylum.name} />

                <div className="images">
                  {
                    asylum.images.map((image, index) => {
                      return (
                        <button
                          key={image.id}
                          className={activeImageIndex === index ? 'active' : ''}
                          type="button"
                          onClick={() => setActiveImageIndex(index)}
                        >
                          <img src={image.url} alt={asylum.name} />
                        </button>
                      )
                    })
                  }
                </div>

                <div className="orphanage-details-content">
                  <h1>{asylum.name}</h1>
                  <p>
                    {asylum.about}
                  </p>

                  <div className="map-container">
                    <Map
                      center={[asylum.latitude, asylum.longitude]}
                      zoom={16}
                      style={{ width: '100%', height: 280 }}
                      dragging={false}
                      touchZoom={false}
                      zoomControl={false}
                      scrollWheelZoom={false}
                      doubleClickZoom={false}
                    >
                      <TileLayer
                        url={`https://api.mapbox.com/styles/v1/mapbox/light-v10/tiles/256/{z}/{x}/{y}@2x?access_token=${process.env.REACT_APP_MAPBOX_TOKEN}`}
                      />
                      <Marker interactive={false} icon={mapIcon} position={[asylum.latitude, asylum.longitude]} />
                    </Map>

                    <footer>
                      <a target="_blank" rel="noopener noreferrer" href={`https://www.google.com/maps/dir/?api=1&destination=${asylum.latitude},${asylum.longitude}`}>Ver rotas no Google Maps</a>
                    </footer>
                  </div>

                  <hr />

                  <h2>Instruções para visita</h2>
                  <p>{asylum.instructions}</p>

                  <div className="open-details">
                    <div className="hour">
                      <FiClock size={32} color="#15B6D6" />
                Segunda à Sexta <br />
                      {asylum.opening_hours}
                    </div>
                    {
                      asylum.open_on_weekends ? (
                        <div className="open-on-weekends">
                          <FiInfo size={32} color="#39CC83" />
                Atendemos <br />
                fim de semana
                        </div>
                      ) : (
                        <div className="open-on-weekends dont-open">
                          <FiInfo size={32} color="#FF6690" />
                Não Atendemos <br />
                fim de semana
                        </div>
                      )
                    }
                  </div>

                  {/* <button type="button" className="contact-button">
              <FaWhatsapp size={20} color="#FFF" />
              Entrar em contato
            </button> */}
                </div>
              </div>
            </main>
          </div>
        ) : (<p>Carregando...</p>)
      }
    </>
  );
}

export default Asylum;