"use strict";
window.onload = () => {
    var txtMessage = (document.getElementById("txtMessage"));
    var btnGetAlert = (document.getElementById("btnGetAlert"));
    btnGetAlert.addEventListener("click", (event) => {
        var myMessage = txtMessage.value;
        alert(myMessage);
        event.preventDefault();
    });
    document.addEventListener("keydown", (event) => {
        var myMessage = txtMessage.value;
        var enterKeyCode = event.keyCode;
        if (enterKeyCode == 13) {
            alert(myMessage);
        }
    });
};
