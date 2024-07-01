"use strict";
let parametros = process.argv;
let paramNombre = parametros[2];
let paramAnio = parametros[3];
//la forma básica de declarar un tipo de dato Object
//con valores estáticos
let objetoBase = {
    name: "jhon",
    year: 20,
};
//Creamos una referencia de nuestro objeto base
//Ahora como un tipo **any** porque en la especificación de un
//tipo Object nativo en typescript no permite extenderle propiedades de forma dinámica.
//Ejemplo: MiObjeto.miNuevaPropiedad = "xD";
//eso no es válido si MiObjeto es un tipo **Object**,
//si es **any** si sería válido.
let referenciaObjetoBase = objetoBase;
if (typeof paramNombre !== "undefined") {
    referenciaObjetoBase.name = paramNombre;
}
if (typeof paramAnio !== "undefined") {
    referenciaObjetoBase.year = paramAnio;
}
//la referencia también altera al objeto base, ya que no es un clon del objetoBase
//para clonar un objeto es mediante otra sintaxis.
console.log("objetoBase", JSON.stringify(objetoBase, null, 2));
console.log("referenciaObjetoBase", JSON.stringify(referenciaObjetoBase, null, 2));
