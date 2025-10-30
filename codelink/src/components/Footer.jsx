export default function Footer() {
  return (
    <footer id="contacto" className="footer">
      <div className="footer-info">
        <p>
          <strong>📍 Dirección:</strong> Av. Siempre Viva 742, Ciudad Local
        </p>
        <p>
          <strong>📞 Teléfono:</strong>{" "}
          <a href="tel:+541145678910">+54 11 4567 8910</a>
        </p>
        <p>
          <strong>📧 Email:</strong>{" "}
          <a href="mailto:contacto@emprendedoreslocales.com">
            contacto@emprendedoreslocales.com
          </a>
        </p>
      </div>
      <div className="footer-copy">© 2025 Red de Emprendimientos</div>
    </footer>
  );
}
