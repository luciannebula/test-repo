// Variable Exercises 
 
// For each exercise you'll want to log the result to the console to check your work

// 1. Concatenate "hello" with "goodbye"










 
// 2. Save the substring "Friend" of the string "Hello Friend"


// Length of sub1 is 12 






 


//console.log (phrase1 + phrase2)

let sub1 = "hello friend"

console.log(sub1[6]+sub1[7]+sub1[8]+sub1[9]+sub1[10]+sub1[11])
//or

let subofsub1= sub1.slice(6,12)

console.log(subofsub1)

// 3. Use a template literal with the following variables to create a legible sentence.
//const hello = "Hello"
//const world = "World"
//const my = "My"
//const name = "name";
//const is = "is"; 
//let myName = "max"


let phrase1 = "hello " 
let phrase2 = "goodbye"
let phrase3 = "world"
let phrase4 = "my"
let phrase5 = "name"
let phrase6 = "is" 
let myname = "max"


let template = `${phrase1} ${phrase3} ${phrase4} ${phrase5} ${phrase6}`


console.log(template, myname)






