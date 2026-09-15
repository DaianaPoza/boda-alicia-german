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
    Alicia <span>y</span> German
  </p>

  <p className="footer__date">
    02 · 01 · 2027
  </p>

  <p className="footer__phrase">
    Celebramos la familia que construimos
  </p>
</div>
    </footer>
  );
}

export default Footer;