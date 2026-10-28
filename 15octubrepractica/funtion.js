// 1. Lógica para el Menú en Celulares (Menú Hamburguesa)
const menuToggle = document.getElementById('menuToggle');
const navMenu = document.getElementById('navMenu');

// Al hacer clic en el botón de menú, se añade o quita la clase 'active'
menuToggle.addEventListener('click', () => {
    navMenu.classList.toggle('active');
});

// 2. Animación de entrada para las imágenes de la galería
// Esperamos a que todo el HTML esté cargado en la pantalla
document.addEventListener('DOMContentLoaded', () => {
    const items = document.querySelectorAll('.gallery-item');
    
    items.forEach((item, index) => {
        // Preparamos los elementos invisibles y un poco más pequeños
        item.style.opacity = '0';
        item.style.transform = 'scale(0.9)';
        item.style.transition = 'all 0.6s ease-out';
        
        // Creamos un efecto de "cascada" usando setTimeout y el índice
        setTimeout(() => {
            item.style.opacity = '1';
            item.style.transform = 'scale(1)';
        }, 150 * index); // La imagen 1 aparece antes que la 2, y así sucesivamente.
    });
});