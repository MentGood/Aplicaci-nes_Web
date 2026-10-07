//funcion para cambiar el tema de la paguina 
const btnTheme2 = document.querySelector('#btn_modo');
const padre = document.querySelector('#div_padre');


btnTheme2.addEventListener('click', () => {
    padre.classList.toggle('modo_trasparente');

    if (padre.classList.contains('modo_trasparente')) {
        btnTheme2.textContent = 'opaco';
    } else {
        btnTheme.textContent = 'trasnparente';
    }

    console.log('se aplico el modo trasparente:', padre.classList.contains('modo_trasparente'));
});
//funcion para validar el formulario
const form = document.getElementById('formulario');
const nombreInput = document.getElementById('nombre');
const emailInput = document.getElementById('email');
const mensaje = document.getElementById('mensaje');
const celularInput = document.getElementById('celular');
const divrespuesta = document.getElementById('respuesta');


form.addEventListener('submit', (event) => {
    event.preventDefault();
    divrespuesta.innerHTML = '';
    //crearemos los mensajes para almacenar los mensager de error
    const error = [];
    if (nombreInput.value.trim() === '') {
        error.push('El nombre es obligatorio.');

    }
    if (emailInput.value.trim() === '') {
        error.push('El correo electrónico es obligatorio.');


    }else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(emailInput.value)) {
        error.push('El correo electrónico no es válido.');
    }
    if (mensaje.value.trim() === '') {
        error.push('El mensaje es obligatorio.');
    }   
    if (celularInput.value.trim() === '') {
        error.push('El celular es obligatorio.');
    }   
    if (error.length > 0) {
        divrespuesta.innerHTML = error.join('<br>');
    }   
    
/*
formulario.addEventListener('submit', (e) => {
    e.preventDefault();

    const nombre = document.getElementById('nombre').value;
    const email = document.getElementById('email').value;

    respuesta.textContent = `¡Gracias, ${nombre}! Te contactaremos a ${email}.`;
    formulario.reset();
});
*/