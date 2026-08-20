// Section 1: Functions

// 1. sumArray Function
function sumArray(arr) {
  console.log("I mohamed abdeltawab");

  // Check if the input is an array
  if (Array.isArray(arr) == false) {
    return "Input is not an array";
  }

  var sum = 0;
  for (var i = 0; i < arr.length; i++) {
    sum = sum + arr[i];
  }

  return sum;
}

// 2. Character Count Function
function countCharacters(str) {
  var counts = {};

  for (var i = 0; i < str.length; i++) {
    var char = str[i];

    if (counts[char] == undefined) {
      counts[char] = 1;
    } else {
      counts[char] = counts[char] + 1;
    }
  }

  return counts;
}

// 3. Recursive Factorial Function
function factorial(n) {
  if (n == 0 || n == 1) {
    return 1;
  }

  return n * factorial(n - 1);
}

// Section 2: Objects

var student = {
  name: "Ali",
  age: 20,
  grades: [85, 90, 78, 92],

  // Method to calculate average grade using 'this'
  calculateAverage: function () {
    var total = 0;
    for (var i = 0; i < this.grades.length; i++) {
      total = total + this.grades[i];
    }
    return total / this.grades.length;
  },

  // update age based on birth year
  updateAge: function (birthYear) {
    this.age = 2026 - birthYear;
    return this.age;
  },
};

// Testing / Execution

// Section 1 Tests
var totalSum = sumArray([10, 20, 30, 40]);
console.log(totalSum);

var invalidSum = sumArray("Not an array");
console.log(invalidSum);

var charResult = countCharacters("hello");
console.log(charResult);

var factResult = factorial(5);
console.log(factResult);

// Section 2 Tests
console.log(student.name);
console.log(student.calculateAverage());

student.updateAge(2004);
console.log(student.age);
