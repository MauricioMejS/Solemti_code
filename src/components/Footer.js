import React from "react";
import "../styles/Footer.scss";

export default function Footer() {
  return (
    <div>
      <div className="footer-container">
        <div className="footer-information">
          <text className="footer-title">
            Nuestro fundador, el Ing. Manuel J. Clouthier
          </text>
          <text className="footer-subtitle">
            as La calidad para nosotros es sinónimo de Confianza. Nuestro socio
            fundador Don Manuel J. Clouthier Del Rincón (Maquío) decía, "La
            Confianza no se pide; se da y se gana". Por eso en IMPULSA nos
            apegamos con pasión a la honestidad, al compromiso y la seriedad con
            la que cada dia tratamos a cada uno de nuestros clientes,
            proveedores, empleados y socios.
          </text>
        </div>
      </div>

      <div className="footer-bottom">
        <text>
          Espacio Barcelona Residencial (c) Todos los derechos reservados
          Consulta nuestras políticas de privacidad.
        </text>
      </div>
    </div>
  );
}
