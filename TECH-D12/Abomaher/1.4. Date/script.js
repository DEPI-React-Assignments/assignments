// Show prompt that ask user to enter his birth date and tell user to enter the date in the following format (DD – MM – YYYY) ex. 22–01–1999, and then create function that take user input as a parameter and ensure that the string is entered in this format (that user entered string is 10 characters and contains (-) after the second character and after fifth character).[Don't use RegExp, use string functions].
// a. If the user input was correct: make the function create new date object, and initialize it with Day, Month, year values (using date constructor: Date(y,m,d)) and then show alert to the user with the date in date string format.
// b. If user input wasn't correct, show alert saying, "Wrong Date Format".

while (true) {
    var userInput = prompt("Type your date in this format: (DD – MM – YYYY)");
    if (
        userInput !== null &&
        userInput.length === 10 &&
        userInput[2] === "-" &&
        userInput[5] === "-"
    ) {
        var userBirthDate = userInput;
        userInput = userInput.split("-").join("");
        if (isFinite(userInput) && userInput.trim() !== "") {
            break;
        } else {
            alert("Wrong Date Format");
        }
    } else {
        alert("Wrong Date Format");
    }
}

function createDate(date) {
    var date = date.split("-");
    var birthDate = new Date(
        Number(date[2]),
        Number(date[1]) - 1,
        Number(date[0]),
    );
    return birthDate;
}
alert(createDate(userBirthDate));
