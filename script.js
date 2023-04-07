// Get the button element
var hintButton = document.querySelector('.hint-button');

// Get the hint text element
var hintText = document.querySelector('.hint-text');

// Hide the hint text initially
hintText.style.display = 'none';

// Add click event listener to hint button
hintButton.addEventListener('click', function() {
  // Toggle the display of hint text
  if (hintText.style.display === 'none') {
    hintText.style.display = 'block';
    hintButton.textContent = 'Close Hint';
  } else {
    hintText.style.display = 'none';
    hintButton.textContent = 'Hint';
  }
});

// Get DOM elements
const Easy = document.getElementById('Easy');
const Hard = document.getElementById('Hard');
const container = document.getElementById('container');

// Store the original riddle and hint text content
const originalRiddle = document.querySelector('.riddle-title').textContent;
const originalHint = document.querySelector('.hint-text').textContent;

// Add click event listeners to buttons
Easy.addEventListener('click', () => {
  // Reset riddle and hint text content to original values
  document.querySelector('.riddle-title').textContent = originalRiddle;
  document.querySelector('.hint-text').textContent = originalHint;
});

Hard.addEventListener('click', () => {
  // Change content to "Hard" for hard mode
  document.querySelector('.riddle-title').textContent = "This is a new riddle for Hard mode!";
  document.querySelector('.hint-text').textContent = "This is a new hint text for Hard mode!";
});
