// Make a function that takes date string as a parameter, and returns the Day name (Saturday, Sunday,) of the given date.

function returnDay(date) {
    var date = new Date(date);
    var days = [
        "Sunday",
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
    ];
    return days[date.getDay()];
}

console.log(returnDay("08/29/2026"));
console.log(returnDay("08/02/2026"));
