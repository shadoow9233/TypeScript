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

// Unknown Type :  similar to any, but safer
let userInput: unknown = "Hello, TypeScript!";
if (typeof userInput === "string") {
    let myString: string = userInput; // Type checking required
    console.log("My String:", myString);
}

// Tuple Type
let myTuple: [number, string, boolean] = [42, "TypeScript", true];
console.log("Tuple:", myTuple);


