import anillosPortada from "../assets/anillos-portada.png";
import "./Cover.css";

function Cover({ onEnter }) {
  return (
    <main className="cover">
      <div className="cover__content">
        <h1 className="cover__names">
          Alicia <span>&</span> Germán
        </h1>

        <img
          className="cover__rings"
          src={anillosPortada}
          alt=""
          aria-hidden="true"
        />

        <p className="cover__phrase">
          Celebremos juntos este nuevo comienzo
        </p>

        <button
          className="cover__button"
          type="button"
          onClick={onEnter}
        >
          bienvenidos
        </button>
      </div>
    </main>
  );
}

export default Cover;