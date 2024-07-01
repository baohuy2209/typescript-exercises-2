"use strict";
let parametros = process.argv;
let parametroAtomar = parametros[2];
let numeroAComparar = parseInt(parametroAtomar);
let numeroAleatorio = Math.random() * (0 - 5) + 5;
let numeroDeNode = parseInt(numeroAleatorio.toString());
let sonIguales = false;
console.log("Número que pensó nodejs: ", numeroDeNode);
if (!isNaN(numeroAComparar)) {
    console.log("Número que ingresaste: ", numeroAComparar);
    if (numeroDeNode == numeroAComparar) {
        sonIguales = true;
    }
}
else {
    console.log("El parámetro ingresado no es válido");
}
if (sonIguales) {
    console.log("Felicitaciones!");
}
else {
    console.log("Intenta de nuevo.");
}
