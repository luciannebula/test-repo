
// using this array: let days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
const week = ["Sunday", "Monday", "Tuesday", "Wednesday","thursday","Friday",]
console.log(week)
// log the length of the array
 const dayslength = week.length
console.log(dayslength);
// log the 4th element in the array 
console.log(week[3]);

// remove the first element in the array. Log the new array and the element removed from the array
let remove = week.shift()
console.log(remove)
console.log(week)


// Add 'Sunday' at the beginning of the array and log the new array
let putin = week.unshift("Sunday")
console.log(putin)
console.log(week)
// Remove the last element in the array. Log the new array and log the element removed
let remove2 = week.pop()
console.log(remove2)
console.log(week)
// Add 'Saturday' to the end of the array and log the new array
let putin2 = week.push("Saturday")
console.log(putin2)
console.log(week)
 

// replace 'Thursday' with 'Friday Junior'
let replace = week.splice(4, 1, 'Friday Junior') 
console.log(replace)
console.log(week)

// extract your favorite day from the array and log the string: 'My favorite day of the week is (day)'
let extract = []
// combine these two arrays together

// let phone = ['iphone', 'android']

// let laptop = ['MacBook', 'HP', 'Dell']