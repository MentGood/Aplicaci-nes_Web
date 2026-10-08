// ===== Cambiar el color de los 8 divs =====
const btnColor = document.querySelector('#btn_color');
const padre = document.querySelector('#div_padre');

btnColor.addEventListener('click', () => {
    padre.classList.toggle('tema-alterno');

    if (padre.classList.contains('tema-alterno')) {
        btnColor.textContent = 'Colores originales';
    } else {
        btnColor.textContent = 'Cambiar color';
    }

    console.log('tema alterno activo:', padre.classList.contains('tema-alterno'));
});