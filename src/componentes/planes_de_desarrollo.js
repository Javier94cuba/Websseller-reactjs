import React from "react";
import "./planes_de_desarrollo.css";
import Obj_planes from "../componentes_heredados/obj_planes";

const obj_planes = [
  {
    id: "1",
    h1: "Básico",
    price: "$499",
    cents: "99",
    days: "15-20 días",
    sec1: "Hasta 10 páginas",
    sec2: "Redes sociales",
    sec3: "Optimisación SEO",
    leer: "Mas informacion",
    class: "boton_basico",
    article: "basico",
  },

  {
    id: "2",
    h1: "Baja inversión",
    price: "$649",
    cents: "99",
    days: "15-20 días",
    sec1: "Hasta 15 paginas",
    sec2: "Redes sociales",
    sec3: "Localización en Google Maps",
    leer: "Mas informacion",
    class: "boton_basico",
    article: "baja-inversion",
  },

  {
    id: "3",
    h1: "Profesional",
    price: "$899",
    cents: "99",
    days: "15-20 días",
    sec1: "Secciones indefinidas ",
    sec2: "Redes sociales",
    sec3: "Hasta 2 idiomas",
    leer: "Mejor oferta",
    class: "boton_profesional",
    article: "profesional",
  },

  {
    id: "4",
    h1: "De Lujo",
    price: "$1099",
    cents: "99",
    days: "15-20 días",
    sec1: "El mejor",
    sec2: "Sitio Web creado",
    sec3: "por nosotros",
    leer: "Mas informacion",
    class: "boton_basico",
    article: "de-lujo",
  },
];

export default function Planes_de_desarrollo() {
  return (
    <div>
      <h2 className="planes_desarrollo_xl">Nuestros planes de desarrollo</h2>

      <div id="planes_de_desarrollo">
        {obj_planes.map((props) => (
          <Obj_planes
            key={props.id}
            h1={props.h1}
            price={props.price}
            cents={props.cents}
            days={props.days}
            sec1={props.sec1}
            sec2={props.sec2}
            sec3={props.sec3}
            leer={props.leer}
            class={props.class}
            article={props.article}
          />
        ))}
      </div>
    </div>
  );
}
