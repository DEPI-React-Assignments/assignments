var sum = 0;
var num;

do {
    num = prompt("Type a number:");

    if (num === null || num.trim() === "" || isNaN(num)) {
        alert("Please type a valid number.");
        continue;
    }

    num = Number(num);
    sum += num;
} while (sum <= 100 && num !== 0);

alert(`The sum equals ${sum}`);
