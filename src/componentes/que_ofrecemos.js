import React from "react";
import Obj_ofrecemos from "../componentes_heredados/obj_ofrecemos";

const Obj_ofrecemosdata = [
  {
    id: "1",
    h3: "Sitios web",
    texto: "El servicio de creación de paginas web dinámicas que mejor se adapta a su negocio y sus necesidades",
    texto_boton: "Leer más",

  },
  {
    id: "2",
    h3: "Blogs",
    texto: "Un blog que mejor exponga sus ideas y de seguimiento a esos subscriptores, que esperan ese contenido",
    texto_boton: "Leer más",

  },
  {
    id: "3",
    h3: "Donde alojar",
    texto: "Le ayudamos a encontrar un servicio de hosting y dominio, con compañias líderes en este sector",
    texto_boton: "Leer más",
  },
]

export default function Que_ofrecemos() {
  return (
  <div>
    <h1 id="encabezado">Que ofrecemos?</h1>
      <div className="Que_ofrecemos">
        {
          Obj_ofrecemosdata.map((obj_ofrecemos) =>
            <Obj_ofrecemos key={obj_ofrecemos.id} h3={obj_ofrecemos.h3} texto={obj_ofrecemos.texto} texto_boton={obj_ofrecemos.texto_boton} />)
        }



        {/* <div className="blogs">

          <h3>Blogs</h3>
          <p></p>
          <a href="google.com" className="leermas" >Leer más</a>
        </div>

        <div className="alojamiento">

          <h3>Donde alojar</h3>
          <p></p>
          <a href="google.com" className="leermas">Leer más</a>
        </div> */}
        </div >
      </div>
  
      )
}