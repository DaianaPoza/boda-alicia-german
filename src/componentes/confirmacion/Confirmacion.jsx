import { useState } from "react";
import "./Confirmacion.css";

function Confirmacion() {
  const [nombre, setNombre] = useState("");
  const [asiste, setAsiste] = useState("");
  const [cantidad, setCantidad] = useState(1);
  const [mensaje, setMensaje] = useState("");

  const handleAsistencia = (respuesta) => {
    setAsiste(respuesta);
    setMensaje("");

    if (respuesta === "no") {
      setCantidad(1);
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!nombre.trim() || !asiste) {
      setMensaje(
        "Completá tu nombre y seleccioná una opción."
      );
      return;
    }

    setMensaje(
      "¡Gracias! Tu respuesta fue registrada."
    );

    setNombre("");
    setAsiste("");
    setCantidad(1);
  };

  return (
    <section className="confirmation">
      <div className="confirmation__content">
        <h2 className="confirmation__title">
          CONFIRMA TU ASISTENCIA
        </h2>

        <p className="confirmation__intro">
          Esperamos poder compartir esta noche con vos
        </p>

        <form
          className="confirmation__form"
          onSubmit={handleSubmit}
        >
          <label className="confirmation__field">
            <span>Nombre y apellido</span>

            <input
              type="text"
              value={nombre}
              onChange={(event) =>
                setNombre(event.target.value)
              }
              placeholder="Escribí tu nombre completo"
              required
            />
          </label>

          <fieldset className="confirmation__group">
            <legend className="confirmation__question">
              ¿Vas a asistir?
            </legend>

            <div className="confirmation__options">
              <label className="confirmation__option">
                <input
                  type="radio"
                  name="asiste"
                  checked={asiste === "si"}
                  onChange={() =>
                    handleAsistencia("si")
                  }
                />

                <span>Sí, voy a asistir</span>
              </label>

              <label className="confirmation__option">
                <input
                  type="radio"
                  name="asiste"
                  checked={asiste === "no"}
                  onChange={() =>
                    handleAsistencia("no")
                  }
                />

                <span>No podré asistir</span>
              </label>
            </div>
          </fieldset>

          {asiste === "si" && (
            <label className="confirmation__field">
              <span>Cantidad de invitados</span>

              <input
                type="number"
                min="1"
                max="20"
                value={cantidad}
                onChange={(event) =>
                  setCantidad(event.target.value)
                }
                required
              />
            </label>
          )}

          <button
            className="confirmation__button"
            type="submit"
          >
            Enviar confirmación
          </button>

          {mensaje && (
            <p
              className="confirmation__message"
              aria-live="polite"
            >
              {mensaje}
            </p>
          )}
        </form>
      </div>
    </section>
  );
}

export default Confirmacion;