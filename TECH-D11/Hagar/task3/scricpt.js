let name = prompt("Enter your name:");
let age = prompt("Enter your age:");
let email = prompt("Enter your email:");

while (!name || !isNaN(name)) {
  name = prompt("Invalid name. Please enter your name:");
}

while (!age || isNaN(age) || age <= 0) {
  age = prompt("Invalid age. Please enter a valid age:");
}

while (!email || !email.includes("@")) {
  email = prompt("Invalid email. Please enter a valid email:");
}

alert(
  `Welcome, ${name}! 🎉\n\n` +
    `Your information:\n` +
    `Age: ${age}\n` +
    `Email: ${email}`,
);
