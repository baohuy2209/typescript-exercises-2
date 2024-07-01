let parametros: string[] = process.argv;
let operador: string = parametros[2];
let numbersToParse: string[] = parametros.slice(3, parametros.length);
let numbersToOperate: number[] = [];
let result: number = 0;
numbersToParse.map(function (numberToParse) {
  let numberParsed: number = parseInt(numberToParse);
  if (!isNaN(numberParsed)) {
    numbersToOperate.push(numberParsed);
  } else {
    console.log("ERROR: El valor ", numberToParse, ", no es un número");
  }
});
if (numbersToOperate.length) {
  result = numbersToOperate[0];
}

for (let index: number = 1; index < numbersToOperate.length; index++) {
  let numberToOperate: number = numbersToOperate[index];
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
