const username = document.getElementById("username");
const userEmail = document.querySelector('input[type="email"]');

username.addEventListener("keydown", (e) => {
    const usernameRegex = /^[A-Za-z]$/;
    const allowedKeys = [
        "Backspace",
        "Delete",
        "ArrowLeft",
        "ArrowRight",
        "Tab",
    ];
    if (allowedKeys.includes(e.key)) {
        return;
    }
    if (!usernameRegex.test(e.key)) {
        e.preventDefault();
    }
});

const form = document.getElementById("form");
const showChangedEmail = document.getElementById("span");
const showSection = document.getElementById("show-email");
form.addEventListener("submit", (e) => {
    e.preventDefault();
    showSection.classList.remove("hidden");
    showChangedEmail.textContent = userEmail.value;
});
