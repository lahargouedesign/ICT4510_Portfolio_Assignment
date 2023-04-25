/**
        Name: Michael C. Lahargoue
        Course: ICT-4510 Adv Website Design & Mgmt(Online Asynchronous)
        Term: Winter Quarter 2023
        Date: 03.12.2023
        Instructor: Fernando Reyes
        Assignment Name: Week 10 Portfolio Assignment 
        Assignment Description: RESTAURANT WEB APPLICATION | App.js 
        
        Script will POST a request with field values containing "username" and "password"
*/

// Define variables for the login form and food menu item form
const loginForm = document.getElementById("login-form");
const foodMenuItemForm = document.getElementById("food-menu-item-form");

// Add an event listener to the login form for form submission
loginForm.addEventListener("submit", function(event) {
  event.preventDefault();

  // Get the values of the username and password fields
  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;

  // Make a POST request to the login endpoint with the form data
  fetch("https://ict4510.herokuapp.com/api/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      username: username,
      password: password
    })
  })
  .then(function(response) {
    if (response.status === 200) {
      console.log("Login Successful"); // Can view this line 
      return response.json();
    } else {
      throw new Error("Login failed");
    }
  })
  .then(function(user) {
    // Save user object to sessionStorage
    sessionStorage.setItem("user", JSON.stringify(user));

    // Hide login form
    loginForm.style.display = "none";

    // Show the food menu item form
    foodMenuItemForm.style.display = "block";

    // Add a submit event listener to the food menu item form
    foodMenuItemForm.addEventListener("submit", (event) => {
      // Prevent the default form submission behavior
      event.preventDefault();

      // Get the values of the form fields
      const item = document.getElementById("item").value;
      const description = document.getElementById("description").value;
      const price = document.getElementById("price").value;

      // Get the user object from sessionStorage
      const user = JSON.parse(sessionStorage.getItem("user"));

      // Make an AJAX POST request to the menus endpoint with the form data and session token in the header
      fetch("https://ict4510.herokuapp.com/api/menus?api_key=e3a4e40504ed480e3a3b03bc79d478a6", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "x-access-token": user.token
        },
        body: JSON.stringify({
          item: item,
          description: description,
          price: price
        })
      })
      .then((response) => {
        if (response.status === 201) {
          console.log("Menu item added successfully!");
          // Clear the form fields
          document.getElementById("item").value = "";
          document.getElementById("description").value = "";
          document.getElementById("price").value = "";
        } else {
          console.log("Failed to add menu item!");
        }
      });
    });
  })
  .catch(function(error) {
    console.error(error);
  });
});

