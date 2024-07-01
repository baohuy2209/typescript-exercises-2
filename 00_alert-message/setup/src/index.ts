window.onload = () => {
  var txtMessage: HTMLInputElement = <HTMLInputElement>(
    document.getElementById("txtMessage")
  ); // get the element have id = "txtMessage"
  var btnGetAlert: HTMLInputElement = <HTMLInputElement>(
    document.getElementById("btnGetAlert")
  ); // get the element have id = "btnGetAlert"
  btnGetAlert.addEventListener("click", (event) => {
    var myMessage: string = txtMessage.value;
    alert(myMessage);
    event.preventDefault();
  }); // handle event when click on the button
  document.addEventListener("keydown", (event) => {
    var myMessage: string = txtMessage.value;
    var enterKeyCode: number = event.keyCode;
    if (enterKeyCode == 13) {
      alert(myMessage);
    }
  }); // handle event when keydown on web page
};
