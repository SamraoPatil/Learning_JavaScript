const buttons = document.querySelectorAll(".button");
const body = document.querySelector("body");

//Adding event to buttons:

buttons.forEach(function (button) {
  console.log(button);
  button.addEventListener("click", function (event) {
    console.log(event);
    console.log(event.target); // tells from where the event is coming from..
    //console.log(event.target.id); // tells from where the event is coming from..
    const value = event.target.id;
    switch (value) {
      case "grey":
        body.style.backgroundColor = event.target.id;
        break;
      case "white":
        body.style.backgroundColor = event.target.id;
        break;
      case "blue":
        body.style.backgroundColor = event.target.id;
        break;
      case "yellow":
        body.style.backgroundColor = event.target.id;
        break;
    }
  });
});
