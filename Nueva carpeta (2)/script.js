// Lista de emprendimientos con nombre, descripción y redes
const emprendimientos = [
  { nombre: "Pini", desc: "Artesanías en resina: llaveros, lapiceras, paletas nails, marcadores de páginas y más.", insta: "https://www.instagram.com/pini_creaciones1?igsh=Zjh1eWlzMTlnenIz" },
  { nombre: "JJ iPhone", desc: "Reventa de iPhone usados y accesorios.", insta: "https://www.instagram.com/jj_iphone11?igsh=MWdvYzUzcHc3dzUxdA==" },
  { nombre: "Atenea MakeUp", desc: "Maquillaje profesional para eventos.", insta: "https://www.instagram.com/atenea_makeup12?igsh=MWduMTFrZDVlczBiag==" },
  { nombre: "BAC", desc: "Venta de hamburguesas artesanales.", insta: "https://www.instagram.com/b.a.c_burger?igsh=Z2t2dmQ4dHR5d2J3" },
  { nombre: "Titina", desc: "Indumentaria masculina y femenina.", insta: "https://www.instagram.com/ttitina.ind?igsh=MWx2NmR0ZHlpOGJ5bw==" },
  { nombre: "Aldonza", desc: "Venta de accesorios e indumentaria.", insta: "https://www.instagram.com/aldonza.showroom?igsh=MW9zOXExa2xlcHg2MQ==" },
  { nombre: "Stilos Magy", desc: "Ropa, accesorios y artículos varios.", insta: "https://www.instagram.com/stilos_magy?igsh=MTQ2Y2psZTE5MGRrMA==" },
  { nombre: "Magnolia", desc: "Accesorios de acero quirúrgico.", insta: "https://www.instagram.com/magnoliaaceroquirurgico?igsh=ZGwyMzdkd29nZmx0" },
  { nombre: "Mar de Tinta", desc: "Estudio de tatuajes profesionales.", insta: "https://www.instagram.com/mardetinta_tattoo?igsh=MWRoMWpiYTV2Zm5kcA==" },
  { nombre: "JC Fotografías", desc: "Fotografía profesional para eventos.", insta: "https://www.instagram.com/jcfotografias91090?igsh=MTFlaGVhN3Vmc2pw" },
  { nombre: "El Sitio Comunicaciones", desc: "Tecnología y servicio técnico.", insta: "https://www.instagram.com/elsitiocomunicaciones?igsh=MXZsN3didnA3MzYy" },
  { nombre: "Yeye Sublimaciones", desc: "Sublimados, cartelería y fly banner.", insta: "https://www.instagram.com/yeyesublimacionesok?igsh=MWowZG56bjkyMW0wdw==" },
  { nombre: "L-ístore", desc: "Venta de productos Apple usados y sellados.", insta: "https://www.instagram.com/ele.istore?igsh=NGZ6aDk4ZDhoemIx" },
  { nombre: "Regalería Lu", desc: "Bisutería, librería, moda y más.", insta: "https://www.instagram.com/reg_alerialu?igsh=MThiYjN5NHpldW91OQ==", fb: "https://www.facebook.com/share/1JMVNUHezU/" },
  { nombre: "Sense FastFood", desc: "Comida rápida y delivery.", fb: "https://www.facebook.com/share/19vTJsr44m/" },
  { nombre: "One_sport", desc: "Ropa deportiva y urbana.", insta: "https://www.instagram.com/one_sport0121?igsh=MWZ4aHZ1ZWFzb25mNQ==" },
  { nombre: "VeeJay Be Glam", desc: "Maquillaje y belleza profesional.", insta: "https://www.instagram.com/veejay_byglam?igsh=MWh4MGo4NWtyYXNqMg==" },
  { nombre: "Forrajería Los Amigos", desc: "Alimentos y accesorios para mascotas.", insta: "https://www.instagram.com/forrajeria.los.amigos24?igsh=MW95M2k1cDVzbHR0eQ==" },
  { nombre: "Cóndor", desc: "Feria americana con ropa y accesorios.", insta: "https://www.instagram.com/condor.feriaamericana?igsh=aTJ3MTJjcjZycGYy" },
  { nombre: "Cafetería Deli", desc: "Cafetería con postres y bebidas especiales.", insta: "https://www.instagram.com/cafeteria_deli?igsh=MWdkNmx2MWM0ZDNwbQ==" },
  { nombre: "Nam Teo", desc: "Accesorios y maquillaje.", insta: "https://www.instagram.com/namteo_?igsh=MTRma3NrOHpyNHdycQ==" },
  { nombre: "Rocío Antonella", desc: "Manicuría profesional y estética.", insta: "https://www.instagram.com/gabinete_rocioantonella2023?igsh=MWk5N241em9yY3d6Mg==" },
  { nombre: "Ciamin", desc: "Accesorios variados para toda ocasión.", insta: "https://www.instagram.com/ciamin.ok?igsh=MXBpem4wOWg1ajhhbQ==" }
];

// Elementos del DOM
const contenedor = document.getElementById('lista-emprendimientos');
const inputBusqueda = document.getElementById('busqueda');

// Función para mostrar los emprendimientos
function mostrarEmprendimientos(filtro = "") {
  contenedor.innerHTML = "";

  emprendimientos
    .filter(e => e.nombre.toLowerCase().includes(filtro.toLowerCase()))
    .forEach(e => {
      const card = document.createElement("div");
      card.className = "card";
      card.innerHTML = `
        <h3>${e.nombre}</h3>
        <p>${e.desc}</p>
        <div class="btn-group">
          ${e.insta ? `<a href="${e.insta}" target="_blank" class="btn">Instagram</a>` : ""}
          ${e.fb ? `<a href="${e.fb}" target="_blank" class="btn">Facebook</a>` : ""}
          <a href="https://www.google.com/maps/search/${encodeURIComponent(e.nombre)}" target="_blank" class="btn">Mapa</a>
        </div>
      `;
      card.style.opacity = 0;
      contenedor.appendChild(card);

      // animación suave
      setTimeout(() => {
        card.style.transition = "opacity 0.5s";
        card.style.opacity = 1;
      }, 50);
    });
}

// Evento de búsqueda
inputBusqueda.addEventListener("input", e => {
  mostrarEmprendimientos(e.target.value);
});

// Mostrar todo al cargar
mostrarEmprendimientos();
