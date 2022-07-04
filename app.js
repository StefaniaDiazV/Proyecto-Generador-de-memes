const btnImagen = document.getElementById('btn-imagen');
const btnTexto = document.getElementById('btn-texto');
const btnModoOscuro = document.getElementById('btn-modo-oscuro');
const btnDescargarMeme = document.getElementById('btn-descargar-meme')
const panelTexto = document.getElementById('panel-texto');
const panelImagen = document.getElementById('panel-imagen');

// ELEMENTOS TEXTO
const btnCerrarPanelTexto = document.getElementById('btn-cerrar-panel-texto');
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
const btnContornoNinguno = document.getElementById('contorno-ninguno');
const btnContornoClaro = document.getElementById('contorno-claro');
const btnContornoOscuro = document.getElementById('contorno-oscuro')
const espaciadoTexto = document.getElementById('espaciado-texto');
const interlineadoTexto = document.getElementById('interlineado-texto');

// ELEMENTOS IMAGEN
const btnCerrarPanelImagen = document.getElementById('btn-cerrar-panel-imagen');
const urlImagen = document.getElementById('url-imagen');
const contenedorImagen = document.getElementById('contenedor-imagen');
const inputColorImagen = document.getElementById('color-fondo-imagen');
const valorColorImagen = document.getElementById('valor-color-imagen');
const editorMemes = document.getElementById('editor');
const modoDeMezclaFondo = document.getElementById('mezcla-fondo');
const brilloImagen = document.getElementById('brillo-imagen');
const opacidadImagen = document.getElementById('opacidad-imagen');
const contrasteImagen = document.getElementById('contraste-imagen');
const desenfoqueImagen = document.getElementById('desenfoque-imagen');
const escalaDeGrises = document.getElementById('escala-de-grises-imagen');
const sepiaImagen = document.getElementById('sepia-imagen');
const hueImagen = document.getElementById('hue-imagen');
const saturadoImagen = document.getElementById('saturado-imagen');
const negativoImagen = document.getElementById('negativo-imagen');
const btnReestablecerFiltros = document.getElementById('btn-reestablecer-filtros');


// FUNCIONALIDADES MENU PRINCIPAL

btnTexto.addEventListener('click', () => {
    panelImagen.style.display = 'none'
    panelTexto.style.display = 'block'
});

btnImagen.addEventListener('click', () => {
    panelImagen.style.display = 'block'
    panelTexto.style.display = 'none'
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

const descargarMeme = () => {
    domtoimage.toBlob(editorMemes).then(function (blob) {
        window.saveAs(blob, 'mi-meme.png')
    });
};
btnDescargarMeme.addEventListener('click', descargarMeme);


// FUNCIONALIDADES PANEL DE TEXTO

btnCerrarPanelTexto.addEventListener('click', () => {
    panelTexto.style.display = 'none'
});

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
        parrafoSuperior.style.zIndex = '3';
        parrafoSuperior.style.position = 'absolute';
        parrafoInferior.style.position = 'absolute';
    }
    else {
        parrafoSuperior.style.backgroundColor = inputColorFondo.value;
        parrafoInferior.style.backgroundColor = inputColorFondo.value; 
        parrafoSuperior.style.zIndex = '';
        parrafoSuperior.style.position = '';
        parrafoInferior.style.position = '';
    }   
});

