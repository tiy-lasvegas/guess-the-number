var correct = Math.ceil(Math.random()*10);
var form = document.querySelector('form');
var input = document.querySelector('input');
var response = document.querySelector('.response');

form.addEventListener('submit', checkGuess);

function checkGuess (event) {
  event.preventDefault();
  var guess = Number(input.value);
  if (guess === correct) {
    response.textContent = "Correct!!!";
  } else if (guess > correct) {
    response.textContent = guess + " is too high!";
  } else if (guess < correct) {
    response.textContent = guess + " is too low!";
  } else if (isNaN(guess)) {
    response.textContent = guess + " is not a number!";
  }
}