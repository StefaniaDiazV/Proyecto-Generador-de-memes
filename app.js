const btnImagen = document.getElementById('btn-imagen');
const btnTexto = document.getElementById('btn-texto');
const btnModoOscuro = document.getElementById('btn-modo-oscuro');
const panelTexto = document.getElementById('panel-texto');
const panelImagen = document.getElementById('panel-imagen');

// FUNCIONALIDADES MENU PRINCIPAL

btnTexto.addEventListener('click', () => {
    panelImagen.style.display = 'none'
    panelTexto.style.display = 'block'
});

btnImagen.addEventListener('click', () => {
    panelImagen.style.display = 'block'
    panelTexto.style.display = 'block'
});

const preferenciasTema = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
const establecerTema = (theme) => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
}
btnModoOscuro.addEventListener('click', () => {
    let cambiarTema = localStorage.getItem('theme') === 'dark' ? 'light' : 'dark';
    establecerTema(cambiarTema)
});
establecerTema(localStorage.getItem('theme') || preferenciasTema);