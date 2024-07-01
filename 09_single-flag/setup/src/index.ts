let parametros: string[] = process.argv;

let parametroAtomar: string = parametros[2];
let numeroAleatorio: number = Math.random() * 100;
let debeMostrarEntero: boolean = false;

console.log("Número aleatorio: ", numeroAleatorio);

if (parametroAtomar == "--integer") {
  debeMostrarEntero = true;
} else {
  debeMostrarEntero = false;
}

if (debeMostrarEntero) {
  let numeroEntero = parseInt(numeroAleatorio.toString());
  console.log("Número entero: ", numeroEntero);
} else {
  console.log("Para mostrar un número entero debe pasar el flag --integer");
}
