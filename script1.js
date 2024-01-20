// loops in js

// for loop in js
for(let i=1; i<=5; i++) {
    console.log("Hello World!");
}

// program to get sum of first 100 numbers
let sum = 0;
n = 100;
for (let i=1; i<=n; i++) {
    sum = sum + i;
}
console.log(sum);

// while loop in js
let i = 1
while (i <= 5) {
    console.log("i=", i);
    i++;
}


// do while loop in js
let j = 1;
do {
    console.log("j=", j);
    j++;
} while (j<=5);


// for-of loop
size = 0
let str = "Harsh Saxena";
for (let i of str) {
    console.log("i=", i);
    size++
}
console.log("size of string(including space):", size);


// for-in loop
// this returns the keys for any object
let player = {
    "name": "Rohit Sharma",
    "type": "Batsman",
    "national team": "India",
    "ipl team": "Mumbai Indians"
}
for (let i in player) {
    console.log("key:",i,", value:", player[i]);
}


// program to print all even numbers between 0 and 100
for (let i=0; i<=100; i++) {
    if (i%2 === 0) {
        console.log(i);
    }
}

/* program to create a game where we start with any random number.
Ask the user to keep guessing number until the user enters correct value */
let gameNumber = 45;
let numberguessed = prompt("Guess the game number:");
while (gameNumber != numberguessed) {
    numberguessed = prompt("You guessed wrong number. Guess again:");
}
console.log("You have guessed the right number!");
