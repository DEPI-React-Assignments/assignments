// Create a function that accepts only 2 parameters and throw exception if number of parameters either less than or exceeds 2 parameters

function sum(...args) {
    if (args.length !== 2) {
        throw new TypeError("Enter no more or less than 2 arguments");
    }
    return args[0] + args[1];
}
console.log(sum(5, 3, 3));
