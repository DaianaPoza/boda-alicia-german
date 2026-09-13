import "./Ubicacion.css";

function Ubicacion() {
  const googleMapsUrl =
    "https://www.google.com/maps/search/?api=1&query=Quincho+Tio+Nene%2C+Ruta+Provincial+3%2C+El+Colorado%2C+Formosa";

  return (
    <section className="location">
      <div className="location__content">
        <h2 className="location__title">
          ¿Dónde?
        </h2>

        <div className="location__detail">
          <span className="location__line"></span>

          <span
            className="location__pin"
            aria-hidden="true"
          >
            ⌖
          </span>

          <span className="location__line"></span>
        </div>

        <h3 className="location__place">
          Quincho Tío Nene
        </h3>

        <address className="location__address">
          El Colorado, Formosa
          <br />
          Ruta Provincial 3
        </address>

        <a
          className="location__button"
          href={googleMapsUrl}
          target="_blank"
          rel="noopener noreferrer"
        >
          Cómo llegar
        </a>
      </div>
    </section>
  );
}

export default Ubicacion;