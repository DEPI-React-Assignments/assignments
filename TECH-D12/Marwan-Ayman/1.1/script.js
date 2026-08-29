function sum(x, y) {

    if (arguments.length != 2) {
        throw "Function must receive exactly 2 parameters";
    }
    
    if (typeof x != "number" || typeof y != "number") {
        throw "Parameters must be numbers";
    }

    return x + y;
}

console.log(sum(10, 20));