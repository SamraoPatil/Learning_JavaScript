const qrContainer = document.querySelector(".qr-container");
const generateQRButton = document.querySelector(".generate-button");
const qrTextInput = document.querySelector(".qrtext");
const errorMsg = document.querySelector(".error-msg");

generateQRButton.addEventListener("click", () => {
  validateInput(qrTextInput);
});

function validateInput(qrTextInput) {
  if (qrTextInput.value.trim().length > 0) {
    generateQRCode();
  } else {
    qrContainer.innerHTML = "";
    errorMsg.textContent = "Enter a valid Input";
  }
}

function generateQRCode() {
  qrContainer.innerHTML = "";

  // in order to use the third party lib package:
  //  we have to create a  new instance
  new QRCode(qrContainer, {
    text: qrTextInput.value,
    heigth: 350,
    width: 350,
    colorLight: "#fff",
    colorDark: "#000",
  });

  qrTextInput.value = "";
  errorMsg.textContent = "";
}
