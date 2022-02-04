import './App.css';
import React from 'react';
import Header from './componentes/header';
import Que_ofrecemos from './componentes/que_ofrecemos';
import Servicios_ofrecidos from './componentes/servicios_ofrecidos';
import Topicos from './componentes/topicos';
import Planes_de_desarrollo from './componentes/planes_de_desarrollo';
import Portafolio from './componentes/portafolio';
import Banner_tecnologias from './componentes/banner_tecnologias';
import Consultas_gratis from './componentes/consultas_gratis';
import Footer from './componentes/footer';

export default function App() {
  return (
    <>
      <Header />
      <Que_ofrecemos />
      <Servicios_ofrecidos />
      <Topicos />
      <Planes_de_desarrollo />
      <Portafolio />
      <Banner_tecnologias />
      <Consultas_gratis />
      <Footer />
    </>

  );
}




