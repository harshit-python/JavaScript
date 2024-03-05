/* Event handling using js*/

/* here e is the event object */
// let btn1 = document.querySelector("#btn1");
// btn1.onclick = (e) => {
//     console.log(e);
//     console.log(e.type);
//     console.log(e.target);
//     console.log("btn1 was clicked");
// }

// let box = document.querySelector("#box");
// box.onmouseover = () => {
//     console.log("You are inside div");
// }


/* Using Event Listeners */

btn1.addEventListener("click", (e) => {
    console.log("button 1 was clicked - handler1");
});
// adding another event listener for same element
btn1.addEventListener("click", (e) => {
    console.log("button 1 was clicked - handler2");
});

// storing this handler function in a variable as we will need this during removeEventListener
const handler3 = () => {
    console.log("button 1 was clicked - handler3");
}
btn1.addEventListener("click", handler3);
btn1.addEventListener("click", (e) => {
    console.log("button 1 was clicked - handler4");
});

// removing event listener (handler3)
// note: the callback reference should be same to remove
btn1.removeEventListener("click", handler3);
let div = document.querySelector("div");



/* create a toggle button that changes the screen to dark-mode and light-mode simulatneously */
// we will use btn2 from index2.html

let btn2 = document.querySelector("#btn2");
let body = document.querySelector("body");

let currMode = "light";

btn2.addEventListener("click", () => {
    if (currMode == "light") {
        currMode = "dark";
        body.classList.remove("light");         // this is the light class written in style2.css
        body.classList.add("dark");      
    } else {
        currMode = "light";
        body.classList.remove("dark");
        body.classList.add("light");
    }
    console.log(currMode);
});