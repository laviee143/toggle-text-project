// Select heading and button
const toggleText = document.getElementById("toggleText");
const toggleButton = document.getElementById("toggleButton");

// Track current state
let isOn = false; // false = OFF, true = ON

// Add click event listener
toggleButton.addEventListener("click", function() {
    if (isOn) {
        toggleText.textContent = "OFF";
        isOn = false;
    } else {
        toggleText.textContent = "ON";
        isOn = true;
    }
});
