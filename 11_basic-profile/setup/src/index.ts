let parametros: string[] = process.argv;

let paramNombre: string = parametros[2];
let paramApellido: string = parametros[3];
let paramNickname: string = parametros[4];

//la forma básica de declarar un tipo de dato Object
//con valores estáticos
let perfil: Object = {
  name: paramNombre,
  "second-name": paramApellido,
  nickname: paramNickname,
};

//Pintando el objeto con la ayuda del objeto nativo JSON
//el método **stringify** pinta un objeto con el formato que necesitamos
console.log(JSON.stringify(perfil, null, 2));
