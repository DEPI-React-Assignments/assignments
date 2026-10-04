/* Study new array api methods then create the following methods and apply
it on this array var fruits = ["apple", "strawberry", "banana", "orange",
"mango"]
a. test that every element in the given array is a string
b. test that some of array elements starts with "a"
c. generate new array filtered from the given array with only elements that
starts with "b" or "s"
d. generate new array each element of the new array contains a string
declaring that you like the give fruit element
e. use forEach to display all elements of the new array from previous point*/

let fruits = [
  "apple",
  "strawberry",
  "banana",
  "orange",
  "mango"
];

// a
let result1 = fruits.every(
  (fruit) => typeof fruit === "string"
);

console.log(result1);


// b
let result2 = fruits.some(
  (fruit) => fruit.startsWith("a")
);

console.log(result2);


// c
let result3 = fruits.filter(
  (fruit) =>
    fruit.startsWith("b") ||
    fruit.startsWith("s")
);

console.log(result3);


// d
let result4 = fruits.map(
  (fruit) => `I like ${fruit}`
);

console.log(result4);


// e
result4.forEach(
  (fruit) => {
    console.log(fruit);
  }
);