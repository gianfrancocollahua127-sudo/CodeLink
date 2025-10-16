// src/App.jsx
import { useState } from "react";
import "./App.css";
import { emprendimientos } from "./data";

function App() {
  const [filtro, setFiltro] = useState("");

  const filtrados = emprendimientos.filter(e =>
    e.nombre.toLowerCase().includes(filtro.toLowerCase())
  );

  return (
    <>
      {/* 🔹 ENCABEZADO */}
      <header className="encabezado">
        <div className="logo">
          <img src="/coDELINK.png" alt="Logo Empresa" className="logo-img" />
          <h1>Red de Emprendimientos</h1>
        </div>

        <nav className="menu">
          <a href="#inicio">Inicio</a>
          <a href="#emprendimientos">Emprendimientos</a>
          <a href="#sobre-nosotros">Sobre Nosotros</a>
          <a href="#contacto">Contacto</a>
        </nav>
      </header>

      {/* 🔹 SECCIÓN PRINCIPAL */}
      <section id="inicio" className="hero">
        <h2>Impulsando el crecimiento local 🚀</h2>
        <p>
          Conocé los emprendimientos de nuestra comunidad, apoyá el talento local y descubrí nuevos productos y servicios cerca tuyo.
        </p>
      </section>

      {/* 🔹 BARRA DE BÚSQUEDA */}
      <section className="buscador">
        <input
          type="text"
          placeholder="🔍 Buscar emprendimiento..."
          value={filtro}
          onChange={(e) => setFiltro(e.target.value)}
        />
      </section>

      {/* 🔹 LISTA DE EMPRENDIMIENTOS */}
      <section id="emprendimientos" className="contenedor">
        <h2>Nuestros Emprendimientos</h2>
        <div className="grid">
          {filtrados.map((e, i) => (
            <div className="card mostrar" key={i}>
              <h3>{e.nombre}</h3>
              <p>{e.desc}</p>
              <div className="btn-group">
                {e.insta && (
                  <a href={e.insta} target="_blank" className="btn">
                    Instagram
                  </a>
                )}
                {e.fb && (
                  <a href={e.fb} target="_blank" className="btn">
                    Facebook
                  </a>
                )}
                <a
                  href={`https://www.google.com/maps/search/${encodeURIComponent(e.nombre)}`}
                  target="_blank"
                  className="btn"
                >
                  Mapa
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 🔹 SOBRE NOSOTROS */}
      <section id="sobre-nosotros" className="sobre">
        <h2>Sobre Nosotros</h2>
        <p>
          Somos una red creada para conectar a los emprendedores locales con su comunidad. Buscamos fomentar el comercio justo, la visibilidad digital y el trabajo colaborativo.
        </p>
      </section>

      {/* 🔹 PIE DE PÁGINA */}
      <footer id="contacto" className="footer">
        <div className="footer-info">
          <p><strong>📍 Dirección:</strong> Av. Siempre Viva 742, Ciudad Local</p>
          <p><strong>📞 Teléfono:</strong> (011) 4567-8910</p>
          <p><strong>📧 Email:</strong> contacto@emprendedoreslocales.com</p>
        </div>
        <div className="footer-copy">
          © 2025 Red de Emprendimientos | Desarrollado por un estudiante de informática 💻
        </div>
      </footer>
    </>
  );
}

export default App;
