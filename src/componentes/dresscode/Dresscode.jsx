import "./Dresscode.css";

const colors = [
  { name: "Verde salvia", value: "#a9ad93" },
  { name: "Verde oliva", value: "#686f4d" },
  { name: "Rosa empolvado", value: "#d7aaa5" },
  { name: "Rosa suave", value: "#dfbeb4" },
  { name: "Marfil", value: "#e7ddc8" },
  { name: "Beige arena", value: "#d5bd8f" },
  { name: "Gris cálido", value: "#c8c5bd" },
];

function Dresscode() {
  return (
    <section className="dresscode">
      <div className="dresscode__content">
        <h2 className="dresscode__title">
          Código de vestimenta
        </h2>

       <p className="dresscode__intro">
         No es necesaria la formalidad.
          <br />
          Elegí un look que te haga sentir bien y te permita
          disfrutar de cada momento </p>

        <p className="dresscode__style">
          Estilo:
          <span> natural, elegante y relajado</span>
        </p>




<div className="dresscode__palette">
  <h3 className="dresscode__palette-title">
    Paleta de colores
  </h3>

  <div
    className="dresscode__colors"
    aria-label="Paleta sugerida para la vestimenta"
  >
    {colors.map((color) => (
      <span
        key={color.name}
        className="dresscode__color"
        style={{
          backgroundColor: color.value,
        }}
        title={color.name}
        aria-label={color.name}
      ></span>
    ))}
  </div>

  <p className="dresscode__palette-text">
    Para acompañar la estética de la celebración,
    elegí tu look dentro de esta paleta de colores
  </p>
</div>






      
        

      </div>
    </section>
  );
}

export default Dresscode;