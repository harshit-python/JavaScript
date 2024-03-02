// conditional statements

let age = 25;

if (age >=18) {
    console.log("You can vote");
}
else {
    console.log("You cannot vote");
}


// program to check number is odd or even
let num = 10;
if (num%2 === 0) {
    console.log(num, "is even");
} else {
    console.log(num, "is odd");
}


// ternary operator
let result = age >= 18 ? "adult" : "not adult";
console.log(result);

// switch statement
const expr = "Papaya";
switch (expr) {
    case "Oranges":
        console.log("Oranges selected");
        break;
    case "Mangoes":
        console.log("Mangoes selected");
        break;
    case "Papaya":
        console.log("Papaya selected");
        break;
    default:
        console.log("No condition satisfied");
}


/* program to take input from user 
and check whether it is multiple or 5 or not */
let num1 = prompt("Enter a number:");
if (num1% 5 === 0) {
    console.log(num1, "is multiple of 5");
} else {
    console.log(num1, "is not a multiple of 5");
}


/* program which gives grades to student according to his score */

let score = prompt("Enter your score:");
if (90 <= score && score <= 100) {
    console.log("your grade is A");
} else if (70 <= score && score <= 89) {
    console.log("your grade is B");
} else if (60 <= score && score <= 69) {
    console.log("your grade is C");
} else if (50 <= score && score <= 59) {
    console.log("your grade is D");
} else if (0 <= score && score <= 49) {
    console.log("your grade is E");
} else {
    console.log ("please enter a number between 0 and 100");
}
