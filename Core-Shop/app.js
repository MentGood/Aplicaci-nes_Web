const productos = [
  { id: "sudadera1", categoria: "sudaderas", nombre: "Sudadera roja",       precio: 999, img: "img/sudadera1.jpeg" },
  { id: "sudadera2", categoria: "sudaderas", nombre: "Sudadera azul",        precio: 999, img: "img/sudadera2.jpeg" },

  { id: "gorra1",    categoria: "gorras",    nombre: "Gorra thyrti-one",          precio: 700, img: "img/gorra1.jpeg" },
  { id: "gorra2",    categoria: "gorras",    nombre: "Gorra Murakai",         precio: 650, img: "img/gorra2.jpeg" },

  { id: "crocs1",    categoria: "crocs",     nombre: "Crocs spiderman",         precio: 700, img: "img/crocs1.jpeg" },
  { id: "crocs2",    categoria: "crocs",     nombre: "Crocs mcqueen",        precio: 700, img: "img/crocs2.jpeg" },

  { id: "playera1",  categoria: "playeras",  nombre: "Playera hellstar",       precio: 450, img: "img/playera1.jpeg" },
  { id: "playera2",  categoria: "playeras",  nombre: "Playera essentials",        precio: 450, img: "img/playera2.jpeg" }
];

function precio(cantidad) {
  return "$" + cantidad.toLocaleString("es-MX");
}


function iniciarCategoria() {
  const contenedor = document.querySelector("#productos");
  if (!contenedor) return; 

  const categoria = document.body.dataset.categoria;
  const lista = productos.filter((p) => p.categoria === categoria);

  contenedor.innerHTML = lista.map((p) => `
    <div class="col-12 col-sm-6 col-lg-4" data-aos="fade-up">
      <article class="card producto h-100">
        <img src="${p.img}" class="card-img-top" alt="${p.nombre}"
             onerror="this.onerror=null; this.src='img/sin-foto.svg';">
        <div class="card-body d-flex flex-column">
          <h2 class="h5">${p.nombre}</h2>
          <p class="fs-5 fw-bold">${precio(p.precio)}</p>
          <button class="btn btn-rv btn-comprar mt-auto" data-id="${p.id}">
            <i class="fa-solid fa-credit-card"></i> Comprar
          </button>
        </div>
      </article>
    </div>`).join("");
}


document.addEventListener("click", (e) => {
  const boton = e.target.closest(".btn-comprar");
  if (!boton) return;

  const producto = productos.find((p) => p.id === boton.dataset.id);

  Swal.fire({
    title: producto.nombre,
    html: `Total: <strong>${precio(producto.precio)}</strong><br>Elige tu forma de pago:`,
    input: "radio",
    inputOptions: {
      "Tarjeta de débito o crédito": "Tarjeta",
      "Transferencia bancaria": "Transferencia",
      "Efectivo al entregar": "Efectivo"
    },
    inputValidator: (valor) => !valor && "Elige una forma de pago",
    showCancelButton: true,
    confirmButtonText: "Pagar",
    cancelButtonText: "Cancelar",
    confirmButtonColor: "#141414"
  }).then((respuesta) => {
    if (respuesta.isConfirmed) {
      Swal.fire("¡Gracias por tu compra!", `Pagarás con: ${respuesta.value}`, "success");
    }
  });
});


function iniciarFormulario() {
  const formulario = document.querySelector("#form-contacto");
  if (!formulario) return; 

  const mensaje = document.querySelector("#mensaje");

  function marcar(campo, error) {
    campo.parentElement.querySelector(".invalid-feedback").textContent = error;

    if (error) {
      campo.classList.add("is-invalid");
      campo.classList.remove("is-valid");
    } else {
      campo.classList.remove("is-invalid");
      campo.classList.add("is-valid");
    }
  }

  formulario.addEventListener("submit", (e) => {
    e.preventDefault();

    const nombre = document.querySelector("#nombre");
    const correo = document.querySelector("#correo");
    const telefono = document.querySelector("#telefono");
    const asunto = document.querySelector("#asunto");
    const comentario = document.querySelector("#comentario");

    const reglas = [
      [nombre,     nombre.value.trim().length < 3,      "Escribe tu nombre completo."],
      [correo,     !correo.checkValidity(),             "Escribe un correo válido."],
      [telefono,   !/^\d{10}$/.test(telefono.value),    "El teléfono debe tener 10 números."],
      [asunto,     asunto.value === "",                 "Elige un asunto."],
      [comentario, comentario.value.trim().length < 10, "Escribe tu mensaje (mínimo 10 caracteres)."]
    ];

    let valido = true;
    reglas.forEach(([campo, tieneError, texto]) => {
      marcar(campo, tieneError ? texto : "");
      if (tieneError) valido = false;
    });

    mensaje.classList.remove("d-none");

    if (!valido) {
      mensaje.classList.remove("exito");
      mensaje.textContent = "Revisa los campos marcados en rojo.";
      return;
    }

    mensaje.classList.add("exito");
    mensaje.textContent = `¡Gracias, ${nombre.value}! Te responderemos pronto.`;
    Swal.fire("¡Mensaje enviado!", "Te contestaremos en menos de 24 horas.", "success");

    formulario.reset();
    formulario.querySelectorAll(".is-valid").forEach((campo) => campo.classList.remove("is-valid"));
  });
}


document.addEventListener("DOMContentLoaded", () => {
  iniciarCategoria();
  iniciarFormulario();
  AOS.init({ duration: 700, once: true });
});