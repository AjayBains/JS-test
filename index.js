// Write Javascript Here

const baseUrl = "http://localhost:3010/users";
const headers = {
  "Content-type": "application/json; charset=UTF-8",
};

const usersDisplay = getUsersRequest().then((users) => {
  //This function has been implemented already for you
  const tableEl = document.getElementById("table");

  for (const user of users) {
    tableEl.appendChild(createTableRow(user));
  }
});

window.addEventListener("DOMContentLoaded", usersDisplay);
let addButton = document.getElementById("add_button");
let table = document.getElementById("table");

addNewUser = async () => {
  const user = {
    name: prompt("Add new User"),
  };

  await createUserRequest(user);
};

addButton.addEventListener("click", addNewUser);

async function editUser(id, userName) {
  //TODO: implement me
  const user = {
    name: prompt("User"),
    id,
  };
  await updateUserRequest(user);
}

function deleteUser(id) {
  //TODO: implement me
  deleteUserRequest(id);
}

//CRUD HELPER METHODS
function createUserRequest(user) {
  return fetch(baseUrl, {
    method: "POST",
    headers: headers,
    body: JSON.stringify(user),
  }).then((response) => response.json());
}

function getUsersRequest() {
  return fetch(baseUrl, {
    method: "GET",
  }).then((response) => response.json());
}

function deleteUserRequest(id) {
  return fetch(`${baseUrl}/${id}`, {
    method: "DELETE",
  }).then((response) => response.json());
}

function updateUserRequest(user) {
  return fetch(`${baseUrl}/${user.id}`, {
    method: "PATCH",
    headers: headers,
    body: JSON.stringify(user),
  }).then((response) => response.json());
}

// //HELPER METHODS
function createTableRow(user) {
  var tr = document.createElement("tr");
  tr.innerHTML = `<td>${user.name}</td> <td><a href="#" onclick="editUser(${user.id}, '${user.name}')">Edit</a> / <a href="#" onclick="deleteUser(${user.id})">Delete</a></td>`;
  return tr;
}
