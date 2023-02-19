// array of users where the data from the API is stored
let arrayOfUsers = [];

// getUser() takes the number of users and fetches multiple users using the argument provided.
const getUsers = (numOfUsers) => {
  fetch(`https://randomuser.me/api/?results=${numOfUsers}`)
    .then((res) => res.json())
    .then((data) => {
      // will store data results into arrayOfUsers
      arrayOfUsers = data.results;
      console.log(arrayOfUsers);
      // Calls the populateUser Funtion when users are fetched
      populateUsers();
    });
};

//Used to populate the data on the DOM
const populateUsers = () => {
  // selects the "displayUser" class in the HTML
  const userContainer = document.querySelector(".displayUser");
  // clears the container
  userContainer.innerHTML = "";
  // forEach used to iterate the arrayOfUsers
  arrayOfUsers.forEach((user) => {
    // Creates an <li> in the <ul>
    const li = document.createElement("li");

    // creates an <img> tag in the <li> and uses the user picture from the array & appends to li.
    const userImg = document.createElement("img");
    userImg.src = user.picture.large;
    li.appendChild(userImg);

    // creates a <p> tag in the <li> where it displays the user title, first, & last name
    const name = document.createElement("p");
    li.appendChild(name);
    const nameText = document.createTextNode(
      `${user.name.title} ${user.name.first} ${user.name.last}`
    );
    li.appendChild(nameText);

    // Creates a button element with the class of "addInfo"
    const infoButton = document.createElement("button");
    infoButton.classList.add("addInfo");
    infoButton.innerText = `Additional Info`;

    // Button Event when clicked will create additional text
    infoButton.addEventListener("click", () => {
      // creates a <p> where user phone info will display
      const userPhone = document.createElement("p");
      li.appendChild(userPhone);
      const phoneText = document.createTextNode(
        `Home Phone:${user.phone} | Cellphone: ${user.cell}`
      );
      li.appendChild(phoneText);

      // creates a <p> where user address info will display
      const userAddress = document.createElement("p");
      li.appendChild(userAddress);
      const addressText = document.createTextNode(
        `Address:${user.location.street.number} ${user.location.street.name}, ${user.location.city}, ${user.location.state}, ${user.location.country} ${user.location.postcode} `
      );
      li.appendChild(addressText);

      // display email
      const userEmail = document.createElement("p");
      li.appendChild(userEmail);
      const emailText = document.createTextNode(`Email:${user.email}`);
      li.appendChild(emailText);

      // display DOB, Age, & Gender
      const userDOB = document.createElement("p");
      li.appendChild(userDOB);
      const dobText = document.createTextNode(
        `DOB:${user.dob.date} | Age: ${user.dob.age} | Gender: ${user.gender}`
      );
      li.appendChild(dobText);

      // used to hide button or else once clicked will duplicate text.
      infoButton.style.display = "none";
    });

    userContainer.appendChild(infoButton);

    // appends the <li> to the user container. Allowing it to be seen in the DOM
    userContainer.appendChild(li);
  });
};

// Window will load the getUser function and take in however many users desired.
window.onload = function () {
  getUsers(15);
};
