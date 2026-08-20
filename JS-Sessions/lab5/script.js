// Question 1: Error Object and Exception Handling
function divideNumbers(a, b) {
  if (typeof a !== "number" || typeof b !== "number") {
    throw new TypeError("Both arguments must be numbers.");
  }
  if (b === 0) {
    throw new Error("Division by zero is not allowed.");
  }
  return a / b;
}

function runDivisionTest(a, b) {
  try {
    const result = divideNumbers(a, b);
    console.log("Result:", result);
  } catch (error) {
    console.log("error.name:", error.name);
    console.log("error.message:", error.message);
    console.log("Complete Error Object:", error);
  } finally {
    console.log("Division operation completed.");
  }
}

console.log("=== Question 1: Division Tests ===");
console.log("--- Test 1: Valid Numbers ---");
runDivisionTest(10, 2);

console.log("\n--- Test 2: String and Number ---");
runDivisionTest("10", 2);

console.log("\n--- Test 3: Division by Zero ---");
runDivisionTest(10, 0);

// Question 2: Date Object
console.log("\n=== Question 2: Date Object ===");

const now = new Date();

console.log("Full Date & Time:", now.toString());
console.log("Current Year:", now.getFullYear());
console.log("Current Month (0-11):", now.getMonth());
console.log("Current Day of Month:", now.getDate());
console.log("Current Day of Week (0-6):", now.getDay());
console.log("Current Hours:", now.getHours());
console.log("Current Minutes:", now.getMinutes());
console.log("Current Seconds:", now.getSeconds());

const examDate = new Date(2026, 8, 15, 9, 0, 0);

const timeDifferenceMs = examDate.getTime() - now.getTime();
const daysRemaining = Math.ceil(timeDifferenceMs / (1000 * 60 * 60 * 24));

console.log("Exam Date (Readable):", examDate.toDateString());
console.log("Remaining Days until Exam:", daysRemaining, "day(s)");

// Question 3: Temporal API
console.log("\n=== Question 3: Temporal API ===");

const trainingDate = Temporal.PlainDate.from("2026-07-20");
const addedTenDays = trainingDate.add({ days: 10 });
const finalTrainingDate = addedTenDays.subtract({ days: 3 });
const difference = trainingDate.until(finalTrainingDate, {
  largestUnit: "day",
});

const lectureStartTime = Temporal.PlainTime.from("09:00");
const lectureEndTime = lectureStartTime.add({ hours: 3 });

console.log("Original training date:", trainingDate.toString());
console.log("Date after adding ten days:", addedTenDays.toString());
console.log("Date after subtracting three days:", finalTrainingDate.toString());
console.log("Difference in days:", difference.days, "days");
console.log("Lecture start time:", lectureStartTime.toString());
console.log("Lecture end time:", lectureEndTime.toString());
