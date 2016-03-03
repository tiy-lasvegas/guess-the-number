var correct = Math.ceil(Math.random() * 10);

var userInput = document.querySelector("input");
var guessForm = document.querySelector("#guess");
var response = document.querySelector(".response");
var cheer = document.querySelector("#cheer");
var womp = document.querySelector("#womp");

guessForm.addEventListener("submit", checkGuess)

function checkGuess (e) {
  e.preventDefault();
  var guess = Number(userInput.value);
  if (guess === correct) {
    response.innerHTML = "Yay";
    cheer.play();
  } else if (guess > correct) {
    response.innerHTML = guess + " is too high";
    womp.play();
  } else if (guess < correct) {
    response.innerHTML = guess + " is too low";
    womp.play();
  } else if (isNaN(guess)) {
    response.innerHTML = "\"" + userInput.value + "\" is not a number. Bonehead."
    womp.play();
  }
}