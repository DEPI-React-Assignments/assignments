var nameInput = document.getElementById("name");
var emailInput = document.getElementById("email");
var joinButton = document.getElementById("join");

joinButton.onclick = function () {
  var name = nameInput.value.trim();
  var email = emailInput.value.trim();

  // Check Name

  if (name == "") {
    alert("Please enter your name.");

    return;
  }

  var namePattern = /^[A-Za-z\u0600-\u06FF ]+$/;

  if (!namePattern.test(name)) {
    alert("Name must contain letters only.");

    return;
  }

  // Check Email

  if (email == "") {
    alert("Please enter your email.");

    return;
  }

  // Email must not contain spaces

  if (email.includes(" ")) {
    alert("Email must not contain spaces.");

    return;
  }

  // Check Email format

  var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (!emailPattern.test(email)) {
    alert("Please enter a valid email.");

    return;
  }

  // Everything is correct

  alert("Congratulations!\nYou have successfully joined our newsletter.");
};
