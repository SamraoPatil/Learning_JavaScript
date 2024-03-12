//  first select the whole form because in form we have the submit button:
// here will use the submit event.

// do not try to take the values of height and weight directly here outside the form..
// if u do so then , when the page refresh the values of height and weight gets sets to zero and that value is send to js
// so in order to get the correct values after clicking submit buttton we do select height weight inside form..

const form = document.querySelector("form");

form.addEventListener("submit", function (event) {
  event.preventDefault(); // this will prevent the default submission of the values to the database.
  const height = parseInt(document.querySelector("#height").value); //converting string value to int
  const weight = parseInt(document.querySelector("#weight").value);
  const result = document.querySelector("#results");

  if (height === "" || height < 0 || isNaN(height)) {
    result.innerHTML = `Please give a Valid Height : ${height}`;
  } else if (weight === "" || weight < 0 || isNaN(weight)) {
    result.innerHTML = `Please give a Valid Weight : ${weight}`;
  } else {
    const bmi = (weight / ((height * height) / 10000)).toFixed(2);
    result.innerHTML = `<span>${bmi}</span>`;
  }
});

// go to timestamp : 40:46.
