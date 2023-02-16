const userContainer = document.getElementById("displayUser");

let arrayOfUsers = [];

const getUsers = (numOfUsers) => {
  fetch(`https://randomuser.me/api/?results=${numOfUsers}`)
    .then((res) => res.json())
    .then((data) => {
      const user = data.results;
      arrayOfUsers.push(user);
      console.log(arrayOfUsers);
      populateUsers();
    });
};

const populateUsers = () => {};

window.onload = function () {
  getUsers(15);
};
