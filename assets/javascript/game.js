var wins = 0;
var losses = 0;
var guessesLeft = 10
var guessesDone = [];
var computerChoices = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"]


document.onkeyup = function(event) {

    var userChoice = event.key;

    
    guessesDone.push(" " + userChoice);


var answer = computerChoices[Math.floor(Math.random() * computerChoices.length)];



if (answer === userChoice.toLowerCase()) {
    wins++;
    guessesDone = [];
} if (answer !== userChoice) {
    guessesLeft = guessesLeft-1;
} 
if (guessesLeft <0) {
    guessesLeft =10; 
    losses++;
    guessesDone = [];
}
 

var html =
        "<h1> Guess what letter I'm thinking of </h1>"+
          "<p>You chose: " + userChoice + "</p>" +
          "<p>The computer chose: " + answer + "</p>" +
          "<p>wins: " + wins + "</p>" +
          "<p>losses: " + losses + "</p>"+
          "<p>Guesses Left: " +guessesLeft+ "</p>"+
          "<p>Guesses so Far: " +guessesDone+ "<p/>";

        // Set the inner HTML contents of the #game div to our html string
        document.querySelector("#game").innerHTML = html;
}

