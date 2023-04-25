/**
        Name: Michael C. Lahargoue
        Course: ICT-4510 Adv Website Design & Mgmt(Online Asynchronous)
        Term: Winter Quarter 2023
        Date: 03.11.2023
        Instructor: Fernando Reyes
        Assignment Name: Week 10 Portfolio Assignment 
        Assignment Description: RESTAURANT WEB APPLICATION | Food Menu Items Page
*/

// Make a GET request to the menus endpoint
fetch("https://ict4510.herokuapp.com/api/menus?api_key=e3a4e40504ed480e3a3b03bc79d478a6")

  .then(function(response) {
    if (response.status === 200) {
      // Parse the JSON response into an array of menu items
      return response.json();
    } else {
      throw new Error("Failed to retrieve menu items!");
    }
  })
  .then(function(menuItems) {
    // Select the element where you want to display the menu items
    const menuList = document.getElementById("menu-list");

    // Loop through the array of menu items and create HTML elements to display each item
    menuItems.forEach(function(menuItem) {
      // Create a list item element
      const listItem = document.createElement("li");

      // Create a heading element with the item name
      const heading = document.createElement("h2");
      heading.innerText = menuItem.item;

      // Create a paragraph element with the item description
      const description = document.createElement("p");
      description.innerText = menuItem.description;

      // Create a paragraph element with the item price
      const price = document.createElement("p");
      price.innerText = `$${menuItem.price.toFixed(2)}`;

      // Append the heading, description, and price elements to the list item
      listItem.appendChild(heading);
      listItem.appendChild(description);
      listItem.appendChild(price);

      // Append the list item to the menu list
      menuList.appendChild(listItem);
    });
  })
  .catch(function(error) {
    console.error(error);
  });
