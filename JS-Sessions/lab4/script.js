// Question 1: Array Methods

console.log("Question 1: Array Methods");

const numbers = [3, 1, 4, 1, 5, 9, 2, 6, 5];
console.log("Original Numbers:", numbers);

// 1
numbers.sort(function (a, b) {
  return a - b;
});
console.log("1. Sorted Ascending:", numbers);

// 2
const uniqueNumbers = numbers.filter(function (num, index, arr) {
  return arr.indexOf(num) === index;
});
console.log("2. Unique Numbers:", uniqueNumbers);

// 3
const squaredNumbers = uniqueNumbers.map(function (num) {
  return num * num;
});
console.log("3. Squared Values:", squaredNumbers);

// 4
const filteredNumbers = squaredNumbers.filter(function (num) {
  return num > 10;
});
console.log("4. Squared Values > 10:", filteredNumbers);

// 5
const sum = filteredNumbers.reduce(function (accumulator, current) {
  return accumulator + current;
}, 0);
console.log("5. Sum of Filtered Values:", sum);

// 6
const nestedNumbers = [
  [1, 2],
  [3, 4],
  [5, [6, 7]],
];
const flattenedArray = nestedNumbers.flat(Infinity);
console.log("6. Flattened Array:", flattenedArray);

// Question 2: Students and Grades

console.log("\nQuestion 2: Students and Grades");

let students = [
  { name: "Youssef", grade: 85 },
  { name: "Sara", grade: 95 },
  { name: "Ahmed", grade: 55 },
  { name: "Mona", grade: 72 },
  { name: "Kareem", grade: 48 },
];
console.log("Initial Students Array:", students);

// 1
students.sort(function (a, b) {
  return a.name.localeCompare(b.name);
});
console.log("1. Sorted Alphabetically:", students);

// 2
const topStudent = students.find(function (student) {
  return student.grade >= 90 && student.grade <= 100;
});
console.log("2. First Student with Grade Between 90 and 100:", topStudent);

// 3
const failedStudents = students.filter(function (student) {
  return student.grade < 60;
});
console.log("3. Students with Grades Below 60:", failedStudents);

// 4
students.push({ name: "Laila", grade: 91 });
console.log("4. After push():", students);

// 5
console.log("5. Printing with for...in:");
for (let index in students) {
  console.log("   Index:", index, "| Student:", students[index]);
}

// 6
const removedStudent = students.pop();
console.log("6. Removed Student via pop():", removedStudent);
console.log("   Remaining Students after pop():", students);

// 7
console.log("7. Printing with for...of:");
for (let student of students) {
  console.log("   Student:", student);
}

// 8
students.splice(
  2,
  0,
  { name: "Hassan", grade: 88 },
  { name: "Nour", grade: 79 },
);
console.log("8A. After Adding 2 Students After 2nd Student:", students);

// B. Remove one student after the third student (at index 3)
students.splice(3, 1);
console.log("8B. After Removing 1 Student After 3rd Student:", students);
