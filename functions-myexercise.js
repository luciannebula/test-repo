// Write a function that uppercases the first letter of each word
function upperCaser(word){
    const firstLetter = word[0];
                                                        console.log(firstLetter, "<--- first letter");
    const upperCaseLetter = firstLetter.toUpperCase();
                                                        console.log(upperCaseLetter, "<--- uppercase letter");
    const restOfWord = word.slice(1);
                                                        console.log(restOfWord, "<--- rest of word");
    return upperCaseLetter + restOfWord;
}

const upperCased = upperCaser("lucian");
console.log(upperCased, "<-- we should see Lucian");
/* 
    Rock Paper Scissors (using functions, conditionals, Math, variables, data type)
    Player VS Computer

        Possible outcomes:
            - Rock smashes Scissors
            - Scissors cuts paper
            - Paper covers Rock
            - There could also be a tie

        How should we break up our program?
            - Get the users choice
            - Get the computers choice
            - Compare the two choices and find out who won
            - Start the game and console.log the choices made & the winner

        Possible functions:
            getUserChoice();
            getComputerChoice();
            determineWinner();
            playGame();
            
*/
//Player choice
function getRandomNum(){
    return Math.floor(Math.random()*4 + 1);
}

function getAlternateRandomNum(){
    return Math.floor(Math.random()*4);
}

function getnum(randomNumber){
    if(randomNumber() === 1){
        return "Rock.";
    } else if(randomNumber() === 2){
        return "Paper.";
    } else if(randomNumber() === 3){
        return "Scissors.";
  
    }
}

function alternateGetnum(randomNumber){
    const fortuneList = ["Rock", "Paper", "Scissors",]
    return fortuneList[randomNumber];
}

function formatnum(userName,fortune){
    return userName + " " + fortune;
}

function tellMeAnum(userName){
    const randomNumber = getAlternateRandomNum();
    const fortune = alternateGetnum(randomNumber);
    const output = formatnum(userName, fortune);
    return output;
}

const mynum = tellMeAnum("lucian");

console.log(mynum);
