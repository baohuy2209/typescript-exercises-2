let parametros: string[] = process.argv;

let parametroAtomar: string = parametros[2];
let numeroAComparar: number = parseInt(parametroAtomar);
let numeroAleatorio: number = Math.random() * (0 - 5) + 5;
let numeroDeNode: number = parseInt(numeroAleatorio.toString());
let sonIguales: boolean = false;

console.log("Número que pensó nodejs: ", numeroDeNode);

if (!isNaN(numeroAComparar)) {
  console.log("Número que ingresaste: ", numeroAComparar);
  if (numeroDeNode == numeroAComparar) {
    sonIguales = true;
  }
} else {
  console.log("El parámetro ingresado no es válido");
}

if (sonIguales) {
  console.log("Felicitaciones!");
} else {
  console.log("Intenta de nuevo.");
}
