var ingresoTexto = document.getElementById("ingreso-texto");
var salidaMensaje = document.getElementById("salida-mensaje");
var llaves = [["e", "enter"],["i", "imes"],["a", "ai"],["o", "ober"],["u", "ufat"]];

function encriptar(mensaje){

    var nuevoTexto = ingresoTexto.value;

    for (i = 0; i < llaves.length; i++){
        nuevoTexto = nuevoTexto.replaceAll(llaves[i][0],llaves[i][1]);
    }
    return nuevoTexto;
}

function botonEncriptar(){

    if (ingresoTexto.value != 0){

    var textoEncriptado = encriptar(ingresoTexto.value);
    salidaMensaje.value = textoEncriptado;
    salidaMensaje.style.height = "80%";
    salidaMensaje.style.textAlign = "start";
    document.getElementById("dibujo").style.display = "none";
    document.getElementById("boton-copiar").style.display = "block";
    document.getElementById("mensaje-informacion").style.display = "none";

    };
};

function desencriptar(mensaje){

    var nuevoTexto = ingresoTexto.value;

    for (i = 0; i < llaves.length; i++){
        nuevoTexto = nuevoTexto.replaceAll(llaves[i][1],llaves[i][0]);
    };

    return nuevoTexto;
}

function botonDesencriptar(){

    if (ingresoTexto.value != 0){

    var textoDesencriptado = desencriptar(ingresoTexto.value);
    salidaMensaje.value = textoDesencriptado;
    salidaMensaje.style.height = "80%";
    salidaMensaje.style.textAlign = "start";
    document.getElementById("dibujo").style.display = "none";
    document.getElementById("boton-copiar").style.display = "block";
    document.getElementById("mensaje-informacion").style.display = "none";

    };
};

function copiar(){

    var contenido =  salidaMensaje;
    navigator.clipboard.writeText(contenido.value);
    ingresoTexto.value = "Ingrese el texto aquí"
}

ingresoTexto.addEventListener("click", () =>{
    ingresoTexto.value = " ";
})
