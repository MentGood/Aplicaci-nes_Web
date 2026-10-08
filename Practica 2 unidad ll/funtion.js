// IMAGEN 1: Cuando pase el mouse debe cambiar de imagen
const img1 = document.getElementById('img1');
const imagenOriginal = img1.src;

// IMPORTANTE: Como usaste "aleman.png" de inicio, necesitas tener otra imagen 
// para que se vea el cambio. Asegúrate de poner la ruta correcta aquí.
// Si no tienes una, puedes usar temporalmente otra que ya tengas como charles.png
const imagenHover = './img/charles.png'; 

img1.addEventListener('mouseover', function() {
    img1.src = imagenHover;
});

img1.addEventListener('mouseout', function() {
    img1.src = imagenOriginal; 
});

// BOTÓN: Debe activar el modo neón
const boton = document.getElementById("btn_color");

boton.addEventListener("click", function () {
    // Usamos toggle en el body para cambiar toda la página a modo neón
    document.body.classList.toggle("colores-nuevos");
    
    // Cambiamos el texto del botón según el estado
    if (document.body.classList.contains("colores-nuevos")) {
        boton.textContent = "Desactivar Modo Neón";
    } else {
        boton.textContent = "Activar Modo Neón";
    }
});