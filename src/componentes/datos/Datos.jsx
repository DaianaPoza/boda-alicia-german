import "./Datos.css";

function WeddingDate() {
  return (
    <section className="wedding-date">
      <div className="wedding-date__content">
        <h2 className="wedding-date__title">
          ¿CUÁNDO?
        </h2>

        <p className="wedding-date__date">
          02 DE ENERO 2027
        </p>

        <div className="wedding-date__detail">
          <span className="wedding-date__line"></span>

          <p className="wedding-date__time">
            21:00 HS
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