btnContornoNinguno.addEventListener('click', (event) => {
    parrafoSuperior.style.textShadow = '';
    parrafoInferior.style.textShadow = '';
});
btnContornoClaro.addEventListener('click', (event) => {
    parrafoSuperior.style.textShadow = '-2px -2px 1px #fff, 2px 2px 1px #fff, -2px 2px 1px #fff, 2px -2px 1px #fff';
    parrafoInferior.style.textShadow = '-2px -2px 1px #fff, 2px 2px 1px #fff, -2px 2px 1px #fff, 2px -2px 1px #fff';
});
btnContornoOscuro.addEventListener('click', (event) => {
    parrafoSuperior.style.textShadow = '-2px -2px 1px #000, 2px 2px 1px #000, -2px 2px 1px #000, 2px -2px 1px #000';
    parrafoInferior.style.textShadow = '-2px -2px 1px #000, 2px 2px 1px #000, -2px 2px 1px #000, 2px -2px 1px #000';
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

btnCerrarPanelImagen.addEventListener('click', () => {
    panelImagen.style.display = 'none'
});

urlImagen.addEventListener('change', (event) => {
    const urlActual = event.target.value;
    contenedorImagen.style.backgroundImage = `url('${urlActual}')`
    contenedorImagen.style.backgroundRepeat = `no-repeat`
    contenedorImagen.style.backgroundSize = `cover`
    contenedorImagen.style.backgroundPosition = 'center center'
});

inputColorImagen.addEventListener('input', () => {
    const valor = inputColorImagen.value;
    valorColorImagen.innerHTML = valor;
    editorMemes.style.backgroundColor = valor;
});

modoDeMezclaFondo.addEventListener('input', (event) => {
    const valorActual = modoDeMezclaFondo.value;
    if(valorActual === 'Ninguno'){
        contenedorImagen.style.mixBlendMode = '';
    }else if(valorActual === 'Aclarar'){
        contenedorImagen.style.mixBlendMode = 'lighten';
    }else if(valorActual === 'Oscurecer'){
        contenedorImagen.style.mixBlendMode = 'darken';
    }else if(valorActual === 'Diferencia'){
        contenedorImagen.style.mixBlendMode = 'difference';
    }else if(valorActual === 'Luminosidad'){
        contenedorImagen.style.mixBlendMode = 'luminosity';
    }else if(valorActual === 'Multiplicar'){
        contenedorImagen.style.mixBlendMode = 'multiply';
    } 
});

const valorFiltros = () => {
    const valorBrillo = brilloImagen.value;
    const valorOpacidad = opacidadImagen.value;
    const valorContraste = contrasteImagen.value;
    const valorDesenfoque = desenfoqueImagen.value;
    const valorGrises = escalaDeGrises.value;
    const valorSepia = sepiaImagen.value;
    const valorHue = hueImagen.value;
    const valorSaturado = saturadoImagen.value;
    const valorNegativo = negativoImagen.value;

    contenedorImagen.style.filter = `brightness(${valorBrillo}) opacity(${valorOpacidad}) contrast(${valorContraste}%) blur(${valorDesenfoque}px) grayscale(${valorGrises}%) sepia(${valorSepia}%) hue-rotate(${valorHue}deg) saturate(${valorSaturado}%) invert(${valorNegativo})`
};

brilloImagen.addEventListener('input', valorFiltros);
opacidadImagen.addEventListener('input', valorFiltros);
contrasteImagen.addEventListener('input', valorFiltros);
desenfoqueImagen.addEventListener('input', valorFiltros);
escalaDeGrises.addEventListener('input', valorFiltros); 
sepiaImagen.addEventListener('input', valorFiltros); 
hueImagen.addEventListener('input', valorFiltros); 
saturadoImagen.addEventListener('input', valorFiltros); 
negativoImagen.addEventListener('input', valorFiltros);

btnReestablecerFiltros.addEventListener('click', (event) => {
    const brilloInicial = brilloImagen.value = 1;
    contenedorImagen.style.filter = `brightness(${brilloInicial})`;
    const opacidadInicial = opacidadImagen.value  = 1;
    contenedorImagen.style.filter = `opacity(${opacidadInicial})`;
    const contrasteInicial = contrasteImagen.value = 100;
    contenedorImagen.style.filter = `contrast(${contrasteInicial}%)`;
    const desenfoqueInicial = desenfoqueImagen.value = 0;
    contenedorImagen.style.filter = `blur(${desenfoqueInicial}px)`;
    const escalaDeGrisesInicial = escalaDeGrises.value = 0;
    contenedorImagen.style.filter = `grayscale(${escalaDeGrisesInicial}%)`;
    const sepiaInicial = sepiaImagen.value = 0;
    contenedorImagen.style.filter = `sepia(${sepiaInicial}%)`;
    const hueInicial = hueImagen.value = 0;
    contenedorImagen.style.filter = `hue-rotate(${hueInicial}deg)`;
    const saturadoInicial = saturadoImagen.value = 100;
    contenedorImagen.style.filter = `saturate(${saturadoInicial}%)`;
    const negativoInicial = negativoImagen.value = 0;
    contenedorImagen.style.filter = `invert(${negativoInicial})`;
});