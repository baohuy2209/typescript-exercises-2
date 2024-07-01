"use strict";
let parametros = process.argv;
let parametroAtomar = parametros[2];
let numeroAleatorio = Math.random() * 100;
let debeMostrarEntero = false;
console.log("Número aleatorio: ", numeroAleatorio);
if (parametroAtomar == "--integer") {
    debeMostrarEntero = true;
}
else {
    debeMostrarEntero = false;
}
if (debeMostrarEntero) {
    let numeroEntero = parseInt(numeroAleatorio.toString());
    console.log("Número entero: ", numeroEntero);
}
else {
    console.log("Para mostrar un número entero debe pasar el flag --integer");
}
