var arr = [];
var i = 0;
while (arr.length != 5) {
    arr[i] = prompt("Type a number: ");
    if (arr[i] != null && arr[i] != "" && !isNaN(Number(arr[i]))) {
        arr[i] = Number(arr[i]);
        ++i;
    } else {
        arr.pop();
    }
}

document.write("<h1>Sorting</h1><hr>");
document.write(
    '<h2 style="color: red;">u\'ve entered the values of <span style="color: black;">' +
        arr +
        "</span></h2>",
);
document.write(
    '<h2 style="color: red;">ur values after being sorted descending <span style="color: black;">' +
        arr.sort((a, b) => {
            return b - a;
        }) +
        "</span></h2>",
);
document.write(
    '<h2 style="color: red;">ur values after being sorted ascending <span style="color: black;">' +
        arr.sort() +
        "</span></h2>",
);
