const celebrityImage = document.getElementById('celebrityImage');
const guessInput = document.getElementById('guessInput');
const submitBtn = document.getElementById('submitBtn');
const result = document.getElementById('result');
const correctCelebrity = 'Dwayne Johnson';

let blurValue = 10;
let remainingGuesses = 5;

submitBtn.addEventListener('click', checkGuess);

function checkGuess() {
  const userGuess = guessInput.value.trim().toLowerCase();

  if (userGuess === correctCelebrity.toLowerCase()) {
    revealAnswer();
    result.textContent = 'Congratulations! You guessed it right!';
    result.style.width = '450px';
    result.style.color = 'White';
    result.style.fontSize ='25px';
    result.style.textAlign ='center'
    submitBtn.disabled = true;
  } else {
    guessInput.value = '';
    remainingGuesses--;
    result.textContent = `Wrong guess. ${remainingGuesses} ${remainingGuesses === 1 ? 'guess' : 'guesses'} remaining.`;
    result.style.color = '#ff0000';
    blurValue -= 1;
    celebrityImage.style.filter = `blur(${blurValue}px)`;
    if (remainingGuesses === 0) {
      revealAnswer();
      submitBtn.disabled = true;
    }
  }
}

function revealAnswer() {
  celebrityImage.style.filter = 'none';
  result.textContent = `The correct answer is ${correctCelebrity}. Better luck next time!`;
}
