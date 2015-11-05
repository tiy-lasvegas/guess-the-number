var input = document.querySelector("input");
var form = document.querySelector("form");
var response = document.querySelector(".response");
var resetBtn = document.querySelector("#reset");
var timerEl = document.querySelector("#timer");
var womp = document.querySelector("#womp");
var cheer = document.querySelector("#cheer");
var correct, counter;

function createAnswer() {
  correct = Math.ceil(Math.random() * 10);
  counter = 0;
}

var timer = setInterval(function() {
  var count = Number(timerEl.innerHTML);
  count += 1;
  document.querySelector("#timer").innerHTML = count;
}, 1000);

createAnswer();

resetBtn.addEventListener("click", function(event){
  window.location = "";
});

form.addEventListener("submit", listener);

function listener(event) {
  event.preventDefault();
  counter += 1;
  var guess = Number(input.value);
  if (guess === correct) {
    var res = "Correct!!!! It took you " + counter + " tr";
    if (counter === 1) {
      res = res + "y.";
      response.innerHTML = res;
    } else {
      res = res + "ies.";
      response.innerHTML = res;
    }

    clearInterval(timer);
    var time = timerEl.innerHTML;
    timerEl.innerHTML = "It took you " + time + " seconds";
    cheer.play();
  } else if (guess > correct) {
    response.innerHTML = guess + " is too high!";
    womp.play();
  } else if (guess < correct) {
    response.innerHTML = guess + " is too low!";
    womp.play();
  } else {
    response.innerHTML = "'" + input.value + "' is not a number!";
    womp.play();
  }
}