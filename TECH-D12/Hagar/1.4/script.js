const input = prompt(
  "Enter the date using the following format (DD – MM – YYYY) ex. 22–01–1999",
);
date(input);
function date(date) {
  if (date.length === 10 && date.at(2) === "-" && date.at(5) === "-") {
    let d = Number(date.substring(0, 2));
    let m = Number(date.substring(3, 5));
    let y = Number(date.substring(6, 10));
    let fdate = new Date(y, m - 1, d);
    document.write(fdate.toDateString());
    alert(fdate.toDateString());
  } else alert("Wrong Format");
}
