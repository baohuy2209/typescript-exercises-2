"use strict";
var title: string = "Node says ...";
var arr_string: string[] = [
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
var maximum_number: number = 10;
var minimum_number: number = 5;

var longitude_Aleatoria: number =
  Math.random() * (minimum_number - maximum_number) * maximum_number;
var longitude_Palabra: number = parseInt(longitude_Aleatoria.toString());
var autoPalabra: string = "";
for (let i: number = 0; i < longitude_Palabra; i++) {
  let indiceAleatoria: number =
    Math.random() * (0 - arr_string.length) + arr_string.length;
  let indiceEnLetras: number = parseInt(indiceAleatoria.toString());
  autoPalabra += arr_string[indiceEnLetras];
}
function output(a: number, b: string) {
  console.info(title);
  console.info("======");
  console.info("longitude of palabra: ", a);
  console.info("palabra general: ", b);
}
output(longitude_Palabra, autoPalabra);
