import "./InvitationDetails.css";
import Hero from "../hero/Hero.jsx";
import WeddingDate from "../datos/Datos.jsx";
import CuentaRegresiva from "../cuentaregresiva/Cuentaregresiva.jsx";
import Ubicacion from "../ubicacion/Ubicacion.jsx";
import Dresscode from "../dresscode/Dresscode.jsx";
import Confirmacion from "../confirmacion/Confirmacion.jsx";
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
      <Ubicacion />
      <Dresscode />
      <Confirmacion />
    </main>
  );
}

export default InvitationDetails;