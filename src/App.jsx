import { useRef, useState } from "react";
import Cover from "./componentes/Cover";
import InvitationDetails from "./componentes/invitationPage/InvitationDetails";
import PanelDemo from "./componentes/panel/PanelDemo";
import "./App.css";

function App() {
  const [isOpen, setIsOpen] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);

  const audioRef = useRef(null);

  const params = new URLSearchParams(
    window.location.search
  );

  const showPanelDemo =
    params.get("panel") === "demo";

  const handleEnter = () => {
    const audio = audioRef.current;

    if (audio) {
      audio.play().catch((error) => {
        console.error(
          "No se pudo reproducir la música:",
          error
        );
      });
    }

    setIsOpen(true);
    window.scrollTo(0, 0);
  };

  const handleMusic = () => {
    const audio = audioRef.current;

    if (!audio) return;

    if (audio.paused) {
      audio.play().catch((error) => {
        console.error(
          "No se pudo reproducir la música:",
          error
        );
      });
    } else {
      audio.pause();
    }
  };

  if (showPanelDemo) {
    return <PanelDemo />;
  }

  return (
    <>
      <audio
        ref={audioRef}
        src={`${import.meta.env.BASE_URL}audio/cancion.mp3`}
        loop
        preload="auto"
        onPlay={() => setIsPlaying(true)}
        onPause={() => setIsPlaying(false)}
      />

      {isOpen ? (
        <>
          <InvitationDetails />

          <button
            className="music-button"
            type="button"
            onClick={handleMusic}
            aria-label={
              isPlaying
                ? "Pausar música"
                : "Reproducir música"
            }
            title={
              isPlaying
                ? "Pausar música"
                : "Reproducir música"
            }
          >
            {isPlaying ? (
              <span
                className="music-button__pause"
                aria-hidden="true"
              >
                <span></span>
                <span></span>
              </span>
            ) : (
              <span
                className="music-button__play"
                aria-hidden="true"
              ></span>
            )}
          </button>
        </>
      ) : (
        <Cover onEnter={handleEnter} />
      )}
    </>
  );
}

export default App;