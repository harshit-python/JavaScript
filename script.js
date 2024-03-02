/* Document Object Model in JS
    browser > window object > document object > HTML Model */

/* provides a more detailed and interactive view of the object's properties */
// console.dir(document.body);

/* simply outputs the object to the console in a text format */
// console.log(document.body);

/* selecting with id */ 
let heading = document.getElementById("heading1-id");
// console.dir(heading);

/* selecting with class */
let heading2 = document.getElementsByClassName("heading2-class");
// console.dir(heading2);

/* selecting with tag name */
let parahs = document.getElementsByTagName("p");
// console.dir(parahs);

/* querySelector, using this we can select any of the 3, i.e. id, class or tag 
    it returns first element */
parahs1 = document.querySelector("p");
// console.dir(parahs1);

/* querySelectorAll, using this we can select any of the 3, i.e. id, class or tag 
    it returns all matching elements */
parahsAll = document.querySelectorAll("p");
// console.log(parahsAll);

/* getting properties */
firstElement = document.querySelector("#heading1-id");
// console.log(firstElement);

/* tagName returns the tag name of selected element */
// console.dir(firstElement.tagName);

/* innerText returns the text content of the element and all its children */
// console.dir(firstElement.innerText);

/* accessing the children for any element */

/* returns the first child of element.
    by default every element has text as its first child in DOM */
// console.dir(document.querySelector("body").firstChild);

/* returns last child of element */
// console.dir(document.querySelector("body").lastChild);

/* returns all children of element */
// console.dir(document.querySelector("body").children);

/* indexing children */
// console.dir(document.querySelector("body").children[0]);
// console.dir(document.querySelector("body").children[1]);


/* using innerText 
    returns the text content of the element and all its children */
/* selecting div element from index.html */
let div = document.querySelector("div");
console.dir("using innerText");
console.dir(div.innerText);

/* using innerHTML 
    returns the plain text or HTML contents in the element */
console.dir("using innerHTML");
console.dir(div.innerHTML);

/* using textContent
    returns the textual content even for hidden elements */
console.dir("using textContent");
hiddentHeading = document.querySelector("h1");
console.dir(hiddentHeading.innerText);
console.dir(hiddentHeading.textContent);


/* updating inner text for any element on runtime */

// console.dir(div.innerText);
// div.innerText = 'updated innertext';
// console.dir(div.innerText);
