/**
        Name: Michael C. Lahargoue
        Course: ICT-4510 Adv Website Design & Mgmt(Online Asynchronous)
        Term: Winter Quarter 2023
        Date: 03.11.2023
        Instructor: Fernando Reyes
        Assignment Name: Week 10 Portfolio Assignment 
        Assignment Description: RESTAURANT WEB APPLICATION | Menu Select 
*/
/**  menu Select */

const apiKey = "e3a4e40504ed480e3a3b03bc79d478a6";
const apiUrl = `https://ict4510.herokuapp.com/api/menus?api_key=e3a4e40504ed480e3a3b03bc79d478a6`;

async function fetchMenus() {
  try {
    const response = await fetch(apiUrl);
    const menus = await response.json();
    return menus;
  } catch (error) {
    console.error(error);
  }
}

async function addMenuItem(menuId, name, price) {
  const apiUrl = `https://ict4510.herokuapp.com/api/menus/${menuId}/items?api_key=${apiKey}`;
  const item = { name, price };
  const options = {
    method: "POST",
    body: JSON.stringify(item),
    headers: {
      "Content-Type": "application/json",
    },
  };
  try {
    const response = await fetch(apiUrl, options);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
  }
}

async function main() {
  const menus = await fetchMenus();
  if (menus && menus.length > 0) {
    const firstMenu = menus[0];
    console.log(`Adding a menu item to {
        "item": "Chicken",
        "description": "Lemon Roasted",
        "price": "$36.00"
      }`);
    const newItem = await addMenuItem(firstMenu._id, "New Item", 9.99);
    console.log(newItem);
  } else {
    console.log("No menus found.");
  }
}

main();
