// The ? : syntax is the ternary operator, and it can be used in JavaScript for conditional rendering or DOM manipulation.

// Example 1: Changing Text Based on Condition

// const isLoggedIn = true;
// document.getElementById("status").textContent = isLoggedIn ? "Welcome back!" : "Please log in";
// If isLoggedIn is true, the text becomes "Welcome back!".

// If false, it becomes "Please log in".

// Example 2: Changing CSS Style

// const isDarkMode = false;
// document.body.style.backgroundColor = isDarkMode ? "black" : "white";
// Sets background to black if isDarkMode is true, otherwise white.

// Example 3: Adding/Removing a Class

// const btn = document.getElementById("myButton");
// const isActive = true;
// btn.classList.toggle("active", isActive ? true : false);
// Adds "active" class if isActive is true, otherwise removes it.





// DOM Manipulation in JavaScript
// DOM (Document Object Model) manipulation allows you to dynamically change the structure, content, and styles of a webpage using JavaScript.

// 1. Selecting Elements
// Before manipulating, you need to select elements.

// Examples
// Select by ID
const title = document.getElementById("title");

// Select by Class
const items = document.getElementsByClassName("item");

// Select by Tag Name
const paragraphs = document.getElementsByTagName("p");

// Select the first matching element
const firstItem = document.querySelector(".item");

// Select all matching elements
const allItems = document.querySelectorAll(".item");
// Use Case
// Fetching & modifying elements dynamically.

// Example: Changing the text of an element when a user clicks a button.

// 2. Changing Content
// You can modify text, HTML, and attributes.

// Examples
// Change text content
// title.textContent = "Welcome to JavaScript DOM";

// Change inner HTML
// title.innerHTML = "<span style='color: red;'>DOM Manipulation</span>";

// title.innerText = "Welcome to JavaScript DOM"

// Change an attribute
document.getElementById("myLink").setAttribute("href", "https://example.com");


let myImage = document.getElementsByClassName("myImage");


myImage.setAttribute("src", "https://images.unsplash.com/photo-1493375366763-3ed5e0e6d8ec");


// Use Case
// Updating UI dynamically (e.g., live notifications, dynamic text updates).

// 3. Changing CSS Styles
// You can update styles dynamically.

// Examples
// Change individual style properties
title.style.color = "blue";
title.style.fontSize = "24px";

// Add or remove a class
title.classList.add("highlight");
title.classList.remove("bold");
// Use Case
// Dark mode toggle

// Changing button colors on hover or click.

// 4. Adding and Removing Elements
// You can create, append, or remove elements dynamically.

// Examples
// Create a new element
const newDiv = document.createElement("div");
newDiv.textContent = "This is a new div";

// Append to the body or another element
document.body.appendChild(newDiv);

// Remove an element
const removeElement = document.getElementById("oldDiv");
removeElement.remove();
// Use Case
// Dynamically adding/removing list items, comments, notifications.

// 5. Event Handling
// You can handle clicks, keypresses, and other events.

// Examples
document.getElementById("myButton").addEventListener("click", function () {
    alert("Button Clicked!");
});

// Another method
document.getElementById("myButton").onclick = () => {
    console.log("Clicked!");
};
// Use Case
// Form validation, interactive buttons, modal popups.

// 6. Traversing the DOM
// Move between parent, child, and sibling elements.

// Examples
const parent = document.getElementById("list");

// Get the first child element
console.log(parent.firstElementChild);

// Get the last child element
console.log(parent.lastElementChild);

// Get next sibling
console.log(parent.nextElementSibling);
// Use Case
// Modifying sibling elements, navigating parent-child relationships.

// 7. Animations & Effects
// Apply fading, sliding, and hiding effects using JavaScript.

// Examples
// Hide an element
document.getElementById("box").style.display = "none";

// Show an element
document.getElementById("box").style.display = "block";

// Fade out effect
setTimeout(() => {
    document.getElementById("box").style.opacity = "0";
}, 1000);
// Use Case
// Hiding/showing elements on user interaction (e.g., modals, tooltips).