document.addEventListener("DOMContentLoaded", function () {
    const welcomeMessage = document.getElementById("welcome-message");

    setTimeout(() => {
        window.location.href = "homeScreen.html"; // Redirect to home screen after the welcome message
    }, 4000); // Duration of welcome screen (4 seconds)
});