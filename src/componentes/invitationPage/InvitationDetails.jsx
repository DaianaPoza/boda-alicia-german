import "./InvitationDetails.css";

import historiaInicio from "../../assets/historia-inicio.png";
import historiaCamino from "../../assets/historia-camino.png";

import Hero from "../hero/Hero.jsx";
import WeddingDate from "../datos/Datos.jsx";
import CuentaRegresiva from "../cuentaregresiva/Cuentaregresiva.jsx";
import NuestraHistoria from "../historia/NuestraHistoria.jsx";
import Ubicacion from "../ubicacion/Ubicacion.jsx";
import Dresscode from "../dresscode/Dresscode.jsx";
import Confirmacion from "../confirmacion/Confirmacion.jsx";
import Footer from "../footer/Footer.jsx";
import Momentos from "../momentos/Momentos.jsx";

import useScrollReveal from "./useScrollReveal";

function InvitationDetails() {
  const invitationRef = useScrollReveal();

  return (
    <main
      ref={invitationRef}
      className="invitation"
    >
      <Hero />

      <WeddingDate />

      <CuentaRegresiva />

      <Momentos />

      <Ubicacion />

      <NuestraHistoria
      />

      <Dresscode />

     

      <Confirmacion />

      <Footer />
    </main>
  );
}

export default InvitationDetails;