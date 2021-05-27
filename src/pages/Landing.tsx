import React from "react";

import { FiArrowRight } from "react-icons/fi";
import { Link } from "react-router-dom";

import "../styles/pages/landing.css";

import logoImg from "../images/logo.svg";

const Landing = () => {
  return (
    <div id="page-landing">
      <div className="content-wrapper">
        <div className="title">
          <img src={logoImg} alt="logo" />
          <h1>Socialize</h1>
        </div>

        <main>
          <h1>Leve Felicidade para o mundo</h1>
          <p>Visite asilos e mude o dia de muitos velhinhos.</p>
        </main>

        <div className="location">
          <strong>Goiânia</strong>
          <span>Goiás</span>
        </div>

        <Link to="/map" className="enter-app">
          {<FiArrowRight size={26} color="rgba(0,0,0,0.6)" />}
        </Link>
      </div>
    </div>
  );
};

export default Landing;
