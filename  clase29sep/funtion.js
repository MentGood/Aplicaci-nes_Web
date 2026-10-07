const btnTheme = document.querySelector('#btn_cambio');
//const body = document.body;

const body = document.getElementB('body')[0];
btnTheme.addEventListener('click', () =>{

    body.classList.toggle('modo_oscuro');
    if (body.classList.contains('modo_oscura')){
        btnTheme.textContent='modoclaro';
    }else { 
        btnTheme.textContent='modo oscuro';
    }
    console-log('modo oscuro activo:', body.classList.contains('modo_oscuro'));

});
