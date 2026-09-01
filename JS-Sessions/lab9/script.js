//q1
console.log("=== Q1: Library Management System ===");

class LibraryBook {
  constructor(title, author, isBorrowed = false) {
    this.title = title;
    this.author = author;
    this.isBorrowed = isBorrowed;
  }

  borrow() {
    if (!this.isBorrowed) {
      this.isBorrowed = true;
      console.log(`You have borrowed "${this.title}" by ${this.author}.`);
    } else {
      console.log(`Sorry, "${this.title}" is already borrowed.`);
    }
  }

  returnBook() {
    if (this.isBorrowed) {
      this.isBorrowed = false;
      console.log(`You have returned "${this.title}" by ${this.author}.`);
    } else {
      console.log(`"${this.title}" was not borrowed.`);
    }
  }
}

//create instances of LibraryBook
const book1 = new LibraryBook("To Kill a Mockingbird", "Harper Lee");
const book2 = new LibraryBook("1984", "George Orwell");
const book3 = new LibraryBook("The Great Gatsby", "F. Scott Fitzgerald");

//borrow and return books
book1.borrow();
book1.borrow(); // Trying to borrow again
book1.returnBook();
book1.returnBook(); // Trying to return again

console.log("=== Q2: Employee Management System ===");
//q2
class Employee {
  constructor(name, salary) {
    this.name = name;
    this.salary = salary;
  }

  getRole() {
    return "General Employee";
  }
}

class Manager extends Employee {
  getRole() {
    return "Manager";
  }
}

class Developer extends Employee {
  getRole() {
    return "Developer";
  }
}

//create instances of Manager and Developer
const manager = new Manager("Alice", 80000);
const developer = new Developer("Bob", 60000);

console.log(
  `${manager.name} is a ${manager.getRole()} with a salary of $${manager.salary}.`,
);
console.log(
  `${developer.name} is a ${developer.getRole()} with a salary of $${developer.salary}.`,
);

//q3
console.log("=== Q3: Expense Tracker ===");
class ExpenseTracker {
  #total;
  #owner;

  constructor(owner) {
    this.#owner = owner;
    this.#total = 0;
  }

  addExpense(amount) {
    this.#total += amount;
  }

  getTotal() {
    return this.#total;
  }

  getOwner() {
    return this.#owner;
  }
}

//create an instance of ExpenseTracker
const myExpenses = new ExpenseTracker("John Doe");
myExpenses.addExpense(50);
myExpenses.addExpense(25);
myExpenses.addExpense(20);
console.log(
  `Total expenses for ${myExpenses.getOwner()}: $${myExpenses.getTotal()}`,
);

//q4
console.log("=== Q4: function called guessingGame. ===");
function guessingGame() {
  const randomNumber = Math.floor(Math.random() * 10) + 1;
  let attempts = 0;

  function guessNumber(userGuess) {
    attempts++;

    if (userGuess === randomNumber) {
      console.log(
        `Congratulations! You guessed the number ${randomNumber} correctly in ${attempts} attempts.`,
      );
      return true;
    } else {
      console.log(`Sorry, ${userGuess} is not the correct number.`);
      return false;
    }
  }

  return { guessNumber };
}

const game = guessingGame();
for (let i = 1; i <= 10; i++) {
  if (game.guessNumber(i)) {
    break;
  }
}

//q5
console.log("=== Q5: Alert the sum of 2 numbers. ===");
(function sum(a, b) {
  const result = a + b;
  console.log(`The sum of ${a} and ${b} is: ${result}`);
  //or just use alert(result)
  //   alert(`The sum of ${a} and ${b} is: ${result}`);
})(5, 10);
