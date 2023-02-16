let arrayOfUsers = [];
window.onload = function () {
  getUsers();
};

const getUsers = () => {
  fetch("https://randomuser.me/api/")
    .then((res) => res.json())
    .then((users) => (arrayOfUsers = users));
};

const consoleUsers = () => {
  console.log(arrayOfUsers);
};

const populateUsers = () => {
  const displayUser = document.getElementById("displayUser");
  displayUser.innerHTML = "";
  arrayOfUsers.results.forEach((user) => {
    const li = document.createElement("li");
    const text = document.createTextNode(
      `${user.name.first} ${user.name.last} - ${user.email}`
    );
    li.appendChild(text);
    displayUser.appendChild(li);
  });
};
let btn = document.getElementById("btnClick");
let img = document.getElementById("image");

btn.addEventListener("click", function () {
  fetch("https://randomuser.me/api/")
    .then((res) => res.json())
    .then((result) => {
      console.log(result);
      img.src = result.message;
    })
    .catch((err) => console.log(err));
});
