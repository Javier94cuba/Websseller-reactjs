import React from "react";

export default function Obj_ofrecemos(props) {
  return (
    <div className="servicios">
      <h3>{props.h3}</h3>
      <p>{props.texto}</p>
      <a href="google.com" className="leermas">
        {props.texto_boton}
      </a>
    </div>
  );
}
