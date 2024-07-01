"use strict";
window.onload = () => {
    let min = document.getElementById("min");
    let max = document.getElementById("max");
    let indicador = (document.getElementById("indicador"));
    let btnActualizar = (document.getElementById("actualizar"));
    let min_number = parseInt(min.toString());
    let max_number = parseInt(max.toString());
    let factor = 100;
    let grado = 0;
    btnActualizar.addEventListener("click", function () {
        factor = (min_number - max_number) * max_number;
    }, false);
    setInterval(() => {
        grado = Math.random() * factor;
        indicador.innerHTML = grado.toString();
    });
};
