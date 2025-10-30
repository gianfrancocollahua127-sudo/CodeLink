import { regiones } from "../Data.jsx";

export default function Regiones({ setVista, setRegionSeleccionada }) {
  return (
    <section className="contenedor fade-in">
      <div className="volver-container">
        <button className="btn inicio" onClick={() => setVista("inicio")}>
          🏠 Volver al inicio
        </button>
      </div>

      <h2>Regiones</h2>
      <div className="grid">
        {regiones.map((region, i) => (
          <div
            key={i}
            className="card mostrar fade-in"
            onClick={() => {
              setRegionSeleccionada(region);
              setVista("subregiones");
            }}
          >
            <h3>{region.nombre}</h3>
            <p>Explorá sus subregiones y emprendimientos</p>
          </div>
        ))}
      </div>
    </section>
  );
}
