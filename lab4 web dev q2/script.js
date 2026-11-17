// Select elements
const userInput = document.getElementById("userInput");
const checkBtn = document.getElementById("checkBtn");
const result = document.getElementById("result");

// Function
function checkInput() {

    let inputValue = userInput.value.trim();

    // Empty input
    if (inputValue === "") {
        result.textContent = "Please enter a valid number!";
    }

    // Not a number
    else if (isNaN(inputValue)) {
        result.textContent = "Please enter a valid number!";
    }

    else {

        let number = Number(inputValue);

        if (number < 10) {
            result.textContent = "The number is lower than 10";
        }
        else if (number > 10) {
            result.textContent = "The number is higher than 10";
        }
        else {
            result.textContent = "The number is equal to 10";
        }
    }
}

// Register click event
checkBtn.addEventListener("click", checkInput);