var input = document.querySelector("input");
var form = document.querySelector("#guess");
var correctAnswer = Math.ceil(Math.random() * 10);
var response = document.querySelector('.response');

form.addEventListener('submit', checkNumber)

function checkNumber(e) {
  e.preventDefault();
  
  var value = Number(input.value);
  
  if (value === correctAnswer) {
    response.innerHTML = 'YAY YOU DID IT!!!!!';
  } else if (value > correctAnswer) {
    response.innerHTML = 'Too Big';
  } else if (value < correctAnswer) {
    response.innerHTML = 'Too Small';
  } else if (isNaN(value)) {
    response.innerHTML = 'That is not a number';
  }
}