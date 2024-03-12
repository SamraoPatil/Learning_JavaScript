const hexBtn = document.querySelector(".hex-btn");
const hexColorValue = document.querySelector(".hex-Color-Value");
const hexColorContainer = document.querySelector(".hexContainer");
const hexColorCopyBtn = document.querySelector(".hex-copy-btn");

hexBtn.addEventListener("click", (event) => {
  let characterSet = "0123456789ABCDEF";
  let hexcolorcode = "";
  for (let i = 0; i < 6; i++) {
    hexcolorcode += characterSet.charAt(
      Math.floor(Math.random() * characterSet.length)
    );
    console.log(hexcolorcode);
  }
  console.log(hexcolorcode);
  hexColorValue.textContent = `#${hexcolorcode}`;

  hexColorContainer.style.backgroundColor = `#${hexcolorcode}`;
  hexBtn.style.color = `#${hexcolorcode}`;
});

function copyHexColor() {
  navigator.clipboard.writeText(hexColorValue.textContent);
  alert("Hex Color Value Copied");
}

hexColorCopyBtn.addEventListener("click", copyHexColor);

// =====================================================
const redSlider = document.getElementById("red");
const redValue = document.getElementById("redValue");

const greenSlider = document.getElementById("green");
const greenValue = document.getElementById("greenValue");

const blueSlider = document.getElementById("blue");
const blueValue = document.getElementById("blueValue");

const rgbContainer = document.querySelector(".rgbContainer");

const rgbColorCopyBtn = document.querySelector(".rgb-copy-btn");

const rgbColorValue = document.querySelector(".rgb-Color-Value");

redSlider.addEventListener("input", updateColor);
greenSlider.addEventListener("input", updateColor);
blueSlider.addEventListener("input", updateColor);

function updateColor() {
  const red = redSlider.value;
  const green = greenSlider.value;
  const blue = blueSlider.value;

  redValue.textContent = red;
  greenValue.textContent = green;
  blueValue.textContent = blue;

  rgbColorValue.textContent = `rgb(${redValue.textContent},${greenValue.textContent},${blueValue.textContent})`;

  rgbContainer.style.backgroundColor = `rgb(${red},${green},${blue})`;
}

function copyRGBColor() {
  navigator.clipboard.writeText(rgbColorValue.textContent);
  alert("RGB Color Value Copied");
}

rgbColorCopyBtn.addEventListener("click", copyRGBColor);
