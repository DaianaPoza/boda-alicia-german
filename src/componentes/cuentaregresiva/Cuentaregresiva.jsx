import { useEffect, useState } from "react";
import "./CuentaRegresiva.css";

const weddingDate = new Date(
  "2027-01-02T21:00:00-03:00"
).getTime();

function calculateTimeLeft() {
  const difference = weddingDate - Date.now();

  if (difference <= 0) {
    return {
      days: 0,
      hours: 0,
      minutes: 0,
      seconds: 0,
    };
  }

  return {
    days: Math.floor(difference / (1000 * 60 * 60 * 24)),
    hours: Math.floor(
      (difference / (1000 * 60 * 60)) % 24
    ),
    minutes: Math.floor(
      (difference / (1000 * 60)) % 60
    ),
    seconds: Math.floor(
      (difference / 1000) % 60
    ),
  };
}

function formatNumber(number) {
  return String(number).padStart(2, "0");
}

function CuentaRegresiva() {
  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft);

  useEffect(() => {
    const interval = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="countdown">
      <div className="countdown__content">
        <h2 className="countdown__title">
          CUENTA REGRESIVA
        </h2>

        <div className="countdown__items">
          <div className="countdown__item">
            <span className="countdown__number">
              {formatNumber(timeLeft.days)}
            </span>

            <span className="countdown__label">
              DÍAS
            </span>
          </div>

          <span className="countdown__separator"></span>

          <div className="countdown__item">
            <span className="countdown__number">
              {formatNumber(timeLeft.hours)}
            </span>

            <span className="countdown__label">
              HORAS
            </span>
          </div>

          <span className="countdown__separator"></span>

          <div className="countdown__item">
            <span className="countdown__number">
              {formatNumber(timeLeft.minutes)}
            </span>

            <span className="countdown__label">
              MINUTOS
            </span>
          </div>

          <span className="countdown__separator"></span>

          <div className="countdown__item">
            <span className="countdown__number">
              {formatNumber(timeLeft.seconds)}
            </span>

            <span className="countdown__label">
              SEGUNDOS
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default CuentaRegresiva;