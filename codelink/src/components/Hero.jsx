export default function Hero({ setVista }) {
  return (
    <section id="menu-principal" className="hero">
      <h2>Bienvenido a la Red de Emprendimientos</h2>
      <p>Explorá las regiones, subregiones y emprendimientos locales.</p>
      <button className="btn grande" onClick={() => setVista("regiones")}>
        🌍 Explorar Regiones
      </button>
    </section>
  );
}
