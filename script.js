var i=0
riddle_easy_array = ["riddlea","riddleb","riddlec"]
hint_easy_array = ["hinta","hintb","hintc"]
riddle_hard_array = ["harda","hardb","hardc"]
hint_hard_array = ["hintHa","hintHb","hintHc"]
// Get the button element
var hintButton = document.querySelector('.hint-button');

var riddletitle = document.querySelector('.riddle-title');
var hinttext = document.querySelector('.hint-text');

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
  document.querySelector('.riddle-title').textContent = '"' + "What has a beginning, but no end?" + '"';
  document.querySelector('.hint-text').textContent = " think Math";
});

// Timer build
var timer = document.getElementById("timer");
var interval = setInterval(updateTimer, 1000); // Update the timer every 1 second

// Function to update the timer
function updateTimer() {
  var now = new Date(); // Get the current date and time
  var target = new Date(); // Set the target time to the current time
  var targetHour = now.getHours() < 12 ? 12 : 0; // Set the target hour to 12:00 PM if the current hour is before 12, otherwise set it to 12:00 AM
  var nextDay = now.getHours() >= 12; // Check if the current time is after 12:00 PM to determine if the target time should be set for the next day
  target.setDate(target.getDate() + (nextDay ? 1 : 0)); // Move to the next day if the current time is after 12:00 PM
  target.setHours(targetHour, 0, 0, 0); // Set the target time to 12:00 PM or 12:00 AM

  var timerValue = Math.floor((target.getTime() - now.getTime()) / 1000); // Calculate the remaining time in seconds

  if (timerValue <= 0) {
    clearInterval(interval); // Stop the timer when it reaches 0
    timer.textContent = '00:00:00';
    target.setHours(targetHour === 0 ? 12 : 0, 0, 0, 0); // Set the target time to the next 12:00 PM or 12:00 AM
    interval = setInterval(updateTimer, 1000); // Start the timer again for the next iteration
  }

  var hours = Math.floor(timerValue / 3600); // Calculate hours
  var minutes = Math.floor((timerValue % 3600) / 60); // Calculate minutes
  var seconds = timerValue % 60; // Calculate seconds

  // Display hours, minutes, and seconds with leading zeros if needed
  timer.textContent = ('0' + hours).slice(-2) + ':' + ('0' + minutes).slice(-2) + ':' + ('0' + seconds).slice(-2);
}


// JavaScript for checking and displaying the result
document.getElementById("submit-btn").addEventListener("click", function() {
  const popup = document.getElementById('popup');
	var userAnswer = document.getElementById("myText").value.toLowerCase();
	var correctAnswer = "echo"; // Change this to the correct answer
	var correctanswerHard = "circle" // Change this to the correct answer
	var resultText = document.getElementById("result-text");
	var myTextInput = document.getElementById("myText"); // Add reference to the input field
  
	if (userAnswer === correctAnswer ||userAnswer ===correctanswerHard ) {
    showPopup();
	} else {
	  myTextInput.style.borderColor = "red"; // Set border color to red
    myTextInput.style.borderWidth="5px";
	}
  myTextInput.addEventListener("input", function() {
    myTextInput.style.borderColor = "black"; // Reset border color to black
    myTextInput.style.borderWidth = "2px"; // Reset border width to default
  });
  function showPopup() {
    popup.style.display = 'block';
  }
  closeBtn.addEventListener('click', function() {
    popup.style.display = 'none';
  })
});
    
const submitBtn = document.querySelector(".Submit2");
submitBtn.addEventListener("click", function() {
  alert("Thanks!");
});


document.getElementById("myText").addEventListener("input", function() {
	var resultText = document.getElementById("result-text");
	resultText.textContent = ""; // Remove "Try again" text
});

document.getElementById("myText").addEventListener("keydown", function(event) {
	if (event.key === "Enter") { // Check if Enter key is pressed
	  event.preventDefault(); // Prevent the default form submission behavior
	  document.getElementById("submit-btn").click(); // Trigger submit button click event
	}
  
});

