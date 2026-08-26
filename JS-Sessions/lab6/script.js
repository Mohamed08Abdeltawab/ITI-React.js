// Question 1 - Browser Global Object
var trainingName = "Summer Training";

console.log("--- Question 1 ---");
console.log(trainingName);
console.log(window.trainingName);
console.log(window);
console.log(globalThis);
console.log("window === globalThis:", window === globalThis);

// Question 2 - Browser Information
function showBrowserInfo() {
  console.log("--- Question 2 ---");
  console.log("Inner Width:", window.innerWidth);
  console.log("Inner Height:", window.innerHeight);
  console.log("Outer Width:", window.outerWidth);
  console.log("Outer Height:", window.outerHeight);
  console.log("Language:", navigator.language);
  console.log("Is Online:", navigator.onLine);
  console.log("Current URL:", window.location.href);
  console.log("Protocol:", window.location.protocol);
  console.log("Hostname:", window.location.hostname);
  console.log("History Length:", window.history.length);
}

showBrowserInfo();

// Question 3 - Browser Dialogs
console.log("--- Question 3 ---");
alert("Welcome to the JavaScript Lab");
const userName = prompt("What is your name?");
const userConfirmed = confirm("Do you want to continue?");

console.log("Prompt Result (User Name):", userName);
console.log("Confirm Result (Continue):", userConfirmed);

// Question 4 - Timer APIs
console.log("--- Question 4 ---");
let count = 5;

const intervalId = setInterval(function () {
  if (count > 0) {
    console.log(count);
    count--;
  } else {
    console.log("Training Started!");
    clearInterval(intervalId);
  }
}, 1000);

// Question 5 - Event Loop Challenge
// Call Stack => Micro Stack => Macro Stack

console.log("A"); // 1st (Call Stack)

setTimeout(function () {
  console.log("B"); // 6th (Macrotask Queue - 1st timer)
}, 0);

Promise.resolve().then(function () {
  console.log("C"); // 4th (Microtask Queue - Promise)
});

console.log("D"); // 2nd (Call Stack)

queueMicrotask(function () {
  console.log("E"); // 5th (Microtask Queue)
});

console.log("F"); // 3rd (Call Stack)

setTimeout(function () {
  console.log("G"); // 7th (Macrotask Queue - 2nd timer)
}, 0);

console.log("H"); // 4th (Call Stack)
