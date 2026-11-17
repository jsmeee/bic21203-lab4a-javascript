// Select the paragraph
const message = document.getElementById("message");

// Select the button
const changeBtn = document.getElementById("changeBtn");

// Function to change message
function changeMessage() {
    message.textContent = "Hello there!";
}

// Register click event
changeBtn.addEventListener("click", changeMessage);