import {
  PiChampagne,
  PiPenNib,
  PiChurch,
  PiSparkle,
} from "react-icons/pi";

import "./Momentos.css";

const momentos = [
  {
    nombre: "Recepción",
    Icono: PiChampagne,
  },
  {
    nombre: "Ceremonia civil",
    Icono: PiPenNib,
  },
  {
    nombre: "Ceremonia religiosa",
    Icono: PiChurch,
  },
  {
    nombre: "Celebración",
    Icono: PiSparkle,
  },
];

function Momentos() {
  return (
    <section
      className="moments"
      aria-labelledby="moments-title"
    >
      <div className="moments__content">
        <h2
          className="moments__title"
          id="moments-title"
        >
          Momentos del evento
        </h2>

        <div className="moments__timeline">
          <svg
            className="moments__path"
            viewBox="0 0 200 720"
            preserveAspectRatio="none"
            aria-hidden="true"
          >
            <path
              d="
                M 100 0
                C 45 75, 45 130, 100 180
                C 155 230, 155 310, 100 360
                C 45 410, 45 490, 100 540
                C 155 590, 155 650, 100 720
              "
            />
          </svg>

          <ol className="moments__list">
            {momentos.map(
              ({ nombre, Icono }, index) => (
                <li
                  className={`moments__item ${
                    index % 2 === 0
                      ? "moments__item--left"
                      : "moments__item--right"
                  }`}
                  key={nombre}
                >
                  <p className="moments__name">
                    {nombre}
                  </p>

                  <div
                    className="moments__icon"
                    aria-hidden="true"
                  >
                    <Icono />
                  </div>
                </li>
              )
            )}
          </ol>
        </div>

        <div
          className="moments__connector"
          aria-hidden="true"
        >
          <span className="moments__connector-line"></span>
          <span className="moments__connector-diamond"></span>
          <span className="moments__connector-line"></span>
        </div>
      </div>
    </section>
  );
}

export default Momentos;