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
