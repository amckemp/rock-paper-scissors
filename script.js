"use strict";

function getComputerChoice () {
    let random = Math.floor(Math.random() * 3) + 1;

    if (random == 1){
        return 'Rock';
    } else if (random == 2){
        return 'Paper';
    } else {
        return 'Scissors';
    }
}

function playRound (playerSelection, computerSelection) {
    let properPlayerSelection = (playerSelection.substr(0,1)).toUpperCase() + (playerSelection.substr(1)).toLowerCase();
    console.log("Player's Choice: " + properPlayerSelection);
    console.log("Computer's Choice: " + computerSelection);

    if (properPlayerSelection === computerSelection){
        return "Tie!";
    } else if (properPlayerSelection === 'Rock'){
        if (computerSelection === 'Paper'){
            return 'You Lose! Paper beats Rock';
        } else {
            return 'You Win! Rock beats Scissors';
        }
    } else if (properPlayerSelection === 'Paper'){
        if (computerSelection === 'Rock'){
            return 'You Win! Paper beats Rock';
        } else {
            return 'You Lose! Scissors beats Paper';
        }
    } else { //Player Selection = Scissors
        if (computerSelection === 'Rock'){
            return 'You Lose! Rock beats Scissors';
        } else {
            return 'You Win! Scissors beats Paper';
        }

    }

}

function game() {
    let playerScore = 0;
    let computerScore = 0;

    for (let i = 1; i < 6; i++){
        let playerSelection = prompt("Please choose Rock, Paper or Scissors:");
        let computerSelection = getComputerChoice();

        console.log(`----------Round ${i}----------\n`)
        let gameResult = playRound(playerSelection, computerSelection);
        console.log(gameResult);

        if (gameResult.substring(4,5) === 'W'){
            playerScore++;
        } else if (gameResult.substring(4,5) === 'L'){
            computerScore++;
        }

        console.log(`Current Score: \n Player: ${playerScore} \n Computer: ${computerScore}`);
    }

    if (playerScore > computerScore){
        return 'You won the game!';
    } else if (playerScore === computerScore){
        return 'Tie.'; 
    } else {
        return 'You lost the game.'; 
    }
}