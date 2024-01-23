// functions and methods in js

function sum(a, b) {
    s = a+b;
    return s;
};

let val = sum(2,3);
console.log('The sum is:',val);

// Arrow functions
const arrowSum = (a,b) => {
    sum = a+b;
    return sum;
};
val = arrowSum(3,5);
console.log('Sum of arrow function:',val);


/* Function that takes String as an argument 
and returns the number of vowels in the string */

function countVowels(str) {
    let vowels = ['a', 'e', 'i', 'o', 'u'];
    let vowelsList = [];
    for (let i of str) {
        if (vowels.includes(i.toLowerCase())) {
            vowelsList.push(i);
        };
    };
    return vowelsList.length;
};
vowelsCount = countVowels("Harsh Saxena");
console.log("Number of vowels in string are:", vowelsCount);


// creating an arrow function for the same

const vowelCount = (str) => {
    let count = 0;
    let vowels = ['a', 'e', 'i', 'o', 'u'];
    for (const i of str) {
        if (vowels.includes(i.toLowerCase())) {
            count ++
        };
    };
    return count;
};
string = "The quick clever brown fox jumps upon a lazy dog";
count = vowelCount(string);
console.log(`There are total ${count} vowels in "${string}"`);


// forEach loop in arrays
let arr = [1,2,3,4,5];
arr.forEach(function printVal(val) {
    // console.log(val);
});

// forEach using arrow function
arr.forEach((val) => {
    // console.log(val);
});


// forEach functions are also called Higher Order Functions or Higher Order Methods
/* HOF or HOM are those functions/methods those either take another function as a 
parameter inside them or return another function as an output */


// program that uses forEach function and prints square of each value from an array

arr = [1,2,3,4,5]
arr.forEach((val) => {
    console.log(`Square of ${val} is ${val*val}`);
}
)


// some more array methods

// map method
// this returns a new array after any operation
let nums = [34, 56, 45];
let newArr = nums.map((val) => {
    return val;
});
console.log(newArr);

// filter method
// creates a new array of elements that give '''true''' for a condition/filter

// all even elements from an array

let arr1 = [1,2,3,4,5,6,7,8,9,10];
let arr2 = arr1.filter((val) => {
    return val%2 === 0
});
console.log(arr2);


// reduce method
/* performs some operations and reduces the array to a single value.
It returns that single value */

// find largest element from an array
let arr3 = [1,2,3,4];
const output = arr.reduce((prev, curr) => {
    return prev > curr ? prev : curr;
});
console.log(output);


/* program to find out marks from an array those score more than 90 */
let marks = [78, 89, 90, 93, 67, 76, 98, 94, 56, 67, 87];
let passMarks = marks.filter((val) => {
    return val > 90;
});
console.log(passMarks);


/* program that takes number n as input from user.
Create an array of number from 1 to n.
Use the reduce method to calculate sum of all numbers in the array.
Use the reduce method to calculate product of all numbers in the array. */
let inputNumber = prompt("Please input a number:");
let numArray = [];
for (let i = 1; i <= inputNumber; i++) {
    numArray.push(i);
};
console.log(`Array of numbers from 1 to ${inputNumber} is [${numArray}]`);

// calculating sum
sum = numArray.reduce((prev, curr) => {
    return prev+curr;
});
console.log(`Sum of all elements of array is = ${sum}`);

// calculating product
// factorial
let product = numArray.reduce((prev, curr) => {
    return prev*curr;
});
console.log(`Product of all elements of array is = ${product}`)