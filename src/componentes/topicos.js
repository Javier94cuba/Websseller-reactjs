import React from "react";
import Obj_topicos from "../componentes_heredados/obj_topicos";

const Data1 = [
  {
    id: "1",
    h2: "Salud",
    texto: "Incluye páginas web de hospitales, centros de salud, clínicas o alguna especialidad que este realcionada al cuidado de la salud.",
    image: "https://img.icons8.com/fluency/48/000000/web-shield.png",
  },

  {
    id: "2",
    h2: "Bares",
    texto: "Apartados visuales sobre bares de diferentes tipos como bares de deportes, clubs de noch, discotecas o fiestas",
    image: "https://img.icons8.com/fluency/48/000000/web-shield.png",
  },

  {
    id: "3",
    h2: "Influencer",
    texto: "Para personas que esten inmersos con el mundo con el mundo de las redes sociales, donde exponen sus intereses personales",
    image: "https://img.icons8.com/fluency/48/000000/web-shield.png",
  }

]

const Data2 = [
  {
    id: "1",
    h2: "Alimentos",
    texto: "Restaurantes de alta cocina, baja o media donde la diferencia es marcada por el estilo del local",
    image: "https://img.icons8.com/fluency/48/000000/web-shield.png",
  },
  {
    id: "2",
    h2: "Automóviles",
    texto: "Escuelas de conducción, renta, venta de autos, talleres, negocios grandes o pequeños seran vistos por cientos de clientes",
    image: "https://img.icons8.com/fluency/48/000000/web-shield.png",
  },
  {
    id: "3",
    h2: "Mascotas",
    texto: "Un sitio web donde se pueda apreciar el cuidado animal desde un centro de cuidado de animales o veterinaio.",
    image: "https://img.icons8.com/fluency/48/000000/web-shield.png",
  }
]

const Data3 = [
  {
    id: "1",
    h2: "Informático",
    texto: "Un sitio web enfocado a la venta, distribución o información del increible mundo de la tecnología.",
    image: "https://img.icons8.com/fluency/48/000000/web-shield.png",
  },
  {
    id: "2",
    h2: "Fitness",
    texto: "Un sitio que dispondrá de todo lo relacionado con el tema fitness, venta de productos o un gimnasio y susu servicios.",
    image: "https://img.icons8.com/fluency/48/000000/web-shield.png",
  },
  {
    id: "3",
    h2: "Negocios",
    texto: "La categoría mas amplia donde encontrara el sitio web ideal que más se adapte a su negocio.",
    image: "https://img.icons8.com/fluency/48/000000/web-shield.png",
  }

]

export default function Topicos() {
  return (
    <div>
      <h2 className="temas_trabajados"> Algunos de los temas con que trabajamos:</h2>

      <div id="temas_webs">

        <div className="caja1 ">
          {
            Data1.map((props) => <Obj_topicos key={props.id} id={props.id} h2={props.h2} texto={props.texto} image={props.image} />)
          }

        </div>

        <div className="caja2 ">
          {
            Data2.map((props) => <Obj_topicos key={props.id} id={props.id} h2={props.h2} texto={props.texto} image={props.image} />)
          }

        </div>

        <div className="caja3 ">
          {
            Data3.map((props) => <Obj_topicos key={props.id} id={props.id} h2={props.h2} texto={props.texto} image={props.image} />)
          }
        </div>
      </div>
    </div>
  )
}