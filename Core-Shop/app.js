const productos = [
  { id: "sudadera1", categoria: "sudaderas", nombre: "Sudadera negra",       precio: 650, img: "img/sudadera1.jpg" },
  { id: "sudadera2", categoria: "sudaderas", nombre: "Sudadera gris",        precio: 600, img: "img/sudadera2.jpg" },

  { id: "gorra1",    categoria: "gorras",    nombre: "Gorra negra",          precio: 350, img: "img/gorra1.jpg" },
  { id: "gorra2",    categoria: "gorras",    nombre: "Gorra blanca",         precio: 320, img: "img/gorra2.jpg" },

  { id: "crocs1",    categoria: "crocs",     nombre: "Crocs negras",         precio: 700, img: "img/crocs1.jpg" },
  { id: "crocs2",    categoria: "crocs",     nombre: "Crocs blancas",        precio: 700, img: "img/crocs2.jpg" },

  { id: "playera1",  categoria: "playeras",  nombre: "Playera blanca",       precio: 280, img: "img/playera1.jpg" },
  { id: "playera2",  categoria: "playeras",  nombre: "Playera negra",        precio: 280, img: "img/playera2.jpg" }
];
const contenedor = document.querySelector("#productos");

if (contenedor) {
  const categoria = document.body.dataset.categoria;
  const lista = productos.filter((p) => p.categoria === categoria);

  contenedor.innerHTML = lista.map((p) => `
    <div class="col-12 col-sm-6 col-lg-4" data-aos="fade-up">
      <article class="card producto h-100">
        <img src="${p.img}" class="card-img-top" alt="${p.nombre}">
        <div class="card-body d-flex flex-column">
          <h2 class="h5">${p.nombre}</h2>
          <p class="fs-5 fw-bold">$${p.precio.toLocaleString("es-MX")}</p>
          <button class="btn btn-rv btn-comprar mt-auto" data-id="${p.id}">
            <i class="fa-solid fa-credit-card"></i> Comprar
          </button>
        </div>
      </article>
    </div>`).join("");
}
