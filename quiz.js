function checkAnswer() {
    // Define the correct answer
    let correctAnswer = "4";

    // Get the selected answer
    let userAnswer = document.querySelector('input[name="quiz"]:checked');

    // Check if an answer is selected
    if (userAnswer) {
        userAnswer = userAnswer.value;

        // Get the feedback element
        let feedback = document.getElementById("feedback");

        // Compare user's answer with the correct answer
        if (userAnswer === correctAnswer) {
            feedback.textContent = "Correct! Well done.";
            feedback.style.color = "green";
        } else {
            feedback.textContent = "That's incorrect. Try again!";
            feedback.style.color = "red";
        }
    } else {
        alert("Please select an answer before submitting.");
    }
}

// Add event listener to the submit button
document.getElementById("submit-answer").addEventListener("click", checkAnswer);
