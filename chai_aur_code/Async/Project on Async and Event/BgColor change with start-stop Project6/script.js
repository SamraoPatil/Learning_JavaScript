// first will start with generating a random color:

const randomColor = function () {
  const hexValue = "0123456789ABCDEF"; // generally the range of the HexCode of color ie from 0-9 and A-F
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += hexValue[Math.floor(Math.random() * 16)];
    // also go with Math.floor or else it will give undefined values.

    //  here in random we multiple by 16 as we want a range of numbers from 0 to 16;
    // remember to do += when changing var color;
  }
  return color;
};
// console.log(randomColor());

let control; // this will be the variable to stop the setInterval function

const startChangingColor = function () {
  function changeColor() {
    document.body.style.backgroundColor = randomColor();
  }
  if (!control) {
    control = setInterval(changeColor, 1000);
  }
  // we added this if check to optimize our code and save memory:
  // control = setInterval(changeColor, 1000);
};

const stopChangingColor = function () {
  clearInterval(control);
  control = null;
  // this will flush our control variable: optimize our code

  // document.body.style.backgroundColor = "#212121";
};

document.getElementById("start").addEventListener("click", startChangingColor);
document.getElementById("stop").addEventListener("click", stopChangingColor);
