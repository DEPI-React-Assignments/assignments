// 1.a Ask the user for number of persons wanted to be entered (the value should be a number)
//1.b then ask for users’ information sequentially. name length should be more than 3 and less than 10 characters age: should be greater than 10 and less than 60.
//1.c print users’ information in HTML Table
// 1.a Get number of persons

let numOfPersons;
while (true) {
    var input = prompt("Type the number of persons: ");
    if (
        input !== null &&
        input.trim() !== "" &&
        isFinite(Number(input)) &&
        Number(input) > 0
    ) {
        numOfPersons = Number(input);
        break;
    }
}

let persons = [];

for (let i = 0; i < numOfPersons; i++) {
    let name = getName();
    let age = getAge();
    persons.push({ name: name, age: age });
}

let table = document.createElement("table");
table.setAttribute("border", "2");

let headerRow = document.createElement("tr");

let nameHeaderCell = document.createElement("th");
nameHeaderCell.textContent = "Name";
headerRow.appendChild(nameHeaderCell);

let ageHeaderCell = document.createElement("th");
ageHeaderCell.textContent = "Age";
headerRow.appendChild(ageHeaderCell);

table.appendChild(headerRow);

for (let i = 0; i < persons.length; i++) {
    let dataRow = document.createElement("tr");

    let nameCell = document.createElement("td");
    nameCell.textContent = persons[i].name;
    dataRow.appendChild(nameCell);

    let ageCell = document.createElement("td");
    ageCell.textContent = persons[i].age;
    dataRow.appendChild(ageCell);

    table.appendChild(dataRow);
}

document.body.appendChild(table);

// Functions
function getName() {
    while (true) {
        var usrName = prompt("Type a name: ");
        if (
            usrName !== null &&
            usrName.trim() !== "" &&
            !Number(usrName) &&
            usrName.length > 3 &&
            usrName.length < 10
        ) {
            break;
        }
    }
    return usrName;
}

function getAge() {
    while (true) {
        var age = prompt("Type an age: ");
        if (age !== null && age.trim() !== "" && isFinite(Number(age))) {
            age = Number(age);
            if (age > 10 && age < 60) {
                break;
            }
        }
    }
    return age;
}
