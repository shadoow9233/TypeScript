console.log("Hello, World!");

//typescript simple types 
let firstName : string = "Shadoow"; 
console.log(typeof firstName);


let myNumber: number = 42;
let myString: string = "Hello, TypeScript!";
let myBoolean: boolean = true;
let myArray: number[] = [1, 2, 3, 4, 5];
let myObject: { name: string, age: number } = { name: "Shadoow", age: 25 };

// Print all variables
console.log("myNumber:", myNumber);
console.log("myString:", myString);
console.log("myBoolean:", myBoolean);
console.log("myArray:", myArray);
console.log("myObject:", myObject);

// Function that takes parameters of different types
function displayInfo(name: string, age: number, isStudent: boolean): void {
    console.log(`Name: ${name}, Age: ${age}, Is Student: ${isStudent}`);
}

// Call the function with sample values
displayInfo("Shadoow", 25, false);


// Any Type: allows variables to have any data type
let dynamicValue: any = "This can be any type";
console.log("Dynamic Value:", dynamicValue);

// Void Type: return type of functions that do not return a value
function logMessage(): void {
    console.log("This function does not return a value");
}
logMessage();

// Null and Undefined Types: use  to explicitly express the absence of a value
let nullValue: null = null;
let undefinedValue: undefined = undefined;
console.log("Null Value:", nullValue);
console.log("Undefined Value:", undefinedValue);

// Never Type : represents values that never occur. 
function throwError(message: string): never {
    throw new Error(message);
}

// Unknown Type : 
let userInput: unknown = "Hello, TypeScript!";
if (typeof userInput === "string") {
    let myString: string = userInput; // Type checking required
    console.log("My String:", myString);
}

// Tuple Type
let myTuple: [number, string, boolean] = [42, "TypeScript", true];
console.log("Tuple:", myTuple);


// Array of numbers
let numbers: number[] = [1, 2, 3, 4, 5];
console.log("Numbers:", numbers);

// Array of strings
let fruits: string[] = ["Apple", "Banana", "Orange"];
console.log("Fruits:", fruits);

// Array of mixed types
let mixedArray: (number | string)[] = [1, "Two", 3, "Four", 5];
console.log("Mixed Array:", mixedArray);

// Array iteration using for loop
console.log("Iterating through numbers array:");
for (let i = 0; i < numbers.length; i++) {
    console.log(numbers[i]);
}

// Array iteration using for...of loop
console.log("Iterating through fruits array:");
for (const fruit of fruits) {
    console.log(fruit);
}

// Array methods: push, pop, shift, unshift
numbers.push(6);
console.log("After pushing 6 to numbers:", numbers);

let poppedValue = numbers.pop();
console.log("After popping from numbers:", numbers);
console.log("Popped value:", poppedValue);

numbers.unshift(0);
console.log("After unshifting 0 to numbers:", numbers);

let shiftedValue = numbers.shift();
console.log("After shifting from numbers:", numbers);
console.log("Shifted value:", shiftedValue);


// tuples in TS
// Declare a tuple with two elements: a string and a number
let myTuples: [string, number] = ["shadoow", 25];
// Accessing elements in a tuple
console.log(myTuples)