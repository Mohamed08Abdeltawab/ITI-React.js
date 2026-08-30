let usersData = [];
const btnSpread = document.getElementById("btn-spread");
const spreadOutput = document.getElementById("spread-output");

const btnFetchUsers = document.getElementById("btn-fetch-users");
const btnAxiosUsers = document.getElementById("btn-axios-users");
const userSelect = document.getElementById("user-select");
const btnShowUser = document.getElementById("btn-show-user");

const userDetailsCard = document.getElementById("user-details-card");
const userImage = document.getElementById("user-image");
const userName = document.getElementById("user-name");
const userEmail = document.getElementById("user-email");
const userPhone = document.getElementById("user-phone");
const userCompany = document.getElementById("user-company");

const btnFetchPost = document.getElementById("btn-fetch-post");
const btnAxiosPost = document.getElementById("btn-axios-post");
const postOutput = document.getElementById("post-output");

const newPostPayload = {
  title: "Fayoum",
  body: "React",
  userId: 1,
};

// 1. Spread Operator
btnSpread.addEventListener("click", () => {
  const frontEndSkills = ["HTML", "CSS", "JavaScript"];
  const backEndSkills = ["C#", ".NET", "SQL"];

  const fullStackSkills = [
    ...frontEndSkills,
    ...backEndSkills,
    "TypeScript",
    "React",
  ];

  spreadOutput.textContent =
    `Array 1: [${frontEndSkills.join(", ")}]\n` +
    `Array 2: [${backEndSkills.join(", ")}]\n` +
    `Combined with Spread (...): [${fullStackSkills.join(", ")}]`;
});

// Helper: Populate Dropdown & Enable Button
function populateUserDropdown(users) {
  usersData = users;
  userSelect.innerHTML = '<option value="">-- Select a User --</option>';

  users.forEach((user) => {
    const option = document.createElement("option");
    option.value = user.id;
    option.textContent = `${user.firstName} ${user.lastName} (${user.company?.title || "User"})`;
    userSelect.appendChild(option);
  });

  btnShowUser.disabled = false;
}

btnShowUser.addEventListener("click", () => {
  const selectedId = parseInt(userSelect.value, 10);
  if (!selectedId) {
    alert("Please select a user from the list first.");
    return;
  }
  const selectedUser = usersData.find((u) => u.id === selectedId);
  if (selectedUser) {
    userImage.src = selectedUser.image;
    userName.textContent = `${selectedUser.firstName} ${selectedUser.lastName}`;
    userEmail.textContent = selectedUser.email;
    userPhone.textContent = selectedUser.phone;
    userCompany.textContent = `${selectedUser.company?.name || "N/A"} - ${selectedUser.company?.title || "N/A"}`;
    userDetailsCard.classList.remove("hidden");
  }
});

// 2. Fetch Users using standard fetch()
async function fetchUsersWithFetch() {
  try {
    const response = await fetch("https://dummyjson.com/users");
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data = await response.json();
    populateUserDropdown(data.users);
  } catch (error) {
    console.error("Error fetching users via fetch:", error);
    alert("Failed to load users using fetch.");
  }
}

btnFetchUsers.addEventListener("click", fetchUsersWithFetch);

// 3. Fetch Users using Axios
async function fetchUsersWithAxios() {
  try {
    const response = await axios.get("https://dummyjson.com/users");
    populateUserDropdown(response.data.users);
  } catch (error) {
    console.error("Error fetching users via Axios:", error);
    alert("Failed to load users using axios.");
  }
}

btnAxiosUsers.addEventListener("click", fetchUsersWithAxios);

// 4. Add Post using fetch() (POST)
async function addPostWithFetch() {
  postOutput.textContent = "Sending POST request via fetch()...";
  try {
    const response = await fetch("https://dummyjson.com/posts/add", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newPostPayload),
    });

    if (response.ok || response.status === 201) {
      const data = await response.json();
      postOutput.textContent =
        `Success (fetch):\n` +
        `Status: ${response.status} Created\n` +
        `Response Data: ${JSON.stringify(data, null, 2)}`;
    } else {
      postOutput.textContent = `Failed: Server returned status code ${response.status}`;
    }
  } catch (error) {
    postOutput.textContent = `Error in fetch(): ${error.message}`;
  }
}

btnFetchPost.addEventListener("click", addPostWithFetch);

// 5. Add Post using Axios (POST)
async function addPostWithAxios() {
  postOutput.textContent = "Sending POST request via axios...";
  try {
    const response = await axios.post(
      "https://dummyjson.com/posts/add",
      newPostPayload,
      {
        headers: { "Content-Type": "application/json" },
      },
    );

    if (response.status === 200 || response.status === 201) {
      postOutput.textContent =
        `Success (axios):\n` +
        `Status: ${response.status} Created\n` +
        `Response Data: ${JSON.stringify(response.data, null, 2)}`;
    } else {
      postOutput.textContent = `Failed: Server responded with status ${response.status}`;
    }
  } catch (error) {
    postOutput.textContent = `Error in axios: ${error.message}`;
  }
}

btnAxiosPost.addEventListener("click", addPostWithAxios);
