let parametros: string[] = process.argv;

let parametroPalabraAtomar: string = parametros[2];
let parametroFlagAtomar: string = parametros[3];
let debeMostrarMayuscula: boolean = false;

console.log("Palabra ingresada: ", parametroPalabraAtomar);

if (parametroFlagAtomar == "--uppercase") {
  debeMostrarMayuscula = true;
} else {
  debeMostrarMayuscula = false;
}

if (debeMostrarMayuscula) {
  let palabraMayuscula = parametroPalabraAtomar.toUpperCase();
  console.log("Palabra en mayuscula: ", palabraMayuscula);
} else {
  console.log("Para mostrar en mayuscula debe pasar el flag --uppercase");
}
