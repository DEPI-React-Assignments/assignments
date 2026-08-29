var arr = [];

for (var i = 0; i < 5; i++) {
  arr[i] = Number(prompt("Enter value " + (i + 1) + ":"));
}

var originalArray = arr.slice();

var descending = arr.slice();

descending.sort(function (x, y) {
  return y - x;
});

var ascending = arr.slice();

ascending.sort(function (x, y) {
  return x - y;
});

document.write("<h2>Sorting</h2>");

document.write(
  "<p>You've entered the values of " +
  originalArray.join(" , ") +
  "</p>"
);

document.write(
  "<p>Our values after being sorted descending " +
  descending.join(" , ") +
  "</p>"
);

document.write(
  "<p>Our values after being sorted ascending " +
  ascending.join(" , ") +
  "</p>"
);