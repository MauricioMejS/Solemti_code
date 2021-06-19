import React from "react";
import { Input, Dropdown, Checkbox, Button } from "semantic-ui-react";
import "semantic-ui-css/semantic.min.css";
import "../styles/Form.scss";

export default function Form() {
  const options = [
    { key: 1, text: "Infonavit", value: 1 },
    { key: 2, text: "Bancario", value: 2 },
    { key: 3, text: "Hipotecario", value: 3 },
  ];
  return (
    <div className="form-container">
      <text className="form-title">Casas en Culiacan</text>
      <text>
        Déjanos tu correo electrónico y te enviaremos toda la información
      </text>
      <Input id="Name" placeholder="*Nombre completo" />
      <Input id="Email" placeholder="*Correo electronico" />
      <Input id="Phone" placeholder="Telefono para contactarte" />
      <Dropdown
        id="Credit"
        clearable
        placeholder="¿Cuentas con algún crédito?"
        options={options}
        selection
      />
      <div id="Offers">
        <Checkbox label="Deseo recibir promociones y ofertas" />
      </div>

      <Button id="Send" color="red">
        Enviar Mensaje
      </Button>
    </div>
  );
}
