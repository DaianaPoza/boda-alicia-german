import "./Datos.css";

function WeddingDate() {
  return (
    <section className="wedding-date">
      <div className="wedding-date__content">
        <h2 className="wedding-date__title">
          ¿Cuándo?
        </h2>

        <p className="wedding-date__date">
          02 de Enero 2027
        </p>

        <div className="wedding-date__detail">
          <span className="wedding-date__line"></span>

          <p className="wedding-date__time">
            21:00 hs
          </p>

          <span className="wedding-date__line"></span>
        </div>

        <p className="wedding-date__message">
          Queremos compartir con vos una noche muy especial
        </p>
      </div>
    </section>
  );
}

export default WeddingDate;