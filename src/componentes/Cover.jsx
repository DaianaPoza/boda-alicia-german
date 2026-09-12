import anillosPortada from "../assets/anillos-portada.png";
import "./Cover.css";

function Cover({ onEnter }) {
  return (
    <main className="cover">
      <div className="cover__content">
        <h1 className="cover__names">
          Alicia <span>&</span> German
        </h1>

        <img
          className="cover__rings"
          src={anillosPortada}
          alt=""
          aria-hidden="true"
        />

        <p className="cover__phrase">
          Empieza una nueva etapa en nuestras vidas.. 
          <br /> y no imaginábamos celebrarla de otra manera que rodeados de las personas que queremos.
        </p>

        <button
          className="cover__button"
          type="button"
          onClick={onEnter}
        >
          ingresar
        </button>
      </div>
    </main>
  );
}

export default Cover;