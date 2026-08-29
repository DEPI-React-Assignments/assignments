function sum(...numbers) {

    var result = 0;

    for (var i = 0; i < numbers.length; i++) {

        if (typeof numbers[i] != "number") {
            throw "All parameters must be numbers";
        }

        result += numbers[i];
    }

    return result;
}

console.log(sum(10, 20, 30, 40));