// arrays in js
let marks = [97, 67, 87, 77, 65, 45, 88];
console.log(marks);
console.log(marks.length);
console.log(typeof marks);
console.log('marks[0]', marks[0]);
console.log('marks[1]', marks[1]);
marks[5] = 94;
console.log(marks);

let heroes = ['Ironman', 'Spiderman', 'Superman', 'Hulk', 'Thorr', 'Black widow', 'Batman'];

// for loop 
for (let index = 0; index < heroes.length; index ++) {
    console.log(heroes[index]);
}

// for-of
for (let el of heroes) {
    console.log(el);
}

// for-in
for (let el in heroes) {
    console.log(heroes[el]);
}

// program to find average of runs of a given array
let runsArray = [112, 88, 56, 78, 121, 109, 141, 68];
let sum = 0;
for (let i of runsArray) {
    sum = sum + i;
}
let average = sum/runsArray.length;
console.log("The average is:", average);

// program to apply 10% off on every item in an array
let index = 0;
let itemArray = [250, 645, 300, 900, 50]
for (let item of itemArray) {
    offerValue = item/10;
    newValue = item - offerValue;
    itemArray[index] = newValue;
    index++;
}
console.log("Updated array is:", itemArray);


// array methods
console.log(heroes);
heroes.push("Captain America");
// push add element to last index
console.log("push:", heroes);
// pop removes from last index
let poppedItem = heroes.pop();
console.log("pop:", heroes);
console.log("poppedItem:", poppedItem);
console.log("toString:", heroes.toString());
console.log("original array:", heroes);
let newHeroes = ["Captain America", "Black Panther", "Arrow", "Flash", "Deadpool", "Antman", "Doctor Strange"];
concatHeroes = heroes.concat(newHeroes);
console.log(concatHeroes);
// unshift adds at beginning
let val = newHeroes.unshift("Hawk Eye");
console.log(newHeroes);
// shift deleted from beginning
val = newHeroes.shift();
console.log(newHeroes);
console.log("deleted superhero:", val);

// slice : does not changes original array
let allHeroes = ['Ironman', 'Spiderman', 'Superman', 'Hulk', 'Thorr', 'Black widow', 'Batman', "Captain America", "Black Panther", "Arrow", "Flash", "Deadpool", "Antman", "Doctor Strange"]
console.log("allHeroes:", allHeroes);
console.log("slicedHeroes:",allHeroes.slice(1,5));
console.log("allHeroes:", allHeroes);

// splice : changes original array (add, remove, replace)
allHeroes.splice(2,2, "Black Widow", "Vision");
console.log(allHeroes);


// program to create an array to store companies

companiesArray = ['Bloomberg', 'Microsoft', 'Uber', 'Google', 'IBM', 'Netflix'];

// remove first company from array
companiesArray.shift();
console.log(companiesArray);
// remove Uber and Ola in its place
companiesArray.splice(1, 1, "Ola");
console.log(companiesArray);
// add Amazon at the end
companiesArray.push("Amazon");
console.log(companiesArray);