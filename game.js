// Target number
const target = 15;

function checkResult() {
    const userInput = document.getElementById("userInput").value;
    try {
        const result = eval(userInput);
        if (result === target) {
            document.getElementById("feedback").innerText = "Congratulations! You've reached the target!";
        } else {
            document.getElementById("feedback").innerText = `Result is ${result}. Try again!`;
        }
    } catch (e) {
        document.getElementById("feedback").innerText = "Invalid input. Please try again.";
    }
}
