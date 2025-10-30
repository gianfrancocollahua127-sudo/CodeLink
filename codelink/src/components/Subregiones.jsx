export default function Subregiones({ region, setVista, setSubregionSeleccionada }) {
  return (
    <section className="contenedor fade-in">
      
      <div className="panel-header">
        <button className="btn volver-inicio" onClick={() => setVista("regiones")}>
          ← Volver
        </button>
        <h2>{region.nombre}</h2>
      </div>
      <div className="grid">
        {region.subregiones.map((sub, i) => (
          <div
            key={i}
            className="card mostrar fade-in"
            onClick={() => {
              setSubregionSeleccionada(sub);
              setVista("emprendimientos");
            }}
          >
            <h3>{sub.nombre}</h3>
            <p>Ver emprendimientos</p>
          </div>
        ))}
      </div>
    </section>
  );
}
