var birthDate = prompt("Enter your birth date (DD-MM-YYYY):");

while (true) {

    if (
        birthDate != "" &&
        birthDate.length == 10 &&
        birthDate.charAt(2) == "-" &&
        birthDate.charAt(5) == "-"
    ) {

        var day = birthDate.substring(0, 2);
        var month = birthDate.substring(3, 5);
        var year = birthDate.substring(6, 10);

        if (
            day != "00" && 
            month != "00" &&
            year != "0000" &&
            day <= 31 &&
            month <= 12 &&
            year <= 2026) {
            break;
        }
    }

    alert("Wrong Date Format");
    birthDate = prompt("Enter your birth date (DD-MM-YYYY):");
}


function checkDate(date) {

    var day = date.substring(0, 2);
    var month = date.substring(3, 5);
    var year = date.substring(6, 10);

    var newDate = new Date(year, month - 1, day);

    alert(newDate.toDateString());
}

checkDate(birthDate);