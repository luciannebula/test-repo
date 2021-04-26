let numArray = [9, 12, 3, 0, 8, 50, 101, 8, 4, 15, 3, 2];

// 1. Using the array above create a function that loops through the array and returns a new array with all the numbers multiplied by 10.
for (var i = 0; i < arr.length; i++) {

  }
  
// 2. Using the array above create a function that returns the sum of all numbers within.
function addArr(numArray){
return numArray;
}
/* 
3. Create a function that accepts an array and a search value. This function will return true if the search value is an element in the array. Otherwise, it will return false. Don't use any built in array methods to do this. Ie: 
doesItInclude([23, 24, "kale"], "kale")  -> should return true
*/

// 4. Create a function that accepts an array. This function will return a new array with the elements in reverse order.
const numArray = [9, 12, 3, 0, 8, 50, 101, 8, 4, 15, 3, 2];
console.log(numArray)
const reversedArray  = numArray.reverse();
console.log("reversed<--reversed array")
// 5. Create another function that adds the numbers in the array that are NOT divisible by 3 and return the total.
function isPossibleToMakeDivisible(numArray , n)
{
    // Find remainder of sum when divided by 3
    var remainder = 0;
    for (i=0; i<n; i++)
        remainder = (remainder + arr[i]) % 3;
 
    // Return true if remainder is 0.
    return (remainder == 0);
}
 
var arr = [9, 12, 3, 0, 8, 50, 101, 8, 4, 15, 3, 2 ];
var n = 3;
if (isPossibleToMakeDivisible(arr, n))
    document.write("Yes\n");
else
    document.write("No\n");
// Use the following array for the questions below (you might need to find examples of "nested loops" using good ol' google):

const nestedArr = ['full', 'stack', ['node', 'react'], [], ['redux'], ['html', 'css'], 'sql'];

// 6. Create a function that logs every word that has the letter 'a' in the word in the array and the nested arrays. Return "Done!" at the end.

// 7. Create a function that logs every word that has a length of 4 in the array and in the nested arrays. Return "Done!" at the end.

// 8. Create a function that logs every word that has the letter 'a' in the word in the array and nested arrays.
