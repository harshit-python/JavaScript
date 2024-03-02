/* append new text after text from html file */
let heading = document.querySelector("h2")
console.dir(heading.innerText);
heading.innerText = heading.innerText + " from Harsh Saxena";
console.dir(heading.innerText);

/* access div with class box and add some unique text to each of them */
let divs = document.querySelectorAll(".box");

let index = 1;
for (div of divs) {
    div.innerText = `new updated value ${index}`;
    index++;
}
