import React from "react";
import "../styles/Details.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faQuoteLeft } from "@fortawesome/free-solid-svg-icons";

export default function Details() {
  return (
    <div className="details-container">
      <div className="details-container__row">
        <div className="details-container__column" style={{lineHeight: "1.2"}}>
          <FontAwesomeIcon icon={faQuoteLeft} style={{ fontSize: "25px", margin: "20px" }} />
          <text style={{ fontSize: "25px", maxWidth: "640px" }}>
            Los aspectos que nos distinguen de otras empresas constructoras en
            culiacan que te benefician a ti.
          </text>
        </div>
      </div>
      <div className="details-container__row">
        <div className="details-container__column cards">
          <div
            className="details-container__column"
            style={{ backgroundColor: "#ffffff", color: "#000000", boxShadow: `30px 32px 34px rgba(0, 0, 0, 0.133714`}}
          >
            <text>•</text>
            <text className="card-title">Tranquilidad</text>
            <text>
              Encuentra el ambiente ideal para vivir de una manera cómoda y
              relajada con tu familia.
            </text>
          </div>
          <div className="details-container__column">
            <text>•</text>
            <text className="card-title">Excelente Ubicación</text>
            <text>
              En una zona donde tendrás acceso a los principales servicios a
              minutos y disfrutarás de la mejor plusvalía.
            </text>
          </div>
        </div>
        <div className="details-container__column cards">
          <div className="details-container__column">
            <text>•</text>
            <text className="card-title">Distintas Amenidades</text>
            <text>
              Encontrarás áreas verdes y comunes que te permitirán disfrutar de
              un ambiente único y familiar.
            </text>
          </div>
          <div
            className="details-container__column"
            style={{ backgroundColor: "#ffffff", color: "#000000" }}
          >
            <text>•</text>
            <text className="card-title">Excelente distribución</text>
            <text>
              Con una excelente distribución de las casas, tendrás una mayor
              privacidad en tu hogar.
            </text>
          </div>
        </div>
        <div className="details-container__column cards">
          <div
            className="details-container__column"
            style={{ backgroundColor: "#ffffff", color: "#000000" }}
          >
            <text>•</text>
            <text className="card-title">Seguridad</text>
            <text>
              Tú y tu familia nunca se sentirán más seguros, ten la confianza de
              vivir tranquilo.
            </text>
          </div>
          <div className="details-container__column">
            <text>•</text>
            <text className="card-title">Calidad Impulsa</text>
            <text>
              Con la garantía de calidad que sólo Impulsa Inmuebles te puede
              ofrecer.
            </text>
          </div>
        </div>
      </div>
    </div>
  );
}
