window.onload = () => {
  //referencio el element html "indicator"
  let txtMin: HTMLInputElement = <HTMLInputElement>(
    document.getElementById("min")
  ); // get element have id "min"
  let txtMax: HTMLInputElement = <HTMLInputElement>(
    document.getElementById("max")
  ); // get element have id "max"

  let indicador: HTMLElement = document.getElementById("indicador"); // get element have id "indicator"
  let btnActualizar: HTMLElement = document.getElementById("actualizar"); // get element have id "actualizer"

  let rangoMinimo: number = parseInt(txtMin.value); // get value of txtMin element
  let rangoMaximo: number = parseInt(txtMax.value); // get value of txtMax element
  let factorAleatorio: number = 100;
  let gradoAleatorio: number = 0;

  btnActualizar.addEventListener(
    "click",
    function () {
      let rangoMinimo: number = parseInt(txtMin.value);
      let rangoMaximo: number = parseInt(txtMax.value);
      factorAleatorio = rangoMinimo - rangoMaximo + rangoMaximo;
    },
    false
  );

  setInterval(() => {
    //Ingreso el nuevo valor en el elemento para mostrarlo
    gradoAleatorio = Math.random() * factorAleatorio;
    indicador.innerHTML = gradoAleatorio.toString();
  }, 500);
};
