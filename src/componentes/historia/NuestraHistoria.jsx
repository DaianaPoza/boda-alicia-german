import { useEffect, useRef } from "react";

import historiaInicio from "../../assets/historia-inicio.png";
import historiaCamino from "../../assets/historia-camino.png";

import "./NuestraHistoria.css";

function NuestraHistoria() {
  const sceneRefs = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;

          entry.target.classList.add(
            "story__scene--visible"
          );

          observer.unobserve(entry.target);
        });
      },
      {
        threshold: 0.15,
        rootMargin: "0px 0px -5% 0px",
      }
    );

    const scenes = sceneRefs.current;

    scenes.forEach((scene) => {
      if (scene) {
        observer.observe(scene);
      }
    });

    return () => {
      scenes.forEach((scene) => {
        if (scene) {
          observer.unobserve(scene);
        }
      });

      observer.disconnect();
    };
  }, []);

  return (
    <section
      className="story"
      aria-label="Nuestra historia"
    >
      {/* Primera fotografía */}

      <article
        className="story__scene"
        ref={(element) => {
          sceneRefs.current[0] = element;
        }}
      >
        <img
          className="story__image story__image--intro"
          src={historiaInicio}
          alt="Alicia y Germán al comienzo de su historia"
          loading="lazy"
        />

        <div
          className="story__overlay story__overlay--intro"
          aria-hidden="true"
        ></div>
      </article>

      {/* Segunda fotografía */}

      <article
        className="story__scene"
        ref={(element) => {
          sceneRefs.current[1] = element;
        }}
      >
        <img
          className="story__image story__image--phrase"
          src={historiaCamino}
          alt="Alicia y Germán compartiendo un momento juntos"
          loading="lazy"
        />

        <div
          className="story__overlay story__overlay--phrase"
          aria-hidden="true"
        ></div>
      </article>
    </section>
  );
}

export default NuestraHistoria;