// Select elements
const generateBtn = document.getElementById("generateBtn");
const numberList = document.getElementById("numberList");

// Function
function generateNumbers() {

    // Clear previous items
    numberList.textContent = "";

    // Loop from 1 to 5
    for (let i = 1; i <= 5; i++) {

        let listItem = document.createElement("li");

        listItem.textContent = `The number is ${i}`;

        numberList.appendChild(listItem);
    }
}

// Register click event
generateBtn.addEventListener("click", generateNumbers);