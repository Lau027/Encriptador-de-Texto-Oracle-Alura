// REQUISITOS

// no debe aceptar letras con acentos ni caracteres especiales

const ingresoTexto = document.getElementById("ingreso-texto")

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
}

function copiar(){

    var contenido = document.getElementById("salida-mensaje");
    navigator.clipboard.writeText(contenido.innerHTML)
}

ingresoTexto.addEventListener("click", ()=>{
    ingresoTexto.value = " ";
    document.getElementById("dibujo").style.display = "block";
    document.getElementById("boton-copiar").style.display = "none";
    document.getElementById("mensaje-informacion").style.display = "block";
    document.getElementById("salida-mensaje").style.textAlign = "center";
    document.getElementById("salida-mensaje").textContent = "Ningún mensaje fue encontrado";
    document.getElementById("salida-mensaje").style.height = "auto";
})