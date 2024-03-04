/* Create a new button element. Give it a text 'click me', 
background color of red & text color of white
Insert the button as the first element inside the body tag */

// creating button
let newButton = document.createElement("button");
newButton.innerText = "click me";
newButton.style.color = "white";
newButton.style.backgroundColor = "red";

// appending it in body
let body1 = document.querySelector("body");
body1.prepend(newButton);





/* Create a <p> tag in html, give it a class & some styling.
Now create a new class in CSS and try to append this class to the <p> element, using classList */
let para1 = document.querySelector("p");
// use classList to add class
para1.classList.add("newClass");
