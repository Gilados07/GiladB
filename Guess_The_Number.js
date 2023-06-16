var MAX_GUESSES = 5;
var guessCount = 0;
var randomNumbers;

function generateRandomNumbers() {
  var numbers = [];
  for (var i = 0; i < 3; i++) {
    numbers.push(Math.floor(Math.random() * 10));
  }
  return numbers;
}

function resetGame() {
  randomNumbers = generateRandomNumbers();
  guessCount = 0;
  document.getElementById('guessInput1').value = "";
  document.getElementById('guessInput2').value = "";
  document.getElementById('guessInput3').value = "";
  document.getElementById('resultText').innerHTML = "";
}

function checkGuess() {
    var guessInput1 = document.getElementById('guessInput1');
    var guessInput2 = document.getElementById('guessInput2');
    var guessInput3 = document.getElementById('guessInput3');
    var resultText1 = document.getElementById('resultText1');
    var resultText2 = document.getElementById('resultText2');
    var resultText3 = document.getElementById('resultText3');
    var resultText = document.getElementById('resultText');
  
    var guess1 = parseInt(guessInput1.value);
    var guess2 = parseInt(guessInput2.value);
    var guess3 = parseInt(guessInput3.value);
  
    if (isNaN(guess1) || isNaN(guess2) || isNaN(guess3) || guess1 < 0 || guess1 > 9 || guess2 < 0 || guess2 > 9 || guess3 < 0 || guess3 > 9) {
      resultText.innerHTML = "Please enter valid 1-digit numbers (0-9).";
      resultText.style.color = "#f00";
    } else {
      guessCount++;
  
      if (guess1 === randomNumbers[0]) {
        resultText1.innerHTML = "=";
      } else if (guess1 < randomNumbers[0]) {
        resultText1.innerHTML = "↑";
      } else {
        resultText1.innerHTML = "↓";
      }
  
      if (guess2 === randomNumbers[1]) {
        resultText2.innerHTML = "=";
      } else if (guess2 < randomNumbers[1]) {
        resultText2.innerHTML = "↑";
      } else {
        resultText2.innerHTML = "↓";
      }
  
      if (guess3 === randomNumbers[2]) {
        resultText3.innerHTML = "=";
      } else if (guess3 < randomNumbers[2]) {
        resultText3.innerHTML = "↑";
      } else {
        resultText3.innerHTML = "↓";
      }
  
      var result = "";
  
      if (guess1 === randomNumbers[0] && guess2 === randomNumbers[1] && guess3 === randomNumbers[2]) {
        result = "Congratulations! You guessed all the numbers correctly.";
        resultText.style.color = "#4CAF50";
        disableGuessInputs();
      } else if (guessCount === MAX_GUESSES) {
        result = "Sorry, you ran out of guesses. The correct numbers were " + randomNumbers.join(", ") + ".";
        resultText.style.color = "#f00";
        disableGuessInputs();
      } else {
        result = "Remaining guesses: " + (MAX_GUESSES - guessCount);
        resultText.style.color = "#333";
      }
  
      resultText.innerHTML = result;
  
      guessInput1.value = "";
      guessInput2.value = "";
      guessInput3.value = "";
    }
  }
  

  
  

  
  
  


function disableGuessInputs() {
  var guessInputs = document.querySelectorAll('input[type="number"]');
  var guessButton = document.querySelector('button');

  guessInputs.forEach(function(input) {
    input.disabled = true;
  });

  guessButton.disabled = true;
}
function refreshGame() {
    resetGame();
    enableGuessInputs();
  }
  
  function resetGame() {
    randomNumbers = generateRandomNumbers();
    guessCount = 0;
    document.getElementById('guessInput1').value = "";
    document.getElementById('guessInput2').value = "";
    document.getElementById('guessInput3').value = "";
    document.getElementById('resultText').innerHTML = "";
  }
  
  function enableGuessInputs() {
    document.getElementById('guessInput1').disabled = false;
    document.getElementById('guessInput2').disabled = false;
    document.getElementById('guessInput3').disabled = false;
  }
  
  function disableGuessInputs() {
    document.getElementById('guessInput1').disabled = true;
    document.getElementById('guessInput2').disabled = true;
    document.getElementById('guessInput3').disabled = true;
  }
  

resetGame();
