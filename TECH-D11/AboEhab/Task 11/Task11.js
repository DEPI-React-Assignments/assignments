
var strr = prompt("Enter a string:");
var Ahmed = confirm("Do you want to consider the case?");

if (!Ahmed) {
  strr = strr.toLowerCase();
}

var reversedWord = strr.split("").reverse().join("");
if (strr === reversedWord) {
  alert(strr + " is a palindrome");
} else {
  alert(strr + " is not a palindrome");
}







var strr = prompt("Enter a string:");
var count = 0;

for (var i = 0; i < strr.length; i++) {
  if (strr[i] === "e"||strr[i] === "E") {
    count++;
  }
}

alert("Number of e characters = " + count);










var name;
var phone;
var mobile;
var email;

do {
  name = prompt("Enter your name:");
} while (!/^[A-Za-z]+$/.test(name));

do {
  phone = prompt("Enter your phone number:");
} while (!/^\d{8}$/.test(phone));

do {
  mobile = prompt("Enter your mobile number:");
} while (!/^(010|011|012)\d{8}$/.test(mobile));

do {
  email = prompt("Enter your email:");
} while (!/^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/.test(email));

alert(
  "Welcome " + name +
  "\nPhone: " + phone +
  "\nMobile: " + mobile +
  "\nEmail: " + email
);










var radius = Number(prompt("What is the value of your circle's radius?"));
var area = Math.PI * Math.pow(radius, 2);
alert("Total area of the circle is " + area);









var number = Number(prompt("What is the value you want to calculate its square root?"));
var result = Math.sqrt(number);
alert("Square root of " + number + " is " + result);
