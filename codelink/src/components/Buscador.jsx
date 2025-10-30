export default function Buscador({ setVista }) {
  return (
    <div className="buscador">
      
      <button className="btn volver-inicio" onClick={() => setVista("inicio")}>
        🏠 Inicio
      </button>
    </div>
  );
}
