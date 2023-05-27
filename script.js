let ingresoTexto = document.getElementById("ingreso-texto");
let salidaMensaje = document.getElementById("salida-mensaje");


function encriptar(mensaje){

    let llaves = [["e", "enter"],["i", "imes"],["a", "ai"],["o", "ober"],["u", "ufat"]];
    const mensajeEncriptado = ingresoTexto.value.toLowerCase();
    var nuevoTexto = mensajeEncriptado;

    for (i = 0; i < llaves.length; i++){
        nuevoTexto = nuevoTexto.replaceAll(llaves[i][0],llaves[i][1]);
    };

    return nuevoTexto;
}

function botonEncriptar(){

    if (ingresoTexto.value != 0){

    let textoEncriptado = encriptar(ingresoTexto.value);
    salidaMensaje.value = textoEncriptado;
    salidaMensaje.style.height = "80%";
    salidaMensaje.style.textAlign = "start";
    document.getElementById("dibujo").style.display = "none";
    document.getElementById("boton-copiar").style.display = "block";
    document.getElementById("mensaje-informacion").style.display = "none";

    };
};

function desencriptar(mensaje){

    let llaves = [["enter", "e"],["imes", "i"],["ai", "a"],["ober", "o"],["ufat", "u", ]];
    const mensajeDesencriptado = ingresoTexto.value.toLowerCase();
    var nuevoTexto = mensajeDesencriptado;

    for (i = 0; i < llaves.length; i++){
        nuevoTexto = nuevoTexto.replaceAll(llaves[i][0],llaves[i][1]);
    };

    return nuevoTexto;
}

function botonDesencriptar(){

    if (ingresoTexto.value != 0){

    let textoDesencriptado = desencriptar(ingresoTexto.value);
    salidaMensaje.value = textoDesencriptado;
    salidaMensaje.style.height = "80%";
    salidaMensaje.style.textAlign = "start";
    document.getElementById("dibujo").style.display = "none";
    document.getElementById("boton-copiar").style.display = "block";
    document.getElementById("mensaje-informacion").style.display = "none";

    };
};

function copiar(){

    let contenido = document.getElementById("salida-mensaje");
    navigator.clipboard.writeText(contenido.value)
    ingresoTexto.value = " ";
}
