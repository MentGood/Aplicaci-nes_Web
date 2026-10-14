const botonMenu = document.getElementById("botonMenu");
const enlaces = document.getElementById("enlaces");

botonMenu.addEventListener("click", function() {
    enlaces.classList.toggle("activo");

    if (enlaces.classList.contains("activo")) {
        botonMenu.textContent = "✕";
    } else {
        botonMenu.textContent = "☰";
    }
});

const opcionesMenu = document.querySelectorAll(".enlaces a");

opcionesMenu.forEach(function(enlace) {
    enlace.addEventListener("click", function() {
        enlaces.classList.remove("activo");
        botonMenu.textContent = "☰";
    });
});

const botonesProducto = document.querySelectorAll(".producto-boton");
const selectorProducto = document.getElementById("producto");

botonesProducto.forEach(function(boton) {
    boton.addEventListener("click", function() {
        selectorProducto.value = boton.dataset.producto;
    });
});

const formulario = document.getElementById("formulario");
const respuesta = document.getElementById("respuesta");

formulario.addEventListener("submit", function(evento) {
    evento.preventDefault();

    const nombre = document.getElementById("nombre").value.trim();
    const correo = document.getElementById("correo").value.trim();
    const producto = selectorProducto.value;
    const mensaje = document.getElementById("mensaje").value.trim();

    if (
        nombre === "" ||
        correo === "" ||
        producto === "" ||
        mensaje === ""
    ) {
        respuesta.style.color = "#e60012";
        respuesta.textContent = "Completa todos los campos.";
        return;
    }

    respuesta.style.color = "#16803c";
    respuesta.textContent =
        "¡Gracias, " + nombre +
        "! Tu consulta sobre " + producto +
        " fue registrada en esta demostración.";

    formulario.reset();
});