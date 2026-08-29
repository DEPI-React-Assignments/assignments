function getDayName(date) {

    var day = date.substring(0, 2);
    var month = date.substring(3, 5);
    var year = date.substring(6, 10);

    var newDate = new Date(year, month - 1, day);

    var days = [
        "Sunday",
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday"
    ];

    return days[newDate.getDay()];
}

console.log(getDayName("29-08-2026"));