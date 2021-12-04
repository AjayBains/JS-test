// Write Javascript Here

const baseUrl = "http://localhost:3000/users";
const headers = {
  "Content-type": "application/json; charset=UTF-8",
};

getUsersRequest().then((users) => {
  //This function has been implemented already for you
  const tableEl = document.getElementById("table");
  for (const user of users) {
    tableEl.appendChild(createTableRow(user));
  }
});
let addButton = document.getElementById("add_button");
let table = document.getElementById("table");
addButton.addEventListener("click", addNewUser);

function addNewUser() {
  const user = {
    name: prompt("Add new"),
    id: Date.now(),
  };
  createTableRow(user);
}

function editUser(id, userName) {
  //TODO: implement me
}

function deleteUser(id) {
  //TODO: implement me
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
