"use strict";
/*
  La propiedad "argv" retorna los parámetros en un array de cadenas
*/
let parametros = process.argv;
let sumandoA = parseInt(parametros[2]);
let sumandoB = parseInt(parametros[3]);
/*
  isNaN: es una función nativa de JS que verifica si el valor es **Not A Number**
*/
if (!isNaN(sumandoA) && !isNaN(sumandoB)) {
    console.log("A: ", sumandoA);
    console.log("B: ", sumandoB);
    console.log("TOTAL: ", sumandoA + sumandoB);
}
else {
    console.log("ERROR: Uno de los parámetros no es un número");
}
