// Question 1: Agata Runowska-McMillan
// This is a number guessing game where the player can choose between three difficulty levels.
// The game starts at a click of one of the three buttons
// The player guesses a randomly generated number within a specified range
// The player gets feedback on whether the guess is too high or too low.
// Once the player guesses the number, they get an alert with congratulatory message
// The game elements are cleared and the guesses are logged into the console

// HTML elements for the game
const userInput = document.createElement("input"); // input for number guesses
const checkButton = document.createElement("button"); // button to click on to check a guess
const feedbackText = document.createElement("p"); // text that tells the user if the number should be higher or lower
checkButton.innerText = "Check";
userInput.id = "guess-input";
checkButton.id = "check-button";
let guesses = []; // an array to store user's guesses as a let to reassign after each game
let targetNum; // a variable to store a number to guess
let firstName = prompt("What's your first name?");
firstName = firstName || "Guest"; // setting "Guest" as a default value to firstName variable

// function to clear the added HTML elements once user wins a game
function clearPage() {
  userInput.remove();
  checkButton.remove();
  feedbackText.remove();
}

// function to log user guesses into the console
function logGuesses() {
  console.log(`${firstName}, the correct number was ${targetNum}, here are your guesses: `);
  for (let i = 0; i < guesses.length; i++) {
    console.log(guesses[i]);
  }
}

// function that checks each guess and gives feedback to the user
function checkGuess() {
  const guess = userInput.value; // user input saved into a variable
  // conditional statement to check user's guess against variable targetNum
  if (Number(guess) === targetNum) {
    guesses.push(guess);
    logGuesses();
    feedbackText.innerText = "";
    alert(`Congratulations, ${firstName}! You guessed the number in ${guesses.length} guesses! 🥳`);
    checkButton.removeEventListener("click", checkGuess);
    clearPage();
  } else if (Number(guess) < targetNum && guess !== "") {
    guesses.push(guess);
    userInput.value = "";
    feedbackText.innerText = `${firstName}, the number is higher. Try again.`;
    userInput.focus();
  } else if (Number(guess) > targetNum) {
    guesses.push(guess);
    userInput.value = "";
    feedbackText.innerText = `${firstName}, the number is lower. Try again.`;
    userInput.focus();
  } else {
    userInput.value = "";
    feedbackText.innerText = `${firstName}, this is not a number. Try again.`;
    userInput.focus();
  }
  userInput.value = ""; // Clear the input field after each game
}

// the game function that takes a parameter of difficulty level
function startNewGame(difficulty) {
  // Adding the input, button, and feedback text elements to the "game-elements" div element
  const numberGuess = document.querySelector(".game-elements");
  numberGuess.appendChild(userInput);
  numberGuess.appendChild(checkButton);
  numberGuess.appendChild(feedbackText);
  feedbackText.innerText = ""; // set the feedback text to empty when a new game starts
  userInput.focus(); // focus on user input
  checkButton.addEventListener("click", checkGuess); // checkGuess function will be called when user clicks on the checkButton
  guesses = []; // a new empty array assigned to variable guesses
  // conditional statement to assign a random number to variable targetNum based on difficulty
  if (difficulty === "easy") {
    targetNum = Math.floor((Math.random() * 10) + 1);
  } else if (difficulty === "medium") {
    targetNum = Math.floor((Math.random() * 50) + 1);
  } else {
    targetNum = Math.floor((Math.random() * 100) + 1);
  }
}

// this is a little extra function, so that I can use boolean value explicitly in case it's required
function easterBunny() {
  const userDoubleClicked = true;
  if (userDoubleClicked) {
    console.log("🐰🐰🐰");
  }
}
