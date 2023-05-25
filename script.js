// REQUISITOS

// no debe aceptar letras con acentos ni caracteres especiales

const ingresoTexto = document.getElementById("ingreso-texto")
const botonEncriptar = document.getElementById("boton-encriptar")
const botonDesencriptar = document.getElementById("boton-desencriptar")
const botonCopiar = document.getElementById("boton-copiar")

function encriptar(){

    let llaves = [
        ["e", "enter"],
        ["i", "imes"],
        ["a", "ai"],
        ["o", "ober"],
        ["u", "ufat"]
    ]

    const texto = ingresoTexto.value.toLowerCase();
    var nuevoTexto = texto;

    for (i = 0; i < llaves.length; i++){
        nuevoTexto = nuevoTexto.replaceAll(llaves[i][0],llaves[i][1]);
    }

    document.getElementById("salida-mensaje").innerHTML = nuevoTexto;
    document.getElementById("salida-mensaje").style.height = "80%";
    document.getElementById("salida-mensaje").style.textAlign = "start";
    document.getElementById("dibujo").style.display = "none";
    document.getElementById("boton-copiar").style.display = "block";
    document.getElementById("mensaje-informacion").style.display = "none";
}

function desencriptar(){

    let llaves = [
        ["enter", "e"],
        ["imes", "i"],
        ["ai", "a"],
        ["ober", "o"],
        ["ufat", "u"]
    ]
    const texto = ingresoTexto.value.toLowerCase();
    var nuevoTexto = texto;

    for (i = 0; i < llaves.length; i++){
        nuevoTexto = nuevoTexto.replaceAll(llaves[i][0],llaves[i][1]);
    }

    document.getElementById("salida-mensaje").innerHTML = nuevoTexto;
    document.getElementById("salida-mensaje").style.height = "80%";
    document.getElementById("salida-mensaje").style.textAlign = "start";
    document.getElementById("dibujo").style.display = "none";
    document.getElementById("boton-copiar").style.display = "block";
    document.getElementById("mensaje-informacion").style.display = "none";
    document.getElementById("mensaje-informacion").style.display = "none";
}

function limpiarCampo(){
    ingresoTexto.value = " ";
}

ingresoTexto.addEventListener("click", limpiarCampo)
    

