import React from "react";
import "../styles/Contact.scss";

export default function Contact() {
  return (
    <div className="contact-container">
      <div
        style={{
          width: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <div className="contact-text">
          <text style={{ paddingBottom: "30px", paddingTop: "20px" }}>
            Tu nueva casa en Culiacán, Sinaloa
          </text>
          <text style={{ fontSize: "20px", paddingBottom: "20px" }}>
            ¿Buscas más información de nuestro proyecto? Escríbenos y aclara
            todas tus dudas, estamos para servirte.
          </text>
          <text style={{ fontSize: "20px", paddingBottom: "40px" }}>
            Solicita toda la información de precios, planes de financiamiento y
            más con nosotros.
          </text>
          <button>Contacto</button>
        </div>
      </div>
    </div>
  );
}
