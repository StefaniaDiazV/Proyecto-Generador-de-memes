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
const btnAlinearIzquierda = document.getElementById('btn-alinear-izquierda');
const btnCentrar = document.getElementById('btn-centrar');
const btnAlinearDerecha = document.getElementById('btn-alinear-derecha');
const inputColorLetra = document.getElementById('color-letra');
const valorColorLetra = document.getElementById('valor-color-letra');
const inputColorFondo = document.getElementById('color-fondo');
const valorColorFondo = document.getElementById('valor-color-fondo');
const fondoTransparente = document.getElementById('fondo-transparente');

const espaciadoTexto = document.getElementById('espaciado-texto');
const interlineadoTexto = document.getElementById('interlineado-texto');

// ELEMENTOS IMAGEN
const urlImagen = document.getElementById('url-imagen');
const contenedorImagen = document.getElementById('contenedor-imagen');
const inputColorImagen = document.getElementById('color-fondo-imagen');
const valorColorImagen = document.getElementById('valor-color-imagen');
const editorMemes = document.getElementById('editor');

const brilloImagen = document.getElementById('brillo-imagen');
const opacidadImagen = document.getElementById('opacidad-imagen');
const contrasteImagen = document.getElementById('contraste-imagen');
const desenfoqueImage = document.getElementById('desenfoque-imagen');
const escalaDeGrises = document.getElementById('escala-de-grises-imagen');
const sepiaImagen = document.getElementById('sepia-imagen');
const hueImagen = document.getElementById('hue-imagen');
const saturadoImagen = document.getElementById('saturado-imagen');
const negativoImagen = document.getElementById('negativo-imagen');

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
    parrafoInferior.style.fontSize = `${tamanoActual}px`;
});

btnAlinearIzquierda.addEventListener('click', (event) => {
    parrafoSuperior.style.textAlign = 'left';
    parrafoInferior.style.textAlign = 'left'
}); 

btnCentrar.addEventListener('click', (event) => {
    parrafoSuperior.style.textAlign = 'center';
    parrafoInferior.style.textAlign = 'center'
}); 

btnAlinearDerecha.addEventListener('click', (event) => {
    parrafoSuperior.style.textAlign = 'right';
    parrafoInferior.style.textAlign = 'right'
});

const pintarValorColor = (input, valor) => {
    const valorInput = input.value;
    valor.innerHTML = valorInput;
};
pintarValorColor(inputColorLetra, valorColorLetra);
pintarValorColor(inputColorFondo, valorColorFondo);
pintarValorColor(inputColorImagen, valorColorImagen);

inputColorLetra.addEventListener('input', () => {
    const valor = inputColorLetra.value;
    valorColorLetra.innerHTML = valor;
    parrafoInferior.style.color = valor;
    parrafoSuperior.style.color = valor;
});

inputColorFondo.addEventListener('input', () => {
    const valor = inputColorFondo.value;
    valorColorFondo.innerHTML = valor;
    parrafoSuperior.style.backgroundColor = valor;
    parrafoInferior.style.backgroundColor = valor;
});

fondoTransparente.addEventListener('change', (event) => {
    if (event.target.checked) {
        parrafoSuperior.style.backgroundColor = 'transparent';
        parrafoInferior.style.backgroundColor = 'transparent';
    } 
    else {
        parrafoSuperior.style.backgroundColor = inputColorFondo.value;
        parrafoInferior.style.backgroundColor = inputColorFondo.value; 
    }   
});

espaciadoTexto.addEventListener('input', (event) => {
    const valorActual = espaciadoTexto.value;
    parrafoSuperior.style.padding = `${valorActual}px`;
    parrafoInferior.style.padding = `${valorActual}px`;
});

interlineadoTexto.addEventListener('input', (event) => {
    const valorActual = interlineadoTexto.value;
    parrafoSuperior.style.lineHeight = valorActual;
    parrafoInferior.style.lineHeight = valorActual;
});


// FUNCIONALIDADES PANEL DE IMAGEN

urlImagen.addEventListener('change', (event) => {
    const urlActual = event.target.value;
    contenedorImagen.style.backgroundImage = `url('${urlActual}')`
    contenedorImagen.style.backgroundRepeat = `no-repeat`
    contenedorImagen.style.backgroundSize = `cover`
});

inputColorImagen.addEventListener('input', () => {
    const valor = inputColorImagen.value;
    valorColorLetra.innerHTML = valor;
    editorMemes.style.backgroundColor = valor;
});

brilloImagen.addEventListener('input', (event) => {
    const valorActual = event.target.value;
    contenedorImagen.style.filter = `brightness(${valorActual}%)`;
});

opacidadImagen.addEventListener('input', (event) => {
    const valorActual = event.target.value;
    contenedorImagen.style.filter = `opacity(${valorActual}%)`;
});

contrasteImagen.addEventListener('input', (event) => {
    const valorActual = event.target.value;
    contenedorImagen.style.filter = `contrast(${valorActual}%)`;
});

desenfoqueImage.addEventListener('input', (event) => {
    const valorActual = event.target.value;
    contenedorImagen.style.filter = `blur(${valorActual}px)`;
});

escalaDeGrises.addEventListener('input', (event) => {
    const valorActual = event.target.value;
    contenedorImagen.style.filter = `grayscale(${valorActual}%)`;
});

sepiaImagen.addEventListener('input', (event) => {
    const valorActual = event.target.value;
    contenedorImagen.style.filter = `sepia(${valorActual}%)`;
});

hueImagen.addEventListener('input', (event) => {
    const valorActual = event.target.value;
    contenedorImagen.style.filter = `hue-rotate(${valorActual}deg)`;
});

saturadoImagen.addEventListener('input', (event) => {
    const valorActual = event.target.value;
    contenedorImagen.style.filter = `saturate(${valorActual}%)`;
});

negativoImagen.addEventListener('input', (event) => {
    const valorActual = event.target.value;
    contenedorImagen.style.filter = `invert(${valorActual}%)`;
});