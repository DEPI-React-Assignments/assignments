// 1.a Ask the user for number of persons wanted to be entered (the value 
// should be a number)

var personsCountInput = prompt("Enter the number of persons : ");
var persons = Number(personsCountInput);
while (isNaN(persons) || persons < 1) {
    personsCountInput = prompt("Enter a valid number of persons : ");
    persons = Number(personsCountInput);
};

// .b then ask for users’ information sequentially.    
// name length should be more than 3 and less than 10 characters  
// age: should be greater than 10 and less than 60. 
let userName = [],
    userAge = [];
for (let i = 0; i < persons; i++) {
    var nameInput = prompt(`Enter the name of the person ${i + 1}`);
    while (nameInput === null || !isNaN(Number(nameInput)) || nameInput.length <= 3 || nameInput.length >= 10) {
        nameInput = prompt("Enter a valid Name : ");
    }
    userName.push(nameInput);
    var ageInput = Number(prompt(`Enter the age of the person ${i + 1}`));
    while (isNaN(ageInput) || ageInput <= 10 || ageInput >= 60) {
        ageInput = Number(prompt("Enter a valid age : "));
    }
    userAge.push(ageInput);
}
// console.log(userName);
// console.log(userAge);

// 1.c print users’ information in HTML Table  
let table = document.createElement("table");
table.innerHTML = "<thead><tr><th>Name</th><th>Age</th></tr></thead><tbody>";
for (let i = 0; i < userName.length; i++) {
    table.innerHTML += "<tr><td>" + userName[i] + "</td><td>" + userAge[i] + "</td></tr>"

}
table.innerHTML += "</tbody>";
table.style.backgroundColor = "lightblue";

let tablestyle = document.createElement("style");
tablestyle.innerHTML = "table, th, td {border: 1px solid black; border-collapse: collapse; padding: 10px; text-align: center; }";

document.body.appendChild(table);
document.body.appendChild(tablestyle);