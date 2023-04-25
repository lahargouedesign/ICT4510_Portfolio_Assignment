/**
        Name: Michael C. Lahargoue
        Course: ICT-4510 Adv Website Design & Mgmt(Online Asynchronous)
        Term: Winter Quarter 2023
        Date: 03.11.2023
        Instructor: Fernando Reyes
        Assignment Name: Week 10 Portfolio Assignment 
        Assignment Description: RESTAURANT WEB APPLICATION | Bootstrap Data
*/

$(document).ready(function() {
    // Make Ajax GET request to the API endpoint
    $.ajax({
      url: "https://ict4510.herokuapp.com/api/menus?api_key=e3a4e40504ed480e3a3b03bc79d478a6",
      type: "GET",
      success: function(data) {
        var menuItems = data;
        var tableRows = "";
        for (var i = 0; i < menuItems.length; i++) {
          var item = menuItems[i];
          tableRows += "<tr>" +
                          "<td>" + item.name + "</td>" +
                          "<td>" + item.description + "</td>" +
                          "<td>" + item.price + "</td>" +
                          "<td>" + item.category + "</td>" +
                       "</tr>";
        }
        $("#menu-items").html(tableRows);
      }
    });

    // check if the user is logged in (you can replace this with your own logic)
const isLoggedIn = true;

// get the menu list element by its id
const menuList = document.getElementById('menu-list');

// show/hide the menu list based on the logged in status
if (isLoggedIn) {
  menuList.style.display = 'block';
} else {
  menuList.style.display = 'Secret Food Menu for Admin';
}
  });