import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer__content">
        <p className="footer__names">
          Alicia <span>&</span> Germán
        </p>

        <div className="footer__line"></div>

        <p className="footer__phrase">
        Nos vemos para compartir una noche inolvidable
        </p>

        <p className="footer__date">
          02 · 01 · 2027
        </p>
      </div>
    </footer>
  );
}

export default Footer;