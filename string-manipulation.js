string-manipulation.js

// String manipulation
// Our Datatype? --> string 

// Sometimes it matters whether you are using single or double quotews for strings -> "" or ''
// What  is concatenation? -> its the ability to add strings together _>
// Concatenation is the process of appending one string to the end of another string 

let myVariable = "The " + "Man" + "Himself"

// This is also valid _> using single quotes 
let myVariable2 = 'The' + 'Man' + 'Himself';

// An example of string concatenation
let the = "The";
let man = "Man";
let himself = "Himself"

let theManHimself = the = " " + man + " " himself;
console.log(theManHimself, "<--- line 21")



// template literals -> you use backticks for these -> helps with formulating strings  (with variables, for instance )

// - A formal definition: Template literals ares string literals allowing embedded expressions.

// Immutability - we can only create new primitive values 
let testingStr = "hello";

let newString = testingStr + " Hello 2 ";
console.log(9newstring), "<--- line" 34);

// String methods
   //  Note
   /* .indexof() method returns the index
      withim the calling string of the first occurence of the specified value,
      starting the search at fromindex. Returns -1 if the value is not found. 
    */ 
  