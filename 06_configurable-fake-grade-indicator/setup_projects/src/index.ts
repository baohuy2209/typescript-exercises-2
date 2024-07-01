window.onload = () => {
  let min: HTMLElement = <HTMLElement>document.getElementById("min");
  let max: HTMLElement = <HTMLElement>document.getElementById("max");

  let indicador: HTMLElement = <HTMLElement>(
    document.getElementById("indicador")
  );
  let btnActualizar: HTMLElement = <HTMLElement>(
    document.getElementById("actualizar")
  );

  let min_number = parseInt(min.toString());
  let max_number = parseInt(max.toString());
  let factor: number = 100;
  let grado: number = 0;

  btnActualizar.addEventListener(
    "click",
    function () {
      factor = (min_number - max_number) * max_number;
    },
    false
  );
  setInterval(() => {
    grado = Math.random() * factor;
    indicador.innerHTML = grado.toString();
  });
};
