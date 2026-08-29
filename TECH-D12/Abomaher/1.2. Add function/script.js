// Write your own function that can add n values ensure that all passing parameters are numerical values only

// Throws an error if there are any non-numeric values.
function add(...args) {
    let sum = 0;
    for (var i = 0; i < args.length; ++i) {
        if (typeof args[i] !== "number" || isNaN(args[i])) {
            throw new TypeError("Type numeric values only");
        }
        sum += args[i];
    }
    return sum;
}

// Ignore non-numeric values without throwing any errors.

// function add(...args) {
//     let sum = 0;

//     for (var i = 0; i < args.length; ++i) {
//         if (!isNaN(args[i]) && typeof args[i] !== "string") {
//             sum += args[i];
//         }
//     }
//     return sum;
// }

console.log(add(4, 6));
// console.log(add("", " ", 4, 6));
