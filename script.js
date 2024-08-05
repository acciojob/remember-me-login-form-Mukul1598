//your JS code here. If required.

document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("loginForm");
    const existingButton = document.getElementById("existing");
    const usernameField = document.getElementById("username");
    const passwordField = document.getElementById("password");
    const checkbox = document.getElementById("checkbox");

    // Check if there are saved details in local storage
    const savedUsername = localStorage.getItem("username");
    const savedPassword = localStorage.getItem("password");

    if (savedUsername && savedPassword) {
        existingButton.style.display = "block";
    }

    // Handle form submission
    form.addEventListener("submit", (event) => {
        event.preventDefault();
        const username = usernameField.value;
        const password = passwordField.value;

        if (checkbox.checked) {
            localStorage.setItem("username", username);
            localStorage.setItem("password", password);
        } else {
            localStorage.removeItem("username");
            localStorage.removeItem("password");
        }

        alert(`Logged in as ${username}`);
        if (checkbox.checked) {
            existingButton.style.display = "block";
        }
    });

    // Handle existing user login
    existingButton.addEventListener("click", () => {
        const savedUsername = localStorage.getItem("username");
        alert(`Logged in as ${savedUsername}`);
    });
});
