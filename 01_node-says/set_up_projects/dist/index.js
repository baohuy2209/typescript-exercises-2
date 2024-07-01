"use strict";
var title = "Node says ...";
var arr_string = [
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "I",
    "j",
    "k",
];
var maximum_number = 10;
var minimum_number = 5;
var longitude_Aleatoria = Math.random() * (minimum_number - maximum_number) * maximum_number;
var longitude_Palabra = parseInt(longitude_Aleatoria.toString());
var autoPalabra = "";
for (let i = 0; i < longitude_Palabra; i++) {
    let indiceAleatoria = Math.random() * (0 - arr_string.length) + arr_string.length;
    let indiceEnLetras = parseInt(indiceAleatoria.toString());
    autoPalabra += arr_string[indiceEnLetras];
}
function output(a, b) {
    console.info(title);
    console.info("======");
    console.info("longitude of palabra: ", a);
    console.info("palabra general: ", b);
}
output(longitude_Palabra, autoPalabra);
