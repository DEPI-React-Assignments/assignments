const passwordInput = document.getElementById("password");
const togglePassword = document.getElementById("togglePassword");

togglePassword.addEventListener("click", () => {
	const isPasswordHidden = passwordInput.type === "password";

	passwordInput.type = isPasswordHidden ? "text" : "password";
	togglePassword.innerHTML = isPasswordHidden ? "&#128683;" : "&#128065;";
	togglePassword.setAttribute(
		"aria-label",
		isPasswordHidden ? "Hide password" : "Show password",
	);
});
