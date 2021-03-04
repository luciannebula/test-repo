// Write a function that uppercases the first letter of each word

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
var mychoice = prompt("pick Rock, Paper, Scissors, ");

if (mychoice !== "rock" || mychoice!== "Paper" || mychoice !== "Scissors"){
    console.log("Wrong choice")
    prompt("pick Rock, Paper, Scissors, ");
    console.log("player: "+ mychoice);
}

    var computerAI = Math.random();
    if (computerAI < 0.40) {
        computerAI = "Rock";

    }
else if(computerAI <= 0.60) {
    computerAI = "Paper";

}    
else {
    computerAI = "Scissors";

}
console.log("Computer:" + computerAI);

var compare = function(choice1, choice2){
    if(choice1 === choice2){
        console.log("The resultis a tie!")
    }
}