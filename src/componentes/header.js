import React from "react";
import "./header.css";

export default function Header() {
  return (
    <header id="cabecera">
      <nav id="menu">
        <ul>
          <li>
            <a href="Webs-Seller.html"> Inicio</a>
          </li>
          <li>
            <a href="Que-ofrecemos.html">Que ofrecemos</a>
          </li>
          <li>
            <a href=" Quienes-somos.html">Quienes somos</a>
          </li>
          <li>
            <a href=" Portafolio.html">Portafolio</a>
          </li>
          <li>
            <a href="Adquirir%20Web.html">Adquirir un sitio web</a>
          </li>
          <li>
            <a href=" Contactenos.html">Contactenos</a>
          </li>
          <a href="http://www.facebook.com">
            <img
              className="spain"
              width="18px"
              height="18px"
              src="iconos/banderda de españa.png"
              alt="{texto del alt}"
            ></img>
          </a>
          <a href="http://www.facebook.com">
            <img
              className="england"
              width="18px"
              height="18px"
              src="iconos/bandera de reino unido.png"
              alt="{texto del alt}"
            ></img>
          </a>
        </ul>
      </nav>

      <div className="header_max">
        <div className="header_estatico">
          <h1>
            {" "}
            SEO, onlyne payment <br />
            methods and others
          </h1>
          <h4>
            Be innovate in your field and earn a clear <br />
            advantage over your competitors, whith an outstanding
            <br />
            website and clear ideas.
          </h4>
          <button className="services_button">Services</button>
          <button className="contact_button">Contact us</button>
        </div>

        <div className="image"></div>
      </div>
    </header>
  );
}
