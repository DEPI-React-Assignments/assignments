const form = document.getElementById("form");
const timeoutMessage = document.getElementById("timeoutMessage");
let hasEnteredData = false;

const timeoutId = setTimeout(() => {
    if (!hasEnteredData) {
        timeoutMessage.textContent =
            "Timeout: no data was entered within 30 seconds.";
    }
}, 30000);

form.addEventListener("input", () => {
    hasEnteredData = true;
    clearTimeout(timeoutId);
    timeoutMessage.textContent = "";
});

form.addEventListener("submit", (event) => {
    event.preventDefault();

    const formData = new FormData(form);
    const userInfo = new URLSearchParams(formData);

    window.location.href = `welcome.html?${userInfo.toString()}`;
});
