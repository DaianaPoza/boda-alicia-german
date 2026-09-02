import { useRef, useState } from "react";
import Cover from "./componentes/Cover";
import InvitationDetails from "./componentes/invitationPage/InvitationDetails";
import PanelDemo from "./componentes/panel/PanelDemo";
import "./App.css";

function App() {
  const [isOpen, setIsOpen] = useState(false);
  const audioRef = useRef(null);

  const params = new URLSearchParams(
    window.location.search
  );

  const showPanelDemo =
    params.get("panel") === "demo";

  if (showPanelDemo) {
    return <PanelDemo />;
  }

  const handleEnter = () => {
    const playPromise = audioRef.current?.play();

    if (playPromise) {
      playPromise.catch((error) => {
        console.error(
          "No se pudo reproducir la música:",
          error
        );
      });
    }

    setIsOpen(true);
    window.scrollTo(0, 0);
  };

  return (
    <>
      <audio
  ref={audioRef}
  src={`${import.meta.env.BASE_URL}audio/cancion.mp3`}
  loop
  preload="auto"
/>

      {isOpen ? (
        <InvitationDetails />
      ) : (
        <Cover onEnter={handleEnter} />
      )}
    </>
  );
}

export default App;