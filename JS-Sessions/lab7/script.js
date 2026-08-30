const statusHeading = document.getElementById("status-heading");
const statusMessage = document.getElementById("status-message");
const btnLoadEmps = document.getElementById("load-btn");
const searchInput = document.getElementById("search-input");
const employeeContainer = document.getElementById("employees-container");

const apiURL = "https://dummyjson.com/users?limit=5";
btnLoadEmps.disabled = true;
// Question 2
window.addEventListener("DOMContentLoaded", () => {
  setTimeout(() => {
    statusHeading.textContent = "The page is ready.";
    btnLoadEmps.disabled = false;
  }, 2000);

  // Question 6: Restore saved search value on load
  const savedSearch = localStorage.getItem("employee_search_query");
  if (savedSearch) {
    searchInput.value = savedSearch;
  }
});

// Question 3
btnLoadEmps.addEventListener("click", async () => {
  while (employeeContainer.firstChild) {
    employeeContainer.removeChild(employeeContainer.firstChild);
  }

  statusMessage.className = "loading";
  statusMessage.textContent = "Loading employees, please wait...";
  btnLoadEmps.disabled = true;

  try {
    const response = await fetch(apiURL);

    if (!response.ok) {
      throw new Error(`HTTP Error Status: ${response.status}`);
    }

    const data = await response.json();

    statusMessage.textContent = "";
    statusMessage.className = "";

    data.users.forEach((emp) => {
      createEmployeeCard(emp);
    });

    filterEmployees(searchInput.value);
  } catch (error) {
    statusMessage.className = "error";
    statusMessage.textContent = `Failed to load employees: ${error.message}`;
  } finally {
    btnLoadEmps.disabled = false;
  }
});

// Question 4: Create Employee Card 
function createEmployeeCard(emp) {
  const card = document.createElement("div");
  card.className = "employee-card";

  // Image
  const img = document.createElement("img");
  img.src = emp.image;
  img.alt = `${emp.firstName} ${emp.lastName}`;

  // Full name
  const fullName = document.createElement("h3");
  fullName.className = "employee-name";
  fullName.textContent = `${emp.firstName} ${emp.lastName}`;

  // Email
  const email = document.createElement("p");
  email.textContent = emp.email;

  // Company name
  const company = document.createElement("p");
  company.className = "company-name";
  company.textContent = emp.company?.name || "No Company";

  // Remove button
  const btnRemove = document.createElement("button");
  btnRemove.className = "btn-remove";
  btnRemove.textContent = "Remove";
  btnRemove.addEventListener("click", () => {
    card.remove();
  });

  card.append(img);
  card.append(fullName);
  card.append(email);
  card.append(company);
  card.append(btnRemove);

  employeeContainer.append(card);
}

// Question 5 & 6: Search Employees & Save to localStorage
searchInput.addEventListener("input", (e) => {
  const searchValue = e.target.value;

  // Save value to localStorage
  localStorage.setItem("employee_search_query", searchValue);

  // Filter the currently loaded cards
  filterEmployees(searchValue);
});

function filterEmployees(query) {
  const searchTerm = query.toLowerCase().trim();
  const cards = employeeContainer.querySelectorAll(".employee-card");

  cards.forEach((card) => {
    const nameText = card
      .querySelector(".employee-name")
      .textContent.toLowerCase();

    if (nameText.includes(searchTerm)) {
      card.style.display = "flex";
    } else {
      card.style.display = "none";
    }
  });
}
