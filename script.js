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
  document.querySelector('.riddle-title').textContent = "The person who makes it, sells it. The person who buys it, never uses it. The person who uses it, never knows they're using it. What is it?!";
  document.querySelector('.hint-text').textContent = " item that is typically associated with funerals";
});
//timer build
var timer = document.getElementById("timer");
var target = new Date(); // Set the target time to the current time
target.setHours(12, 0, 0, 0); // Set the target time to 12:00 AM (midnight)
var interval = setInterval(updateTimer, 1000); // Update the timer every 1 second

function updateTimer() {
    var now = new Date(); // Get the current date and time

    var timerValue = Math.floor((target.getTime() + (6 * 60 * 60 * 1000) - now.getTime()) / 1000); // Calculate the remaining time in seconds, adding 6 hours

    if (timerValue <= 0) {
        clearInterval(interval); // Stop the timer when it reaches 0
        timer.textContent = '00:00:00';
        alert("Timer finished!");
        return;
    }

    var hours = Math.floor(timerValue / 3600); // Calculate hours
    var minutes = Math.floor((timerValue % 3600) / 60); // Calculate minutes
    var seconds = timerValue % 60; // Calculate seconds

    // Display hours, minutes, and seconds with leading zeros if needed
    timer.textContent = ('0' + hours).slice(-2) + ':' + ('0' + minutes).slice(-2) + ':' + ('0' + seconds).slice(-2);
}


