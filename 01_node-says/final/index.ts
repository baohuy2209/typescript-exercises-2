"use strict";

//declarando una variable tipo cadena
var titulo: string = "Node says...";

// create an string array
var letras: string[] = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k"];

// create minimum number
var rangoMinimo: number = 5;
// create maximum number
var rangoMaximo: number = 10;

// create longtitude of Aleatoria
var longitudAleatoria: number =
  Math.random() * (rangoMinimo - rangoMaximo) + rangoMaximo;
// create latitude of Palabra
var longitudPalabra: number = parseInt(longitudAleatoria.toString()); // convert to integer nummber

var autoPalabra: string = ""; // create a empty string
for (let i: number = 0; i < longitudPalabra; i++) {
  let indiceAleatorio: number =
    Math.random() * (0 - letras.length) + letras.length;
  let indiceEnLetras: number = parseInt(indiceAleatorio.toString());
  autoPalabra += letras[indiceEnLetras];
}

//Gracias a nuestra configuración en el archivo tsconfig.json "noImplicitAny"
//En caso lo establecemos a 'true', hará que cuando transpilemos debemos ser explicito con los parametros
//En caso sea 'false', lo ignorará

/* 
    Aplicando una pequeña funcion para mostrar los mensajes, 
    teniendo en cuenta que nuestro archivo tsconfig.json tiene como "true" la propiedad "noImplicitAny"
*/

function output(longitudPalabraGenerada: number, palabraGenerada: string) {
  console.info(titulo);
  console.info("======");
  //mostramos la longitud
  console.info("longitud de la nueva palabra: ", longitudPalabraGenerada);
  console.info("palabra generada: ", palabraGenerada);
}

//teniendo como ejemplo la funcion de arriba debemos indicar :
// - los parámetros de la función si o si debe indicar de qué tipo son

//Si lo tubieramos en 'false' esa propiedad, la función sería
/* 
function output(longitudPalabraGenerada, palabraGenerada){
    console.info(titulo);
    console.info("======");
    //mostramos la longitud
    console.info("longitud de la nueva palabra: ", longitudPalabraGenerada);
    console.info("palabra generada: ", palabraGenerada);
}
*/

//SALIDA EN CONSOLA
//=================
output(longitudPalabra, autoPalabra);
