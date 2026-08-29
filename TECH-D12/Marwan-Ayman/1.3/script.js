function reverseValues(...values) {

    if (values.length == 0) {
        throw "You must enter at least one value";
    }

    return values.reverse();

}

console.log(reverseValues(10, 20, 30, 40));