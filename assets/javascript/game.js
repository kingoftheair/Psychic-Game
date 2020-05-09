//game stats
var wins = 0;
var losses = 0;
var guessesLeft = 10;
var guessesDone = [];

//computer choices
var computerChoices = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];

//when a guess is made
document.onkeyup = function (event) {
  var userChoice = event.key;
  guessesDone.push(" " + userChoice);

  var answer =
    computerChoices[Math.floor(Math.random() * computerChoices.length)];

  // resets game if user wins
  if (answer === userChoice.toLowerCase()) {
    wins++;
    alert("You win!!!");
    guessesDone = [];
    guessesLeft = 10;
  }
  if (answer !== userChoice) {
    guessesLeft = guessesLeft - 1;
  }

  //resets the guesses for game if user loses
  if (guessesLeft < 0) {
    guessesLeft = 10;
    alert("You have lost battle...but not the war, please try again!");
    losses++;
    guessesDone = [];
  }

  var html =
    "<h1> Guess what letter I'm thinking of </h1>" +
    "<p>You chose: " +
    userChoice +
    "</p>" +
    "<p>The computer chose: " +
    answer +
    "</p>" +
    "<p>wins: " +
    wins +
    "</p>" +
    "<p>losses: " +
    losses +
    "</p>" +
    "<p>Guesses Left: " +
    guessesLeft +
    "</p>" +
    "<p>Guesses so Far: " +
    guessesDone +
    "<p/>";

  // Set the inner HTML contents of the #game div to our html string
  document.querySelector("#game").innerHTML = html;
};
