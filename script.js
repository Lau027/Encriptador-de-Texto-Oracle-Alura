// REQUISITOS

// no debe aceptar letas con acentos ni caracteres especiales

// Debe ser posible convertir una palabra para la versión encriptada también devolver una palabra encriptada para su versión original.
//   "gato" => "gaitober"
//    gaitober" => "gato" 

// La página debe tener campos para inserción del texto que será encriptado o desencriptado, y el usuario debe poder escoger entre as dos opciones.
 
// Un botón que copie el texto encriptado/desencriptado para la sección de transferencia, o sea que tenga la misma funcionalidad del ctrl+C o de la opción "copiar" del menú de las aplicaciones.


let llaves = {
    "e": "enter",
    "i": "imes",
    "a": "ai",
    "o": "ober",
    "u": "ufat"
}
   
const ingresoTexto = document.getElementById("ingreso-texto")
const botonEncriptar = document.getElementById("boton-encriptar")
const botonDesencriptar = document.getElementById("boton-desencriptar")
const botonCopiar = document.getElementById("boton-copiar")


function ocultardibujo() {
    document.getElementById("dibujo").style.display = "none";
}


botonEncriptar.addEventListener("click", ocultardibujo)

