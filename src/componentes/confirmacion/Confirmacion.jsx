import { useState } from "react";

import { supabase } from "../../lib/supabase.js";

import "./Confirmacion.css";

const EVENTO_SLUG = "boda-alicia-german";

const opcionesCantidad = Array.from(
  { length: 10 },
  (_, index) => index + 1
);

function Confirmacion() {
  const [nombre, setNombre] = useState("");
  const [asiste, setAsiste] = useState("");
  const [cantidad, setCantidad] = useState(1);

  const [mensaje, setMensaje] = useState("");
  const [tipoMensaje, setTipoMensaje] =
    useState("");

  const [enviando, setEnviando] = useState(false);

  const handleAsistencia = (respuesta) => {
    setAsiste(respuesta);
    setMensaje("");
    setTipoMensaje("");

    if (respuesta === "no") {
      setCantidad(1);
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const nombreLimpio = nombre.trim();

    if (!nombreLimpio || !asiste) {
      setMensaje(
        "Completá tu nombre y seleccioná una opción."
      );
      setTipoMensaje("error");

      return;
    }

    const cantidadFinal =
      asiste === "si" ? Number(cantidad) : 0;

    if (
      asiste === "si" &&
      (
        !Number.isInteger(cantidadFinal) ||
        cantidadFinal < 1 ||
        cantidadFinal > 10
      )
    ) {
      setMensaje(
        "Seleccioná una cantidad válida de invitados."
      );
      setTipoMensaje("error");

      return;
    }

    setEnviando(true);
    setMensaje("");
    setTipoMensaje("");

    const { error } = await supabase
      .from("confirmaciones")
      .insert([
        {
          evento: EVENTO_SLUG,
          nombre_apellido: nombreLimpio,
          asiste: asiste === "si",
          cantidad_invitados: cantidadFinal,
          restriccion_alimentaria: null,
        },
      ]);

    if (error) {
      console.error(
        "Error al guardar la confirmación:",
        error
      );

      setMensaje(
        "No pudimos registrar tu respuesta. Intentá nuevamente."
      );
      setTipoMensaje("error");
      setEnviando(false);

      return;
    }

    setMensaje(
      "¡Gracias! Tu respuesta fue registrada."
    );
    setTipoMensaje("success");

    setNombre("");
    setAsiste("");
    setCantidad(1);
    setEnviando(false);
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
          aria-busy={enviando}
        >
          <label className="confirmation__field">
            <span>Nombre y apellido</span>

            <input
              type="text"
              value={nombre}
              onChange={(event) => {
                setNombre(event.target.value);
                setMensaje("");
                setTipoMensaje("");
              }}
              placeholder="Escribí tu nombre completo"
              autoComplete="name"
              disabled={enviando}
              required
            />
          </label>

          <fieldset
            className="confirmation__group"
            disabled={enviando}
          >
            <legend className="confirmation__question">
              ¿Vas a asistir?
            </legend>

            <div className="confirmation__options">
              <label className="confirmation__option">
                <input
                  type="radio"
                  name="asiste"
                  value="si"
                  checked={asiste === "si"}
                  onChange={() =>
                    handleAsistencia("si")
                  }
                  required
                />

                <span>Sí, voy a asistir</span>
              </label>

              <label className="confirmation__option">
                <input
                  type="radio"
                  name="asiste"
                  value="no"
                  checked={asiste === "no"}
                  onChange={() =>
                    handleAsistencia("no")
                  }
                  required
                />

                <span>No podré asistir</span>
              </label>
            </div>
          </fieldset>

          {asiste === "si" && (
            <label className="confirmation__field">
              <span>Cantidad de invitados</span>

              <select
                className="confirmation__select"
                value={cantidad}
                onChange={(event) =>
                  setCantidad(
                    Number(event.target.value)
                  )
                }
                disabled={enviando}
                required
              >
                {opcionesCantidad.map((numero) => (
                  <option
                    value={numero}
                    key={numero}
                  >
                    {numero}
                  </option>
                ))}
              </select>
            </label>
          )}

          <button
            className="confirmation__button"
            type="submit"
            disabled={enviando}
          >
            {enviando
              ? "Enviando..."
              : "Enviar confirmación"}
          </button>

          {mensaje && (
            <p
              className={`confirmation__message confirmation__message--${tipoMensaje}`}
              role={
                tipoMensaje === "error"
                  ? "alert"
                  : "status"
              }
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