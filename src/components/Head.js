import React from "react";
import Form from "./Form";
import "../styles/Head.scss";
import Phone from "../images/LayerPhone.png";

export default function Head() {
  return (
    <div className="head-container">
      <div className="head-container__column">
        <div className="head-logo">
          <text>ESPACIO BARCELONA</text>
          <text className="head-sublogo">RESIDENCIAL</text>
        </div>

        <div className="head-title">
          <text style={{ fontSize: "75px" }}>ESPACIO</text>
          <text style={{ fontSize: "52px" }}>BARCELONA</text>

          <text style={{ fontSize: "23.2px", paddingBottom: "30px" }}>
            RECIDENCIAL EN CULIACAN
          </text>

          <text style={{ fontSize: "16.0px" }}>
            Encuentra la casa de tus sueños en Culiacan, llena nuestro
            formulario de contacto
          </text>
        </div>
      </div>
      <div
        className="head-container__column active"
        style={{
          backgroundImage: `url(${Phone})`,
          backgroundPositionX: "center",
          backgroundPositionY: "revert",
        }}
      >
        <div
          style={{
            width: "257px",
            height: "449px",
            position: "absolute",
            top: "93px",
            transform: `translateX(-50px)`,
          }}
        >
          <Form />
        </div>
      </div>
    </div>
  );
}
