import { useEffect, useRef } from "react";

import "./NuestraHistoria.css";

function NuestraHistoria({
  imagen,
  alt,
  variante,
  ariaLabel,
}) {
  const sceneRef = useRef(null);

  useEffect(() => {
    const scene = sceneRef.current;

    if (!scene) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;

        entry.target.classList.add(
          "story__scene--visible"
        );

        observer.unobserve(entry.target);
      },
      {
        threshold: 0.15,
        rootMargin: "0px 0px -5% 0px",
      }
    );

    observer.observe(scene);

    return () => {
      observer.unobserve(scene);
      observer.disconnect();
    };
  }, []);

  return (
    <section
      className={`story story--${variante}`}
      aria-label={ariaLabel}
    >
      <article
        className="story__scene"
        ref={sceneRef}
      >
        <img
          className={`story__image story__image--${variante}`}
          src={imagen}
          alt={alt}
          loading="lazy"
        />

        <div
          className="story__overlay"
          aria-hidden="true"
        ></div>
      </article>
    </section>
  );
}

export default NuestraHistoria;