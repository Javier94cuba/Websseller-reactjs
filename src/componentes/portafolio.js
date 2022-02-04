import React from "react";
import Obj_Portafolio from "../componentes_heredados/obj_portafolio";

const obj_portafolio = [
  {
    id: "1",
    image: "portafolio1",
    nombre: "websseller.com",
    info: "BY websseller - Categoria: Creacion de sitios web, Software",
  },
  {
    id: "2",
    image: "portafolio2",
    nombre: "clinicasHispanas.com",
    info: "BY websseller - Categoria: Clinicas, servicios medicos",
  },
  {
    id: "3",
    image: "portafolio3",
    nombre: "havanahousesportsbar.com",
    info: "BY websseller - Categoria: Bar de deportes, bares",
  }
]

export default function Portafolio() {
  return (
    <div>
      <h1>Portafolio</h1>
      <h3>Proyectos mas recientes</h3>

      <div className="portafolio">
        {
        obj_portafolio.map((props) => <Obj_Portafolio key={props.id} image={props.image} nombre={props.nombre} info={props.info} />)
        }
        
      </div>
      <button className="proyecto_reciente">Proyectos recientes</button>
    </div>
  )
}