var name = prompt("Enter your name:");

while (!/^[a-zA-Z ]+$/.test(name)) {
  alert("Invalid name. Name should contain characters only.");
  name = prompt("Enter your name:");
}

var phone = prompt("Enter your phone number:");

while (!/^\d{8}$/.test(phone)) {
  alert("Invalid phone number. Phone number should contain 8 digits.");
  phone = prompt("Enter your phone number:");
}

var mobile = prompt("Enter your mobile number:");

while (!/^(010|011|012|015)\d{8}$/.test(mobile)) {
  alert("Invalid mobile number.");
  mobile = prompt("Enter your mobile number:");
}

var email = prompt("Enter your email:");

while (!/^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/i.test(email)) {
  alert("Invalid email.");
  email = prompt("Enter your email:");
}

alert(
  "Welcome " + name +
  "\nPhone: " + phone +
  "\nMobile: " + mobile +
  "\nEmail: " + email
);