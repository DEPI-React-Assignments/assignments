const numberInput = document.getElementById("numberInput");
const message = document.getElementById("message");

numberInput.addEventListener("keydown", (event) => {
	const allowedKeys = [
		"Backspace",
		"Delete",
		"ArrowLeft",
		"ArrowRight",
		"Home",
		"End",
		"Tab",
	];

	if (!/^[0-9]$/.test(event.key) && !allowedKeys.includes(event.key)) {
		event.preventDefault();
		message.textContent = "Numbers only, please.";
	}
});

numberInput.addEventListener("input", () => {
	numberInput.value = numberInput.value.replace(/[^0-9]/g, "");
	message.textContent = "";
});
