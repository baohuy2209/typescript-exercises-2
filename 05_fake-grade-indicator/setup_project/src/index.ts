window.onload = () => {
  let indicator: HTMLElement | null = document.getElementById("indicator");
  setInterval(() => {
    let number = Math.random() * 100;
    indicator!.innerHTML = number.toString();
  }, 500);
};
