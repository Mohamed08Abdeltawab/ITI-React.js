// •	Ask the user (with prompt) to enter:
const userName = prompt("Please enter your name:");
const userAgeInput = prompt("Please enter your age:");

// Convert string input to a number and add 5
const futureAge = Number(userAgeInput) + 5;

alert(`Hello ${userName}, in 5 years you will be ${futureAge} years old`);

// Assignment 2:

// Declare initial variables
let strNum = "123";
let strFloat = "45.67";
let isBool = true;

// 1. parseInt()
console.log("Before:", strFloat, "| Type:", typeof strFloat);
let parsedInt = parseInt(strFloat);
console.log("After:", parsedInt, "| Type:", typeof parsedInt);

// 2. parseFloat()
console.log("Before:", strFloat, "| Type:", typeof strFloat);
let parsedFloat = parseFloat(strFloat);
console.log("After:", parsedFloat, "| Type:", typeof parsedFloat);

// 3. Number()
console.log("Before:", strNum, "| Type:", typeof strNum);
let convertedNum = Number(strNum);
console.log("After:", convertedNum, "| Type:", typeof convertedNum);

//
console.log("Before:", isBool, "| Type:", typeof isBool);
let boolToNum = Number(isBool);
console.log("After:", boolToNum, "| Type:", typeof boolToNum);

// 4. String()
console.log("Before:", isBool, "| Type:", typeof isBool);
let boolToStr = String(isBool);
console.log("After:", boolToStr, "| Type:", typeof boolToStr);

// Assignment 3

// Task 1
console.log("FizzBuzz");
for (let i = 1; i <= 100; i++) {
  if (i % 3 === 0 && i % 5 === 0) {
    console.log("FizzBuzz");
  } else if (i % 3 === 0) {
    console.log("Fizz");
  } else if (i % 5 === 0) {
    console.log("Buzz");
  } else {
    console.log(i);
  }
}

// Task 2
console.log("Fibonacci (First 15)");
let count = 0;
let n1 = 0,
  n2 = 1;
const fibonacciList = [];

while (count < 15) {
  fibonacciList.push(n1);
  let nextTerm = n1 + n2;
  n1 = n2;
  n2 = nextTerm;
  count++;
}
console.log("Fibonacci numbers:", fibonacciList.join(", "));

// Task 3
console.log("Doubled Array");
const numbers = [10, 20, 30, 40, 50];
const doubledNumbers = [];

for (let i = 0; i < numbers.length; i++) {
  doubledNumbers.push(numbers[i] * 2);
}
console.log("Original array:", numbers);
console.log("Doubled array:", doubledNumbers);

// Task 4
console.log("Multiplication Table (1-10)");
for (let i = 1; i <= 10; i++) {
  let row = "";
  for (let j = 1; j <= 10; j++) {
    row += `${(i * j).toString().padStart(4, " ")}`;
  }
  console.log(row);
}

// Assignment 4: Debug the Output

/*
  var Name = ;
  console.log name;
  document.writeln(Hello everyone!);

  Bugs & Issues Explained:
    Bugs & Issues Explained:
    1.no right side assignment operator
    2.missing parentheses the function and case-sensitive 'Name' 'name'
    3.missing quotation marks

*/

// Fixed Script:
var personName = "mohamed";
console.log(personName);
document.writeln("Hello everyone!");
