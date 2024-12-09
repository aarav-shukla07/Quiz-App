// Wait for the DOM to load before adding event listeners
document.addEventListener('DOMContentLoaded', () => {
    const startBtn = document.querySelector('.start-btn');

    startBtn.addEventListener('click', () => {
        alert("Starting the quiz...");
        // Example: Redirecting to the quiz page:
        window.location.href = "quiz-main.html";  // Change this to your actual quiz page
    });
});
