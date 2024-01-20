console.log("Hello, World!");
//typescript simple types 
var firstName = "Shadoow";
console.log(typeof firstName);
var myNumber = 42;
var myString = "Hello, TypeScript!";
var myBoolean = true;
var myArray = [1, 2, 3, 4, 5];
var myObject = { name: "Shadoow", age: 25 };
// Print all variables
console.log("myNumber:", myNumber);
console.log("myString:", myString);
console.log("myBoolean:", myBoolean);
console.log("myArray:", myArray);
console.log("myObject:", myObject);
// Function that takes parameters of different types
function displayInfo(name, age, isStudent) {
    console.log("Name: ".concat(name, ", Age: ").concat(age, ", Is Student: ").concat(isStudent));
}
// Call the function with sample values
displayInfo("Shadoow", 25, false);
// Any Type: allows variables to have any data type
var dynamicValue = "This can be any type";
console.log("Dynamic Value:", dynamicValue);
// Void Type: return type of functions that do not return a value
function logMessage() {
    console.log("This function does not return a value");
}
logMessage();
// Null and Undefined Types: use  to explicitly express the absence of a value
var nullValue = null;
var undefinedValue = undefined;
console.log("Null Value:", nullValue);
console.log("Undefined Value:", undefinedValue);
// Never Type : represents values that never occur. 
function throwError(message) {
    throw new Error(message);
}
// Unknown Type : 
var userInput = "Hello, TypeScript!";
if (typeof userInput === "string") {
    var myString_1 = userInput; // Type checking required
    console.log("My String:", myString_1);
}
// Tuple Type
var myTuple = [42, "TypeScript", true];
console.log("Tuple:", myTuple);
// Array of numbers
var numbers = [1, 2, 3, 4, 5];
console.log("Numbers:", numbers);
// Array of strings
var fruits = ["Apple", "Banana", "Orange"];
console.log("Fruits:", fruits);
// Array of mixed types
var mixedArray = [1, "Two", 3, "Four", 5];
console.log("Mixed Array:", mixedArray);
// Array iteration using for loop
console.log("Iterating through numbers array:");
for (var i = 0; i < numbers.length; i++) {
    console.log(numbers[i]);
}
// Array iteration using for...of loop
console.log("Iterating through fruits array:");
for (var _i = 0, fruits_1 = fruits; _i < fruits_1.length; _i++) {
    var fruit = fruits_1[_i];
    console.log(fruit);
}
// Array methods: push, pop, shift, unshift
numbers.push(6);
console.log("After pushing 6 to numbers:", numbers);
var poppedValue = numbers.pop();
console.log("After popping from numbers:", numbers);
console.log("Popped value:", poppedValue);
numbers.unshift(0);
console.log("After unshifting 0 to numbers:", numbers);
var shiftedValue = numbers.shift();
console.log("After shifting from numbers:", numbers);
console.log("Shifted value:", shiftedValue);
