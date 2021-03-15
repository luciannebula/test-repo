// arrays and loops homework

const numArray = [9, 12, 3, 0, 8, 50, 101, 8, 4, 15, 3, 2];

// 1. Using the array above create a function that loops through the array and returns a new array with all the numbers multiplied by 10.

function printnum(inputArr) {
    const value = []
    for (let i = 0; i < inputArr.length; i++) {
        value[i] = inputArr[i] * 10

    }
    console.log(value)
    return value;
}
printnum(numArray);
// 2. Using the array above create a function that returns the sum of all numbers within.
function sumNum(inputArr) {
    let sum = 0
    for (let i = 0; i < inputArr.length; i++) {
        sum += inputArr[i]

    }
    console.log(sum)
    return sum;
}
sumNum(numArray)

//3. Create a function that accepts an array and a search value. This function will return true if the search value is an element in the array. Otherwise, it will return false. Don't use any built in array methods to do this. Ie: 
//doesItInclude([23, 24, "kale"], "kale")  -> should return true

function searchFunction(array, searchValue) {
    for (let i = 0; i < array.length; i++) {
        if (searchValue == array[i]) {
            return true

        }
    }
}
console.log(searchFunction([23, 24, "kale"], "kale"))
// 4. Create a function that accepts an array. This function will return a new array with the elements in reverse order.
function reverseArr(array) {
    let flipper = []
    let flippa = 0
    for (let i = array.length; i > 0; i--)
        flipper[i] = array[flippa++]
    flipper.shift()
    console.log(flipper)
    return flippa

}
reverseArr(numArray)
// 5. Create another function that adds the numbers in the array that are NOT divisible by 3 and return the total.
function sumNotDiv(array) {
    let sum = 0
    for (let i = 0; i < array.length; i++) {
        if (array[i] % 3 !== 0) {
            sum = sum + array[i]

        }
    }
    return sum
}
console.log(sumNotDiv(numArray))



// Use the following array for the questions below (you might need to find examples of "nested loops" using good ol' google):
// Nested loops are.... just that a loop within a loop
const nestedArr = ['full', 'stack', ['node', 'react'], [], ['redux'], ['html', 'css'], 'sql'];

const onlystrings = ['full', 'stack', 'node', 'react', 'redux', 'html', 'css', 'sql',]

// 6. Create a function that logs every word that has the letter 'a' in the word in the array and the nested arrays. Return "Done!" at the end.
function logwordsWithA2(array) {
    for (let i = 0; i < array.length; i++) {
        // Thinking about the firdt iteration: When array[0] is a... 'full'
        for (let j = 0; j < array[i].length; j++) {
            // Thinking about the first iteration: iterate over that string...'full' [0] (array[j])-> 'f'
            if (array[i][j] === 'a') {
                // We want to log ever word.
                // We want to log every word.
                console.log(array[i]);
            }   /* The break keyword jumps us out of our loop so we dont log a word twice that might have more than one letter 'a
        in it */
            break;
        }
    }
}
return 'Done!'

const holdval2 = logwordsWithA(onlystrings);
console.log(holdval2, "<-- return value");
// 7. Create a function that logs every word that has a length of 4 in the array and in the nested arrays. Return "Done!" at the end.

// 8. Create a function that logs every word that has the letter 'a' in the word in the array and nested arrays.

