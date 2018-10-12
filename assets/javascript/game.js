var wins = 0;
var losses = 0;
var guessesleft = [1, 2, 3, 4 ,5 ,6 ,7, 8, 9, 10];
var guessesDone = "";
var computerChoices = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"]


document.onkeyup = function(event) {

    var userChoice = event.key;


var answer = computerChoices[Math.floor(Math.random() * computerChoices.length)];



if (answer === userChoice) {
    win++;
} else {
    losses++;
}

var html =
          "<p>You chose: " + userChoice + "</p>" +
          "<p>The computer chose: " + answer + "</p>" +
          "<p>wins: " + wins + "</p>" +
          "<p>losses: " + losses + "</p>" ;
          "<p>Guesses Left: " +guessesleft+ "</p>";

        // Set the inner HTML contents of the #game div to our html string
        document.querySelector("#game").innerHTML = html;
}
