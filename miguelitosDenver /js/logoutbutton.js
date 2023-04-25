/**
        Name: Michael C. Lahargoue
        Course: ICT-4510 Adv Website Design & Mgmt(Online Asynchronous)
        Term: Winter Quarter 2023
        Date: 03.12.2023
        Instructor: Fernando Reyes
        Assignment Name: Week 10 Portfolio Assignment 
        Assignment Description: RESTAURANT WEB APPLICATION | Login in function and other main javascript 
        
        This is a logout button for the log in
*/

const logoutButton = document.getElementById("logout-button");

logoutButton.addEventListener("click", function() {
  // Remove user object from sessionStorage
  sessionStorage.removeItem("user");
  // Show login form
  loginForm.style.display = "block";
  // Reset form fields
  document.getElementById("username").value = "";
  document.getElementById("password").value = "";
});
