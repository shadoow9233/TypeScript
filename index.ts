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

