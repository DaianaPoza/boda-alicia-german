import { useEffect, useState } from "react";

import { supabase } from "../../lib/supabase.js";

import "./PanelDemo.css";

const EVENTO_SLUG = "boda-alicia-german";

function PanelDemo() {
  const [session, setSession] = useState(null);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [confirmaciones, setConfirmaciones] =
    useState([]);

  const [cargandoSesion, setCargandoSesion] =
    useState(true);

  const [cargandoDatos, setCargandoDatos] =
    useState(false);

  const [iniciandoSesion, setIniciandoSesion] =
    useState(false);

  const [mensaje, setMensaje] = useState("");

  useEffect(() => {
    const obtenerSesion = async () => {
      const {
        data: { session: currentSession },
      } = await supabase.auth.getSession();

      setSession(currentSession);
      setCargandoSesion(false);
    };

    obtenerSesion();

    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange(
      (_event, currentSession) => {
        setSession(currentSession);
        setCargandoSesion(false);
      }
    );

    return () => {
      subscription.unsubscribe();
    };
  }, []);

  useEffect(() => {
    if (!session) {
      setConfirmaciones([]);
      return;
    }

    const cargarConfirmaciones = async () => {
      setCargandoDatos(true);
      setMensaje("");

      const { data, error } = await supabase
        .from("confirmaciones")
        .select(
          `
            id,
            nombre_apellido,
            asiste,
            cantidad_invitados,
            created_at
          `
        )
        .eq("evento", EVENTO_SLUG)
        .order("created_at", {
          ascending: false,
        });

      if (error) {
        console.error(
          "Error al cargar confirmaciones:",
          error
        );

        setMensaje(
          "No pudimos cargar las confirmaciones."
        );

        setConfirmaciones([]);
        setCargandoDatos(false);

        return;
      }

      setConfirmaciones(data ?? []);
      setCargandoDatos(false);
    };

    cargarConfirmaciones();
  }, [session]);

  const handleLogin = async (event) => {
    event.preventDefault();

    if (!email.trim() || !password) {
      setMensaje(
        "Ingresá el correo y la contraseña."
      );

      return;
    }

    setIniciandoSesion(true);
    setMensaje("");

    const { error } =
      await supabase.auth.signInWithPassword({
        email: email.trim(),
        password,
      });

    if (error) {
      console.error(
        "Error al iniciar sesión:",
        error
      );

      setMensaje(
        "El correo o la contraseña no son correctos."
      );

      setIniciandoSesion(false);

      return;
    }

    setPassword("");
    setIniciandoSesion(false);
  };

  const handleLogout = async () => {
    setMensaje("");

    const { error } =
      await supabase.auth.signOut();

    if (error) {
      console.error(
        "Error al cerrar sesión:",
        error
      );

      setMensaje(
        "No pudimos cerrar la sesión."
      );
    }
  };

  const descargarLista = () => {
    if (confirmaciones.length === 0) {
      setMensaje(
        "Todavía no hay confirmaciones para descargar."
      );

      return;
    }

    const escaparCelda = (valor) => {
      const texto = String(valor ?? "");

      return `"${texto.replaceAll('"', '""')}"`;
    };

    const encabezados = [
      "Nombre y apellido",
      "Asiste",
      "Cantidad de invitados",
      "Fecha de confirmación",
    ];

    const filas = confirmaciones.map(
      (persona) => [
        persona.nombre_apellido,
        persona.asiste ? "Sí" : "No",
        persona.asiste
          ? persona.cantidad_invitados
          : 0,
        persona.created_at
          ? new Date(
              persona.created_at
            ).toLocaleString("es-AR")
          : "",
      ]
    );

    const contenido = [
      encabezados,
      ...filas,
    ]
      .map((fila) =>
        fila.map(escaparCelda).join(",")
      )
      .join("\n");

    const archivo = new Blob(
      [`\uFEFF${contenido}`],
      {
        type: "text/csv;charset=utf-8;",
      }
    );

    const url = URL.createObjectURL(archivo);
    const enlace = document.createElement("a");

    enlace.href = url;
    enlace.download =
      "confirmaciones-alicia-german.csv";

    document.body.appendChild(enlace);
    enlace.click();
    enlace.remove();

    URL.revokeObjectURL(url);
  };





 const personasAsisten = confirmaciones.reduce(
  (total, persona) => {
    if (!persona.asiste) {
      return total;
    }

    return (
      total +
      Number(persona.cantidad_invitados || 0)
    );
  },
  0
);

const personasNoAsisten = confirmaciones.filter(
  (persona) => !persona.asiste
).length;

const totalPersonas =
  personasAsisten + personasNoAsisten;






  const invitationUrl =
    `${window.location.origin}${window.location.pathname}`;

  if (cargandoSesion) {
    return (
      <main className="panel panel--centered">
        <p className="panel__loading">
          Cargando panel...
        </p>
      </main>
    );
  }

  if (!session) {
    return (
      <main className="panel panel--centered">
        <section className="panel__login">
          <p className="panel__eyebrow">
            Panel de confirmaciones
          </p>

          <h1 className="panel__title">
            Alicia & German
          </h1>

          <p className="panel__login-intro">
            Ingresá con los datos proporcionados
            para consultar las respuestas.
          </p>

          <form
            className="panel__login-form"
            onSubmit={handleLogin}
          >
            <label className="panel__field">
              <span>Correo electrónico</span>

              <input
                type="email"
                value={email}
                onChange={(event) =>
                  setEmail(event.target.value)
                }
                autoComplete="email"
                disabled={iniciandoSesion}
                required
              />
            </label>

            <label className="panel__field">
              <span>Contraseña</span>

              <input
                type="password"
                value={password}
                onChange={(event) =>
                  setPassword(event.target.value)
                }
                autoComplete="current-password"
                disabled={iniciandoSesion}
                required
              />
            </label>

            <button
              className="panel__login-button"
              type="submit"
              disabled={iniciandoSesion}
            >
              {iniciandoSesion
                ? "Ingresando..."
                : "Ingresar"}
            </button>

            {mensaje && (
              <p
                className="panel__message panel__message--error"
                role="alert"
              >
                {mensaje}
              </p>
            )}
          </form>
        </section>
      </main>
    );
  }

  return (
    <main className="panel">
      <div className="panel__container">
        <p className="panel__eyebrow">
          Panel de confirmaciones
        </p>

        <h1 className="panel__title">
          Alicia & German
        </h1>

        <div className="panel__actions">
          <button
            type="button"
            onClick={descargarLista}
          >
            Descargar lista
          </button>

          <a href={invitationUrl}>
            Ver invitación
          </a>

          <button
            type="button"
            onClick={handleLogout}
          >
            Cerrar sesión
          </button>
        </div>

        {mensaje && (
          <p
            className="panel__message panel__message--error"
            role="alert"
          >
            {mensaje}
          </p>
        )}





     <section className="panel__stats">
  <article>
    <span>Total de personas</span>

    <strong>{totalPersonas}</strong>
  </article>

  <article>
    <span>Asisten</span>

    <strong>{personasAsisten}</strong>
  </article>

  <article>
    <span>No asisten</span>

    <strong>{personasNoAsisten}</strong>
  </article>
</section>
         







        <div className="panel__table-container">
          {cargandoDatos ? (
            <p className="panel__loading">
              Cargando confirmaciones...
            </p>
          ) : confirmaciones.length === 0 ? (
            <p className="panel__empty">
              Todavía no hay confirmaciones.
            </p>
          ) : (
            <table className="panel__table">
              <thead>
                <tr>
                  <th>Nombre y apellido</th>
                  <th>Asiste</th>
                  <th>Invitados</th>
                </tr>
              </thead>

              <tbody>
                {confirmaciones.map(
                  (persona) => (
                    <tr key={persona.id}>
                      <td>
                        {persona.nombre_apellido}
                      </td>

                      <td>
                        {persona.asiste
                          ? "Sí"
                          : "No"}
                      </td>

                      <td>
                        {persona.asiste
                          ? persona.cantidad_invitados
                          : "—"}
                      </td>
                    </tr>
                  )
                )}
              </tbody>
            </table>
          )}
        </div>
      </div>
    </main>
  );
}

export default PanelDemo;