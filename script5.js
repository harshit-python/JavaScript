/* DOM Manipulation */

let div = document.querySelector("div");
console.log(div)

/* get attribute */
let id = div.getAttribute("id");
console.log(id);
let divName = div.getAttribute("name");
console.log(divName);

let para = document.querySelector("p");
console.log(para.getAttribute("class"));

/* set attribute */
para.setAttribute("class", "newPara");
console.log(para.getAttribute("class"));

/* style */
// it is used to access style css elements into js file

let = document.querySelector("div");
console.log(div.style);     /* this will return the inline style object, 
                            inline style is that style which is written directly in our tags */
/* overwriting div tag contents */
// div.style.backgroundColor = "green";
// div.style.fontSize = "26px";

/* add a new element 
we use createElement to create a new element */
let newBtn = document.createElement("button");
console.log(newBtn);
newBtn.innerText = "click me!";

/* now to show this button on screen, we will have to add this button in our DOM */

/* append */
// adds at the end of node (inside)
let div1 = document.querySelector("div");
div1.append(newBtn);

/* prepend */
// adds at the beginning of node (inside)
div1.prepend(newBtn);

/* before */
// add before the node (outside)
div1.before(newBtn);

/* after */
// add after the node (outside)
div1.after(newBtn);


/* creating a heading */
let newHeading = document.createElement("h1");
newHeading.innerHTML = "<i>Hi, I am new!</i>";

body = document.querySelector("body");
body.prepend(newHeading);

/* delete an element */
let para1 = document.querySelector("p");
para1.remove();
