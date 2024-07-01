"use strict";
let parametros = process.argv;
let operador = parametros[2];
let numbersToParse = parametros.slice(3, parametros.length);
let numbersToOperate = [];
let result = 0;
numbersToParse.map(function (numberToParse) {
    let numberParsed = parseInt(numberToParse);
    if (!isNaN(numberParsed)) {
        numbersToOperate.push(numberParsed);
    }
    else {
        console.log("ERROR: El valor ", numberToParse, ", no es un número");
    }
});
if (numbersToOperate.length) {
    result = numbersToOperate[0];
}
for (let index = 1; index < numbersToOperate.length; index++) {
    let numberToOperate = numbersToOperate[index];
    switch (operador) {
        case "+":
            result += numberToOperate;
            break;
        case "-":
            result -= numberToOperate;
            break;
        case "x":
            result *= numberToOperate;
            break;
        case "/":
            result /= numberToOperate;
            break;
    }
}
