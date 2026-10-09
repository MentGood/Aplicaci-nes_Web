const img1 = document.getElementById('img1');
const imagenOriginal = img1.src;

const imagenHover = './img/charles.png'; 

img1.addEventListener('mouseover', function() {
    img1.src = imagenHover;
});

img1.addEventListener('mouseout', function() {
    img1.src = imagenOriginal; 
});

const boton = document.getElementById("btn_color");

boton.addEventListener("click", function () {
    document.body.classList.toggle("colores-nuevos");
    
    if (document.body.classList.contains("colores-nuevos")) {
        boton.textContent = "Desactivar Modo Neón";
    } else {
        boton.textContent = "Activar Modo Neón";
    }
});