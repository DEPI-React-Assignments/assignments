// 1.a Ask the user for number of persons wanted to be entered (the valueshould be a number)

var numberOfUsers = prompt("Enter the number of persons:");

while (isNaN(numberOfUsers) || numberOfUsers == "") {
    numberOfUsers = prompt("Please enter a valid number:");
}


// 1.b then ask for users’ information sequentially.
// name length should be more than 3 and less than 10 characters

var users = [];

for (var i = 0; i < numberOfUsers; i++) {

    var name = prompt("Enter user name number " + (i + 1) + ":");

    while (name.length <= 3 || name.length >= 10 || !/^[A-Za-z]+$/.test(name)) {
        name = prompt("Name must be more than 3 and less than 10 characters and contain only letters:");
    }

    var age = prompt("Enter user age number " + (i + 1) + ":");

    while (isNaN(age) || age <= 10 || age >= 60) {
        age = prompt("Age must be greater than 10 and less than 60:");
    }

    users.push({
        name: name,
        age: age
    });
}

// 1.c print users’ information in HTML Table

var table = document.createElement("table");

table.setAttribute("border", "2");

var headerRow = document.createElement("tr");

var nameHeader = document.createElement("th");
nameHeader.textContent = "Name";

var ageHeader = document.createElement("th");
ageHeader.textContent = "Age";

headerRow.appendChild(nameHeader);
headerRow.appendChild(ageHeader);

table.appendChild(headerRow);


for (var i = 0; i < users.length; i++) {

    var row = document.createElement("tr");

    var nameCell = document.createElement("td");
    nameCell.textContent = users[i].name;

    var ageCell = document.createElement("td");
    ageCell.textContent = users[i].age;

    row.appendChild(nameCell);
    row.appendChild(ageCell);

    table.appendChild(row);
}

document.body.appendChild(table);