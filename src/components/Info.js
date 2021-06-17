import React from "react";
import "../styles/Info.scss";
import Layer from "../images/Layer2.png";

export default function Info() {
  return (
    <div className="info-container">
      <div className="info-container__column">
        <text className="info-title">
          Conoce los modelis de nuestras casas en venta
        </text>
        <text style={{ paddingLeft: "100px" }} className="info-subtitle">
          Modelo Catalán
        </text>
        <div className="info-details">
          <text>Terreno 9.00m x 17.50m</text>
          <text>Construcción 164.77 m2</text>
          <text>3 recámaras</text>
          <text>2 1/2 baños</text>
          <text>Sala, comedor, cocina, Sala TV</text>
          <text>Vestidor y Terraza</text>
          <text>Patio y cuarto de lavado</text>
          <text>Cochera techada para 2 autos</text>
        </div>
        <div className="info-button">
          <text className="info-subtitle">Modelo Mallorca</text>
        </div>
      </div>
      <div style={{display: "flex",width: "50%", marginBottom:"30px"}}>
        <div
          style={{
            display: "flex",
            alignContent: "center",
            flexDirection: "column",
            justifyContent: "center",
            width: "100%",
            alignItems: "center"
          }}
        >
          <img src={Layer} alt="" style={{ maxWidth: "350px" }} />
        </div>
      </div>
    </div>
  );
}
