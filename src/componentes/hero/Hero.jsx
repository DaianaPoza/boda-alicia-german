import heroImage from "../../assets/hero.png";
import "./Hero.css";

function Hero() {
  return (
    <section className="hero">
      <img
        className="hero__image"
        src={heroImage}
        alt="Jardín iluminado durante la noche"
      />

      <div className="hero__overlay"></div>

      <div className="hero__content">
        <h1 className="hero__names">
          Alicia <span>&</span> German
        </h1>

        <p className="hero__eyebrow">
          ¡Nos casamos!
        </p>
      </div>
    </section>
  );
}

export default Hero;