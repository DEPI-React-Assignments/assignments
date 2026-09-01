const people = [];
let num;
do {
  num = Number(prompt("Enter The Number People more Than 0"));
  if (Number.isNaN(num)) {
    alert("This is Zero or Not a Number Try again");
  }
} while (num === 0 || Number.isNaN(num));

for (let i = 0; i < num; i++) {
  let nameinput, ageinput;
  do {
    nameinput = prompt(
      `Enter the ${i + 1} name should be more than 3 and less than 10 characters`,
    );
    if (nameinput.length <= 3 || nameinput.length >= 10 || Number(nameinput))
      alert("Wrong format Try again");
  } while (
    nameinput.length <= 3 ||
    nameinput.length >= 10 ||
    Number(nameinput)
  );
  do {
    ageinput = Number(
      prompt(
        `Enter the ${i + 1} age should be greater than 10 and less than 60.`,
      ),
    );
    if (Number.isNaN(ageinput) || ageinput >= 60 || ageinput <= 10)
      alert("wrong format Try again");
  } while (Number.isNaN(ageinput) || ageinput >= 60 || ageinput <= 10);

  people.push({
    name: nameinput,
    age: ageinput,
  });
}

const tbody = document.querySelector("tbody");
for (let { name, age } of people) {
  let row = document.createElement("tr");

  let nameCell = document.createElement("td");
  nameCell.textContent = name;

  let ageCell = document.createElement("td");
  ageCell.textContent = age;

  row.appendChild(nameCell);
  row.appendChild(ageCell);

  tbody.appendChild(row);
}
