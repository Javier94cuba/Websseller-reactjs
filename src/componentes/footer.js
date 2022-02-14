import React from "react";

export default function Footer() {
  return (
    <footer id="footer">
      <nav>
        <ul>
          Inicio &nbsp;&nbsp;&nbsp; Que ofrecemos &nbsp;&nbsp;&nbsp; Portafolio
          &nbsp;&nbsp;&nbsp; Adquiere un sitio web &nbsp;&nbsp;&nbsp; Quienes
          somos &nbsp;&nbsp;&nbsp; Contáctenos
        </ul>
      </nav>

      <p>
        {" "}
        @Copyright 2021 | Todos los derechos reservados | Powered by{" "}
        <span className="webs ">Webss-Seller</span>{" "}
      </p>
      <a href="http://www.facebook.com ">
        <img
          height="30px "
          src="/iconos/icono de instagram.png "
          alt="{texto del alt}"
        ></img>
      </a>
      <a href="http://www.facebook.com ">
        <img
          height="30px "
          src="/iconos/icono de facebook.png "
          alt="{texto del alt}"
        ></img>
      </a>
    </footer>
  );
}
