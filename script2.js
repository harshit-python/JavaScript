// strings in js

// strings are immutable in javascript

// length of string
let str = "Harsh Saxena";
console.log(str.length);

// string indices
console.log("str[0]", str[0]);
console.log("str[1]", str[1]);

// template literals
let specialString = `This is a template literal.`;
console.log(typeof specialString)
console.log(specialString);

let player = {
    "name": "Rohit Sharma",
    "type": "Batsman",
    "national_team": "India",
    "ipl team": "Mumbai Indians"
}
output = `${player.name} is a ${player.type} who plays for ${player.national_team}.`
console.log(output);


// escape characters
console.log("breaking\nline");
console.log("breaking\tline");

// string methods
let str1 = "harsh Saxena";
console.log("toUppercase:",str1.toUpperCase());
console.log("toLowercase:",str1.toLowerCase());
console.log("trim:",str1.trim());
console.log(str1.slice(0, 6));
let str2 = " the great";
console.log(str1.concat(str2));
console.log(str1.replace("h", "f"));
console.log(str1.replaceAll("h", "f"));
console.log(str1.charAt(1));

/* program to promt the user to enter their full name, generate a username 
starting with @, followed by full name and ending with full name length */
let enteredName = prompt("Please enter your full name without spaces:");
lengthEnteredName = enteredName.length;
userName = `@${enteredName.toLowerCase()}${lengthEnteredName}`
console.log("Your generated username is:", userName);
