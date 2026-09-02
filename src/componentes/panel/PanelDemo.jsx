import "./PanelDemo.css";

const confirmaciones = [
  {
    id: 1,
    nombre: "María González",
    asiste: true,
    cantidad: 2,
  },
  {
    id: 2,
    nombre: "Juan Fernández",
    asiste: false,
    cantidad: 0,
  },
  {
    id: 3,
    nombre: "Lucía Martínez",
    asiste: true,
    cantidad: 3,
  },
  {
    id: 4,
    nombre: "Carlos Romero",
    asiste: true,
    cantidad: 1,
  },
];

function PanelDemo() {
  const asisten = confirmaciones.filter(
    (persona) => persona.asiste
  ).length;

  const noAsisten = confirmaciones.filter(
    (persona) => !persona.asiste
  ).length;

  const totalInvitados = confirmaciones.reduce(
    (total, persona) => total + persona.cantidad,
    0
  );

  return (
    <main className="panel">
      <div className="panel__container">
        <p className="panel__demo">
          Vista de demostración
        </p>

        <p className="panel__eyebrow">
          Panel de confirmaciones
        </p>

        <h1 className="panel__title">
          Alicia & Germán
        </h1>

        <div className="panel__actions">
          <button type="button" disabled>
            Descargar lista
          </button>

          <a href={window.location.pathname}>
            Ver invitación
          </a>
        </div>

        <section className="panel__stats">
          <article>
            <span>Confirmaciones</span>
            <strong>{confirmaciones.length}</strong>
          </article>

          <article>
            <span>Asisten</span>
            <strong>{asisten}</strong>
          </article>

          <article>
            <span>No asisten</span>
            <strong>{noAsisten}</strong>
          </article>

          <article>
            <span>Total de invitados</span>
            <strong>{totalInvitados}</strong>
          </article>
        </section>

        <div className="panel__table-container">
          <table className="panel__table">
            <thead>
              <tr>
                <th>Nombre y apellido</th>
                <th>Asiste</th>
                <th>Invitados</th>
              </tr>
            </thead>

            <tbody>
              {confirmaciones.map((persona) => (
                <tr key={persona.id}>
                  <td>{persona.nombre}</td>
                  <td>
                    {persona.asiste ? "Sí" : "No"}
                  </td>
                  <td>
                    {persona.asiste
                      ? persona.cantidad
                      : "—"}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <p className="panel__notice">
          Los datos mostrados son ficticios y se utilizan
          únicamente para visualizar el diseño.
        </p>
      </div>
    </main>
  );
}

export default PanelDemo;