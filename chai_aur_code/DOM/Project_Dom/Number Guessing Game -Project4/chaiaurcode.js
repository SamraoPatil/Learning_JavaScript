let random = Math.round(Math.random() * 100 + 1);

const submit = document.querySelector("#subt");
const userInput = document.querySelector("#guessField");
const guessSlot = document.querySelector(".guesses");
const remaining = document.querySelector(".remainingGuess");
const lowOrHi = document.querySelector(".lowOrHi");
const startOver = document.querySelector(".resultParas");

const p = document.createElement("p");

// submited values of user..>
let prevGuess = [];

let numOfGuess = 0;
let playGame = true;

//Logic:

if (playGame) {
  submit.addEventListener("click", function (event) {
    event.preventDefault();
    const guess = parseInt(userInput.value);
    //console.log(guess);
    validateGuess(guess);
  });
}

function validateGuess(guess) {
  if (isNaN(guess) || guess === "") {
    alert("Please enter  a valid number");
  } else if (guess < 1) {
    alert("Please enter a number more than 1");
  } else if (guess > 100) {
    alert("Please enter a number less than 100");
  } else {
    prevGuess.push(guess);
    if (numOfGuess === 10) {
      endGame();
      displayMsg(`Game Over, Random Number was ${random}`);
    } else {
      displayGuess(guess);
      checkGuess(guess);
    }
  }
}

function checkGuess(guess) {
  if (guess === random) {
    displayMsg(`Your Guess is right,, You Won the game `);
    endGame();
    newGame();
  } else if (guess < random) {
    displayMsg(`Your Guess is wrong,, Number is too small `);
  } else if (guess > random) {
    displayMsg(`Your Guess is wrong,, Number is too high `);
  }
}

function displayGuess(guess) {
  userInput.value = "";
  guessSlot.innerHTML += `${guess} ,`;
  numOfGuess++;
  remaining.innerHTML = `${10 - numOfGuess}`;
}

function displayMsg(message) {
  lowOrHi.innerHTML = `<h2>${message}</h2>`;
}

function endGame() {
  userInput.value = "";
  userInput.setAttribute("disabled", "");
  p.classList.add("button");
  p.innerHTML = `<h2 id="newGame">Start New Game</h2>`;
  startOver.appendChild(p);
  playGame = false;
  newGame();
}

function newGame() {
  const newGameButton = document.querySelector("#newGame");

  newGameButton.addEventListener("click", function (event) {
    random = Math.round(Math.random() * 100 + 1);
    prevGuess = [];
    numOfGuess = 0;
    guessSlot.innerHTML = "";
    remaining.innerHTML = `${10 - numOfGuess}`;
    userInput.removeAttribute("disabled");
    startOver.removeChild(p);
    playGame = true;
  });
}
