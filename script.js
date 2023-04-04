// Get the button element
var hintButton = document.querySelector('.hint-button');

// Get the hint text element
var hintText = document.querySelector('.hint-text');

// Hide the hint text initially
hintText.style.display = 'none';

// Add a click event listener to the button
hintButton.addEventListener('click', function() {
	// Toggle the visibility of the hint text
	if (hintText.style.display === 'none') {
		hintText.style.display = 'block';
	} else {
		hintText.style.display = 'none';
	}
});
