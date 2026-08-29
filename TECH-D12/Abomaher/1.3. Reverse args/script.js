// Write a function that takes any number of parameters and returns them reversed using array’s reverse function.

function reverse(...args) {
    return args.reverse();
}

console.log(reverse(1, "Ahmed", 2, "Maher", 3, "Hassan"));
