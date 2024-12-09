// script.js
import { quizData } from './data.js';

let currentQuestionIndex = 0;
let score = 0;

// Function to display the quiz questions and options
function displayQuiz() {
    const quizContainer = document.getElementById("quiz");
    const question = quizData[currentQuestionIndex];

    // Dynamically generate the HTML for the question and options
    const questionHtml = `
        <div class="question">
            <p>${question.question}</p>
            <label>
                <input type="radio" name="answer" value="a">
                ${question.a}
            </label><br>
            <label>
                <input type="radio" name="answer" value="b">
                ${question.b}
            </label><br>
            <label>
                <input type="radio" name="answer" value="c">
                ${question.c}
            </label><br>
            <label>
                <input type="radio" name="answer" value="d">
                ${question.d}
            </label><br>
        </div>
    `;
    quizContainer.innerHTML = questionHtml;

    // Update the button text when on the last question
    const submitButton = document.getElementById("submit");
    if (currentQuestionIndex === quizData.length - 1) {
        submitButton.innerHTML = "Finish Quiz";
    } else {
        submitButton.innerHTML = "Next Question";
    }
}

// Function to handle quiz submission
function submitQuiz() {
    const selectedOption = document.querySelector('input[name="answer"]:checked');
    
    if (selectedOption) {
        const answer = selectedOption.value;
        if (answer === quizData[currentQuestionIndex].correct) {
            score++;
        }
    }

    currentQuestionIndex++;

    // If there are more questions, display the next question
    if (currentQuestionIndex < quizData.length) {
        displayQuiz();
    } else {
        showResult();
    }
}

// Function to show the result at the end of the quiz
function showResult() {
    const quizContainer = document.getElementById("quiz");
    const resultDiv = document.getElementById("result");
    const submitButton = document.getElementById("submit");

    // Hide the quiz questions
    quizContainer.style.display = "none";

    // Show the result
    resultDiv.innerHTML = `You scored ${score} out of ${quizData.length}.`;

    // Change the button to "Reload Quiz"
    submitButton.innerHTML = "Reload Quiz";

    // Add an event listener to reload the quiz
    submitButton.addEventListener("click", reloadQuiz);
}

// Function to reload the quiz
function reloadQuiz() {
    // Reset variables
    currentQuestionIndex = 0;
    score = 0;

    // Show the quiz questions again
    const quizContainer = document.getElementById("quiz");
    quizContainer.style.display = "block";

    // Hide the result
    const resultDiv = document.getElementById("result");
    resultDiv.innerHTML = "";

    // Reload the quiz
    displayQuiz();

    // Change the button text back to "Submit Answer"
    const submitButton = document.getElementById("submit");
    submitButton.innerHTML = "Submit Answer";
}

// Initial call to display the first question
displayQuiz();


// Add event listener to the button
const submitButton = document.getElementById("submit");
submitButton.addEventListener("click", submitQuiz);