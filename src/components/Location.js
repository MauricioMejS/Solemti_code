import React from "react";
import "../styles/Location.scss";
import Map from "../images/Mapa.png";

export default function location() {
  return (
    <div className="location-container">
      <div className="location-container__column">
        <text style={{ fontSize: "75px" }}>ESPACIO</text>
        <text style={{ fontSize: "52px" }}>BARCELONA</text>

        <text style={{ fontSize: "22.9px", paddingBottom: "30px" }}>
          RECIDENCIAL EN CULIACAN
        </text>
        <text style={{ paddingBottom: "30px" }}>
          Blvd. José Limón y Av. Las Ramblas Residencial Espacios Barcelona
        </text>

        <div className="location-container__row">
          <text
            style={{ display: "flex", alignItems: "center" }}
            className="indicator"
          >
            click para ver mapa
          </text>
          <div className="map">
            <img src={Map} alt="" />
          </div>
          <text
            style={{ display: "flex", alignItems: "center" }}
            className="indicator"
          >
            click para ver mapa
          </text>
        </div>
      </div>
    </div>
  );
}
