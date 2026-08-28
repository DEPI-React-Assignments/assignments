var arr = [];
var i = 0;
while (arr.length != 3) {
    arr[i] = prompt("Type a number: ");
    if (arr[i] != null && arr[i] != "" && !isNaN(Number(arr[i]))) {
        arr[i] = Number(arr[i]);
        ++i;
    } else {
        arr.pop();
    }
}

var sum = arr[0] + arr[1] + arr[2];
var multi = arr[0] * arr[1] * arr[2];
var div = arr[0] / arr[1] / arr[2];

document.write("<h1>Adding -- Multiplying -- and dividing 3 values</h1><hr>");
document.write(
    '<h2 style="color: red;">sum of the 3 values <span style="color: black;">' +
        arr[0] +
        "+" +
        arr[1] +
        "+" +
        arr[2] +
        "=" +
        sum +
        "</span></h2>",
);
document.write(
    '<h2 style="color: red;">multiplication of the 3 values <span style="color: black;">' +
        arr[0] +
        "*" +
        arr[1] +
        "*" +
        arr[2] +
        "=" +
        multi +
        "</span></h2>",
);
document.write(
    '<h2 style="color: red;">division of the 3 values <span style="color: black;">' +
        arr[0] +
        "/" +
        arr[1] +
        "/" +
        arr[2] +
        "=" +
        div +
        "</span></h2>",
);
