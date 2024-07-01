"use strict";
let parametros = process.argv;
let paramNombre = parametros[2];
let paramApellido = parametros[3];
let paramNickname = parametros[4];
//la forma básica de declarar un tipo de dato Object
//con valores estáticos
let perfil = {
    name: paramNombre,
    "second-name": paramApellido,
    nickname: paramNickname,
};
//Pintando el objeto con la ayuda del objeto nativo JSON
//el método **stringify** pinta un objeto con el formato que necesitamos
console.log(JSON.stringify(perfil, null, 2));
