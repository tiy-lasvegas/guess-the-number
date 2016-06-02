var guess = document.querySelector("input");
var correct = Math.ceil(Math.random() * 100);
var form = document.querySelector("#guess");
var response = document.querySelector(".response");
var log = document.querySelector(".log");
var cheer = document.querySelector("#cheer");
var womp = document.querySelector("#womp");
var counter = document.querySelector(".countup");

console.log(correct);

var countHandler = setInterval(function(){
  var counterNum = Number(counter.innerHTML);
  if (isNaN(counterNum)) {
    counterNum = 0;
  }
  counterNum += 1;
  counter.innerHTML = counterNum;
}, 1000)

form.addEventListener("submit", checkAnswer);

function checkAnswer(e) {
  var guessValue = guess.value;

  e.preventDefault();
  
  guessValue = Number(guessValue);

  if (isNaN(guessValue)) {
    response.innerHTML = "'" + guess.value + "' is not a number!";
    womp.play();
  } else {
    if (guessValue === correct) {
      response.innerHTML = "Correct!";
      cheer.play();
      clearInterval(countHandler);
      var counted = counter.innerHTML;
      counter.innerHTML = "It took you " + counted + " seconds!";
      logIt('green', guessValue);
    } else {
      if (guessValue < correct) {
        if (correct - guessValue > 1) {
          response.innerHTML = "Too Low!";
          womp.play();
          logIt('inherit', guessValue);
        } else {
          response.innerHTML = "You're so close!";
          logIt('blue', guessValue);
        }
      } else {
        if (guessValue - correct > 1) {
          response.innerHTML = "Too High!";
          womp.play();
          logIt('inherit', guessValue);
        } else {
          response.innerHTML = "You're so close!";
          logIt("blue", guessValue);
        }
      }
    }
  }
}

function logIt(color, guessValue) {
  if (log.innerHTML === '') {
    log.innerHTML = "<span style='color:" + color + "'>" + guessValue + "</span>";
  } else {
    log.innerHTML = log.innerHTML + ", <span style='color:" + color + "'>" + guessValue + "</span>";
  }
}