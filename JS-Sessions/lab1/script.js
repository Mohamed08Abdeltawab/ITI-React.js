// Section 1: Variables and Data Types

//1
let myAge = 21;
console.log("Age:", myAge);

//2
let camelCaseVariable = "JavaScript";
let snake_case_variable = "JavaScript";
let PascalCaseVariable = "JavaScript";

//3
let test;
console.log("Type of test:", typeof test);

// 4
let mySymbol = Symbol("uniqueIdentifier");
console.log("Symbol:", mySymbol);

// 5
let bigIntNum = 9007199254740991n;
let bigIntResult = bigIntNum + 100n;
console.log("BigInt arithmetic result:", bigIntResult);

// Section 2: Understanding Variable Reassignment

// 6
var myScore = 80;
console.log("Initial Score:", myScore);
myScore = 95;
console.log("Reassigned Score:", myScore);

// 7
let isAvailable = true;
console.log("Initial Availability:", isAvailable);
isAvailable = null;
console.log("Reassigned Availability:", isAvailable);

// Section 3: Printing Data in JavaScript

// 8
document.write("<p>Hello from Section 3: document.write() message.</p>");

// 9
console.log(`Line 1: Learning JavaScript
Line 2: Variables & Data Types
Line 3: DOM interaction`);

// 10
let isActive = true;
document.write("<p>Is user account active? " + isActive + "</p>");

// Section 4: Problem-Solving with JavaScript Basics

// 11
let num1 = 20;
let num2 = 5;

console.log("Sum:", num1 + num2);
console.log("Difference:", num1 - num2);
console.log("Product:", num1 * num2);
console.log("Quotient:", num1 / num2);

// 12
let checkNumber = 14;
let isEven = checkNumber % 2 === 0;
console.log(`Is ${checkNumber} even?`, isEven);
