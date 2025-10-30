export default function Emprendimientos({ subregion, setVista }) {
  return (
    <section className="contenedor fade-in">
      <div className="volver-container">
        <button className="btn volver" onClick={() => setVista("subregiones")}>
          ← Volver a subregiones
        </button>
      </div>

      <div className="panel-header">
        <h2>{subregion.nombre}</h2>
      </div>

      <div className="grid">
        {subregion.emprendimientos.map((e, i) => (
          <div key={i} className="card mostrar fade-in">
            <h3>{e.nombre}</h3>
            <p>{e.desc}</p>
            <a href={e.insta} className="btn" target="_blank">
              🔗 Instagram
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}
