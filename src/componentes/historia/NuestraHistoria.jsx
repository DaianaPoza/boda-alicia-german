import { useEffect, useState } from "react";

import historiaInicio from "../../assets/historia-inicio.png";
import historiaCamino from "../../assets/historia-camino.png";

import "./NuestraHistoria.css";

const fotografias = [
  {
    src: historiaInicio,
    alt: "Alicia y German al comienzo de su historia",
  },
  {
    src: historiaCamino,
    alt: "Alicia y German compartiendo un momento juntos",
  },
];

function NuestraHistoria() {
  const [indice, setIndice] = useState(0);
  const [conTransicion, setConTransicion] =
    useState(true);

  /*
    Repetimos la primera fotografía al final
    para que el recorrido automático sea continuo.
  */

  const diapositivas = [
    ...fotografias,
    fotografias[0],
  ];

  useEffect(() => {
    const intervalo = window.setInterval(() => {
      setIndice((actual) => actual + 1);
    }, 3000);

    return () => {
      window.clearInterval(intervalo);
    };
  }, []);

  const avanzar = () => {
    setIndice((actual) => actual + 1);
  };

  const retroceder = () => {
    if (indice === 0) {
      setConTransicion(false);
      setIndice(fotografias.length);

      window.requestAnimationFrame(() => {
        window.requestAnimationFrame(() => {
          setConTransicion(true);
          setIndice(fotografias.length - 1);
        });
      });

      return;
    }

    setIndice((actual) => actual - 1);
  };

  const reiniciarGaleria = () => {
    if (indice !== fotografias.length) return;

    setConTransicion(false);
    setIndice(0);

    window.requestAnimationFrame(() => {
      window.requestAnimationFrame(() => {
        setConTransicion(true);
      });
    });
  };

  return (
    <section
      className="story"
      aria-label="Galería de nuestra historia"
    >
      <div className="story__card">
        <div className="story__controls">
          <button
            className="story__button"
            type="button"
            onClick={retroceder}
            aria-label="Ver fotografía anterior"
          >
            <span aria-hidden="true">←</span>
          </button>

          <button
            className="story__button"
            type="button"
            onClick={avanzar}
            aria-label="Ver fotografía siguiente"
          >
            <span aria-hidden="true">→</span>
          </button>
        </div>

        <div className="story__gallery">
          <div
            className={`story__track ${
              conTransicion
                ? "story__track--animated"
                : ""
            }`}
            style={{
              transform: `translateX(-${
                indice * (100 / diapositivas.length)
              }%)`,
              width: `${diapositivas.length * 100}%`,
            }}
            onTransitionEnd={reiniciarGaleria}
          >
            {diapositivas.map(
              (fotografia, posicion) => (
                <div
                  className="story__slide"
                  style={{
                    width: `${
                      100 / diapositivas.length
                    }%`,
                  }}
                  key={`${fotografia.src}-${posicion}`}
                  aria-hidden={
                    posicion !== indice
                  }
                >
                  <img
                    className="story__image"
                    src={fotografia.src}
                    alt={
                      posicion <
                      fotografias.length
                        ? fotografia.alt
                        : ""
                    }
                    loading="lazy"
                  />
                </div>
              )
            )}
          </div>

          <div
            className="story__overlay"
            aria-hidden="true"
          ></div>
        </div>
      </div>
    </section>
  );
}

export default NuestraHistoria;