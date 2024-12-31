// Target number
const target = Math.floor(Math.random() * 100) + 1; // Random target between 1 and 100
document.getElementById("target").innerText = target;

let input = "";

// Handle button clicks
document.querySelectorAll(".btn").forEach(button => {
    button.addEventListener("click", () => {
        const value = button.innerText;
        if (value === "C") {
            input = ""; // Clear input
        } else if (value === "=") {
            checkResult();
        } else {
            input += value; // Add value to input
        }
        updateFeedback(input);
    });
});

// Function to check if the input matches the target
function checkResult() {
    try {
        const result = eval(input);
        if (result === target) {
            document.getElementById("feedback").innerText = "🎉 Congratulations! You reached the target!";
        } else {
            document.getElementById("feedback").innerText = `Result: ${result}. Try again!`;
        }
    } catch {
        document.getElementById("feedback").innerText = "Invalid calculation. Try again!";
    }
}

// Function to update feedback
function updateFeedback(currentInput) {
    document.getElementById("feedback").innerText = `Current Input: ${currentInput}`;
}

// Function to hide random buttons
function hideRandomButtons() {
    const buttons = document.querySelectorAll(".btn");
    const countToHide = Math.floor(Math.random() * 4) + 2; // Hide 2–5 buttons
    const indices = new Set();

    while (indices.size < countToHide) {
        indices.add(Math.floor(Math.random() * buttons.length));
    }

    indices.forEach(index => {
        buttons[index].innerText = ""; // Hide button content
        buttons[index].disabled = true; // Disable the button
    });
}

// Hide buttons when the page loads
hideRandomButtons();
