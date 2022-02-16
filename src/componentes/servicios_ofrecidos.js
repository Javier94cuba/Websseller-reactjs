import React from "react";
import "./servicios_ofrecidos.css";
import Obj_servicios_ofrecidos from "../componentes_heredados/obj_servicios_ofrecidos";

const Obj_data = [
  {
    id: "1",
    h3: "Seo on Page",
    texto:
      "Con esto aumentaremos la visualización en motores de búsqueda como google, para que su acceso sea mas fácil y encuentren su web por diferentes vías.",
    leer: "Leer más",
  },
  {
    id: "2",
    h3: "Marqueting",
    texto:
      "Una estrategia de mercadeo es la creacion de acciones o tacticas que lleven al objetivo fundamental de incrementar las ventas y lograr una ventaja competitiva sostenible.",
    leer: "Leer más",
  },
  {
    id: "3",
    h3: "Multilenguaje",
    texto:
      "Un sitio web multilenguaje, impacta a la vez a miles de personas en todo el mundo y hace crecer su negocio a traves de internet teniendo la posibilidad de captar mas.",
    leer: "Leer más",
  },
  {
    id: "4",
    h3: "Alojamiento web",
    texto:
      "El alojamiento web es un servicio que te permite publicar un sitio web. Basicamente alquilas un espacio en un servidor, donde almacenar la información.",
    leer: "Leer más",
  },
];

export default function Servicios_ofrecidos() {
  return (
    <div id="servicios_ofrecidos_XL">
      <h2>Qué incluyen nuestros servicios?</h2>
      <h3>
        Somos un grupo de desarrolladores web creado para dar publicidad a tu
        marca, donde quieras que estes
      </h3>

      <div id="servicios_ofrecidos">
        {Obj_data.map((props) => (
          <Obj_servicios_ofrecidos
            key={props.id}
            h3={props.h3}
            texto={props.texto}
            leer={[props.leer]}
          />
        ))}
      </div>
    </div>
  );
}
