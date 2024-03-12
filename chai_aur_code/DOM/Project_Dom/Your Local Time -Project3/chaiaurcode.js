const clock = document.getElementById("clock");

// now we have to display time which has to run continuosly:

setInterval(function () {
  let date = new Date();
  //console.log(date.toLocaleTimeString());
  clock.innerHTML = date.toLocaleTimeString();
}, 1000);
