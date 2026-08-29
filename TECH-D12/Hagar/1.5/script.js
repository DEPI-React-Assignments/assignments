const input = prompt(
  "Enter the date using the following format (DD – MM – YYYY) ex. 22–01–1999",
);

day();

function day(d) {
  if (date.length === 10 && date.at(2) === "-" && date.at(5) === "-") {
    let d = Number(d.substring(0, 2));
    let m = Number(d.substring(3, 5));
    let y = Number(d.substring(6, 10));

    let date = new Date(y, m - 1, d);

    let days = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ];

    alert(days[date.getDay()]);

    document.write(days[date.getDay()]);

    console.log(days[date.getDay()]);
  } else alert("Wrong Format");
}
