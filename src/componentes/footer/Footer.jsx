import footerFamilia from "../../assets/imagen-footer.png";

import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <img
        className="footer__background"
        src={footerFamilia}
        alt=""
        aria-hidden="true"
      />

      <div
        className="footer__overlay"
        aria-hidden="true"
      ></div>

      <div className="footer__content">
        <p className="footer__names">
          Alicia <span>&</span> German
        </p>

        <div className="footer__line"></div>

        <p className="footer__phrase">
          Nos vemos para compartir una noche
          inolvidable
        </p>

        <p className="footer__date">
          02 · 01 · 2027
        </p>
      </div>
    </footer>
  );
}

export default Footer;