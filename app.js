const btnImagen = document.getElementById('btn-imagen');
const btnTexto = document.getElementById('btn-texto');
const btnModoOscuro = document.getElementById('btn-modo-oscuro');
const panelTexto = document.getElementById('panel-texto');
const panelImagen = document.getElementById('panel-imagen');
const textoSuperior = document.getElementById('superior');
const parrafoSuperior = document.getElementById('parrafo-superior');
const textoInferior = document.getElementById('inferior');
const parrafoInferior = document.getElementById('parrafo-inferior');
const sinTextoSuperior = document.getElementById('sin-texto-superior');
const sinTextoInferior = document.getElementById('sin-texto-inferior');
const tipoFuente = document.getElementById('fuente');
const tamanoFuente = document.getElementById('tamano-fuente');


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

// FUNCIONALIDADES PANEL DE TEXTO

const escribirTexto = (input, p) => {
    input.addEventListener('input', (event) => {
        const textoActual = event.target.value;
        p.innerHTML = textoActual;
    });
};
escribirTexto(textoSuperior, parrafoSuperior);
escribirTexto(textoInferior, parrafoInferior);

const sinTexto = (checkbox, parrafo) => {
    checkbox.addEventListener('change', (event) => {
        if (event.target.checked) {
            parrafo.style.display = 'none';
        } else {
            parrafo.style.display = '';
        }   
    });
};
sinTexto(sinTextoSuperior, parrafoSuperior);
sinTexto(sinTextoInferior, parrafoInferior);

tipoFuente.addEventListener('change', (event) => {
    const fuenteActual = event.target.value;
    parrafoSuperior.style.fontFamily = fuenteActual;
    parrafoInferior.style.fontFamily = fuenteActual;
});

tamanoFuente.addEventListener('change', (event) => {
    const tamanoActual = event.target.value;
    parrafoSuperior.style.fontSize = `${tamanoActual}px`;
});









// FUNCIONALIDADES PANEL DE IMAGEN