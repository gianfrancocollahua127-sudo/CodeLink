import { useState } from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Buscador from "./components/Buscador";
import Regiones from "./components/Regiones";
import Subregiones from "./components/Subregiones";
import Emprendimientos from "./components/Emprendimientos";
import SobreNosotros from "./components/SobreNosotros";
import Footer from "./components/Footer";
import "./App.css"

function App() {
  const [vista, setVista] = useState("inicio");
  const [regionSeleccionada, setRegionSeleccionada] = useState(null);
  const [subregionSeleccionada, setSubregionSeleccionada] = useState(null);

  return (
    <>
      <Header />
      {vista === "inicio" && <Hero setVista={setVista} />}

      {vista === "regiones" && (
        <Regiones setVista={setVista} setRegionSeleccionada={setRegionSeleccionada} />
      )}
      {vista === "subregiones" && regionSeleccionada && (
        <Subregiones
          region={regionSeleccionada}
          setVista={setVista}
          setSubregionSeleccionada={setSubregionSeleccionada}
        />
      )}
      {vista === "emprendimientos" && subregionSeleccionada && (
        <Emprendimientos subregion={subregionSeleccionada} setVista={setVista} />
      )}

      <SobreNosotros />
      <Footer />
    </>
  );
}

export default App;
