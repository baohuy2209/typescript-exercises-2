"use strict";
window.onload = () => {
    let indicator = document.getElementById("indicator");
    setInterval(() => {
        let number = Math.random() * 100;
        indicator.innerHTML = number.toString();
    }, 500);
};
