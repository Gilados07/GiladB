// Get the button element
var hintButton = document.querySelector('.hint-button');

// Get the hint text element
var hintText = document.querySelector('.hint-text');

// Hide the hint text initially
hintText.style.display = 'none';

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
