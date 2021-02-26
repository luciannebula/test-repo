// String Manipulation Assignment 


// create a variable and assign the string "we are software engineers at nebula academy"


let myTitle1 = "We are software engineers at nebula academy"





// log the index of software



console.log(myTitle1.length);
console.log(myTitle1.indexOf("software"));
let word3 = "software" 
console.log(myTitle1.indexOf(word3));


// Cutting down the string into "Software Engineers at Nebula Academy."
let cutDown = myTitle1.slice(7, 25);
// Finding the index of "e" in "Software" WITHIN the string "Software Engineers at Nebula Academy."
let indexOfE = cutDown.indexOf("e");
// Using the indexOfE, I am cutting out the word "Software" from "Software Engineers at Nebula Academy."
let software = cutDown.slice(0, indexOfE+1);
console.log(software, "<--- line 2");




// log the index of s 

// console.log(indexof"s")
console.log(software.indexOf("s"))
//console.log(indexof${7})



// log the index of web

let newword3 = "web"
console.log(newword3)

// Extract the word software 
indexOfE = cutDown.indexOf("e");
let cutout = myTitle1.slice(7,25);
// Using the indexOfE, I am cutting out the word "Software" from "Software Engineers at Nebula Academy."
software = cutDown.slice(0, indexOfE+1);
console.log(software, "<--- line 20");

// Extract the word academy

let cutout2 = myTitle1.slice(36,42)

let mynewstring = "We are web engineers at nebula"
console.log(mynewstring);