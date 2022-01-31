import './App.css';



function App() {
  return (
    <>

      {/* //Header */}

      <header id="cabecera">
        <nav id="menu">
          <ul>
            <li><a href="Webs-Seller.html" > Inicio</a></li>
            <li><a href="Que-ofrecemos.html" >Que ofrecemos</a></li>
            <li><a href=" Quienes-somos.html" >Quienes somos</a></li>
            <li><a href=" Portafolio.html" >Portafolio</a></li>
            <li><a href="Adquirir%20Web.html" >Adquirir un sitio web</a></li>
            <li><a href=" Contactenos.html">Contactenos</a></li>
            <a href="http://www.facebook.com"><img width="16px" height="16px" src="iconos/banderda de españa.png" alt="{texto del alt}"></img></a>
            <a href="http://www.facebook.com"><img width="16px" height="16px" src="iconos/bandera de reino unido.png" alt="{texto del alt}"></img></a>
          </ul>
        </nav>
      </header>



      {/* // Que ofrecemos */}
      <h1 id="encabezado">Que ofrecemos</h1>

      <div className="Que_ofrecemos">

        <div className="servicios">

          <h3>Sitios Web</h3>
          <p>El servicio de creación de paginas web dinámicas que mejor se adapta a su negocio y sus necesidades</p>
          <a href="google.com" className="leermas" >Leer más</a>
        </div>

        <div className="blogs">

          <h3>Blogs</h3>
          <p>Un blog que mejor exponga sus ideas y de seguimiento a esos subscriptores, que esperan ansiosos ese contenido </p>
          <a href="google.com" className="leermas" >Leer más</a>
        </div>

        <div className="alojamiento">

          <h3>Donde alojar</h3>
          <p>Le ayudamos a encontrar un servicio de hosting y dominio, con compañias líderes en este sector</p>
          <a href="google.com" className="leermas">Leer más</a>
        </div>

      </div>

      {/* //Descripcion de los servicios, que incluyen */}

      <div id="servicios_ofrecidos_XL">

        <h2>Qué incluyen nuestros servicios</h2>
        <h3>Somos un grupo de desarrolladores web creado para dar publicidad a tu marca, donde quieras que estes</h3>

        <div id="servicios_ofrecidos">

          <div id="seo">
            <h3>SEO on Page</h3>
            <p>Con esto aumentaremos la visualización en motores de búsqueda como google, para que su acceso sea mas fácil y encuentren
              su web por diferentes vías.</p>
            <a href="google.com" className="leermas">Leer más</a>
          </div>

          <div id="marqueting">
            <h3>Estrategias de marqueting</h3>
            <p>Una estrategia de mercadeo es la creacion de acciones o tacticas que lleven al objetivo fundamental de incrementar
              las ventas y lograr una ventaja competitiva sostenible.</p>
            <a href="google.com" className="leermas">Leer más</a>
          </div>


          <div id="multilenguaje">
            <h3>Multilenguaje</h3>
            <p>Un sitio web multilenguaje, impacta a la vez a miles de personas en todo el mundo y hace crecer su negocio a
              traves de internet teniendo la posibilidad de captar mas clientes
            </p>
            <a href="google.com" className="leermas">Leer más</a>
          </div>

          <div id="alojamiento_web">
            <h3>Alojamiento Web</h3>
            <p>El alojamiento web es un servicio que te permite publicar un sitio web. Basicamente alquilas un espacio en un servidor, donde almacenar la información.</p>
            <a href="google.com" className="leermas">Leer más</a>
          </div>

        </div>

      </div>

      {/* Tipos de sitios web o topicos con los que trabajamos  */}
      <h2> Algunos de los temas con que trabajamos:</h2>
      <div id="temas_webs">

        <div className="caja1 ">
          <article id="salud ">
            <img src="https://img.icons8.com/fluency/48/000000/web-shield.png" />
            <h2> Salud</h2>
            <p>Incluye páginas web de hospitales, centros de salud, clínicas o alguna especialidad que este realcionada al cuidado de la salud.</p>
          </article>
          <article id="bar ">
            <img src="https://img.icons8.com/fluency/48/000000/web-shield.png" />
            <h2>Bares</h2>
            <p>Apartados visuales sobre bares de diferentes tipos como bares de deportes, clubs de noch, discotecas o fiestas</p>
          </article>
          <article id="influencer ">
            <img src="https://img.icons8.com/fluency/48/000000/web-shield.png" />
            <h2>Influencer</h2>
            <p>Para personas que esten inmersos con el mundo con el mundo de las redes sociales, donde exponen sus intereses personales</p>
          </article>
        </div>

        <div className="caja2 ">

          <article>
            <img src="https://img.icons8.com/fluency/48/000000/web-shield.png" />
            <h2>Alimentos</h2>
            <p>Restaurantes de alta cocina, baja o media donde la diferencia es marcada por el estilo del local
            </p>
          </article>
          <article>
            <img src="https://img.icons8.com/fluency/48/000000/web-shield.png" />
            <h2>Automóviles</h2>
            <p>Escuelas de conducción, renta, venta de autos, talleres, negocios grandes o pequeños seran vistos por cientos de clientes</p>
          </article>

          <article>
            <img src="https://img.icons8.com/fluency/48/000000/web-shield.png" />
            <h2>Mascotas</h2>
            <p>
              Un sitio web donde se pueda apreciar el cuidado animal desde un centro de cuidado de animales o veterinaio.
            </p>
          </article>
        </div>

        <div className="caja3 ">
          <article>
            <img src="https://img.icons8.com/fluency/48/000000/web-shield.png" />
            <h2>Informático</h2>
            <p>
              Un sitio web enfocado a la venta, distribución o información del increible mundo de la tecnología.
            </p>
          </article>

          <article>
            <img src="https://img.icons8.com/fluency/48/000000/web-shield.png" />
            <h2>Fitness</h2>
            <p>
              Un sitio que dispondrá de todo lo relacionado con el tema fitness, venta de productos o un gimnasio y susu servicios.
            </p>
          </article>

          <article>
            <img src="https://img.icons8.com/fluency/48/000000/web-shield.png" />
            <h2>Negocios</h2>
            <p>
              La categoría mas amplia donde encontrara el sitio web ideal que más se adapte a su negocio.
            </p>
          </article>
        </div>
      </div>

      {/* Planes de desarrollo */}

      <h2>Nuestros planes de desarrollo</h2>
      <div id="planes_de_desarrollo">

        <article id="basico">
          <h3>Básico</h3>
          <p> $499.99 <small>15-20 días</small> </p>
          <p>  Hasta 10 páginas <br /> Redes sociales <br /> Optimisación SEO </p>
            <a href="asd.com "> Más información del plan </a>
        </article>

        <article id="baja-inversion">

          <h3>Baja inversión</h3>
          <p> $649.99 <small>15-20 días</small> </p>
          <p> Hasta 15 paginas <br /> Redes sociales <br /> Localización en Google Maps</p>
          <a href="asd.com "> Más información del plan </a>

        </article>

        <article id="profesional">
          <h3>Profesional </h3>
          <p> $899.99 <small>15-20 días</small> </p>
          <p>Secciones indefinidas <br /> Redes sociales <br /> Hasta 2 idiomas</p>
          <a href="asd.com "> Más información del plan </a>

        </article>

        <article id="de-lujo">
          <h3>De Lujo </h3>
          <p> $1099.99 <small>15-20 días</small> </p>
          <p>
            El mejor <br /> Sitio Web creado <br /> por nosotros
          </p>
          <a href="asd.com "> Más información del plan </a>

        </article>

      </div>


      {/* Portafolio */}


      <h2>Portafolio</h2>
      <h3>Proyectos mas recientes</h3>
      
      <div className="portafolio">
        

        <article>
          <img className='proyecto1' src="/imagenes/WS.jpg"></img>
          <p> Websseller.com <br /> BY websseller - Categoria: Creacion de sitios web, Software </p>
        </article>

        <article>
          <img className='proyecto2' src="/imagenes/WS.jpg"></img>
          <p> Websseller.com <br /> BY websseller - Categoria: Creacion de sitios web, Software </p>
        </article>

        <article>
          <img className='proyecto3' src="/imagenes/WS.jpg"></img>
          <p> Websseller.com <br /> BY websseller - Categoria: Creacion de sitios web, Software </p>
        </article>

      </div>


      <div id="banner_tecnologias ">
      <img className="proyecto3" src="/imagenes/ssl-encryption.png"></img>
      <img className='proyecto3' src="/imagenes/ssl-encryption.png"></img>
      <img className='proyecto3' src="/imagenes/ssl-encryption.png"></img>
      </div>

      <div id="consultas_gratis">
        <h2> Realizamos consultas gratis para debatir ideas sobre su sitio web que tiene en mente</h2>
        <h3> En que aspectos hacer enfasis para mejorar resultados, mostrarnos resultados antes de recibir pagos y vistas previas, de la visualizacion de su sitio. </h3>
        <button className="bt1"> Contactenos </button>
      </div>

      {/* Footer */}

      {/* Footer css now */}

      <footer id="footer">
        <nav>
          <ul>
            Inicio <br /> Que ofrecemos <br /> Portafolio <br /> Adquiere un sitio web <br /> Quienes somos <br /> Contáctenos
          </ul>
        </nav>

        <p> @Copyright 2021 | Todos los derechos reservados | Powered by <span className="webs ">Webss-Seller</span> </p>
        <a href="http://www.facebook.com "><img height="40px " src="/iconos/icono de instagram.png " alt="{texto del alt}"></img></a>
        <a href="http://www.facebook.com "><img height="40px " src="/iconos/icono de facebook.png " alt="{texto del alt}"></img></a>
      </footer>




    </>

  );
}



export default App;
