import anillosPortada from "../assets/anillos-portada.png";
import "./Cover.css";

function Cover({ onEnter }) {
  return (
    <main className="cover">
      <div className="cover__content">
        <h1 className="cover__names">
          Alicia <span>y</span> German
        </h1>

        <img
          className="cover__rings"
          src={anillosPortada}
          alt=""
          aria-hidden="true"
        />

        <p className="cover__phrase">
          El amor nos unió, <br /> la vida nos hizo familia <br />y queremos celebrar nuestra historia <br />junto a quienes son parte de ella
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