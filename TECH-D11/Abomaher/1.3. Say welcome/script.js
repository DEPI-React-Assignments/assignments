while (true) {
    var userName = prompt("Type your name: ");
    if (isNaN(userName) && userName != null && userName != "") {
        break;
    }
}
userName = userName.trim();

while (true) {
    var phoneNumber = prompt("Type your phone number: ");
    if (
        !isNaN(Number(phoneNumber)) &&
        phoneNumber != null &&
        phoneNumber != "" &&
        phoneNumber.length == 8
    ) {
        break;
    }
}

phoneNumber = Number(phoneNumber);

while (true) {
    var mobileNumber = prompt("Type your mobile number: ");
    if (
        !isNaN(Number(mobileNumber)) &&
        mobileNumber != null &&
        mobileNumber != "" &&
        mobileNumber.length == 11 &&
        (mobileNumber.slice(0, 3) == "010" ||
            mobileNumber.slice(0, 3) == "011" ||
            mobileNumber.slice(0, 3) == "012")
    ) {
        break;
    }
}

mobileNumber = Number(mobileNumber);

var regex = /^[a-z]+@[0-9]+\.com$/;

while (true) {
    var email = prompt("Type your email: ");
    if (regex.test(email) && email != null && email != "") {
        break;
    }
}

document.write(
    `<h1 style="text-align: center; color: magenta;">Welcome Mr: ${userName}</h1>`,
);
document.write(
    `<p style="text-align: center; color: blue; font-size: 2rem;">Here is your phone number: ${phoneNumber}</p>`,
);
document.write(
    `<p style="text-align: center; color: blue; font-size: 2rem;">Here is your mobile number: ${mobileNumber}</p>`,
);
document.write(
    `<p style="text-align: center; color: blue; font-size: 2rem;">Here is your email address: ${email}</p>`,
);
