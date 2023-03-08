"use strict";

alert("First to five wins!");

let playerSelection;
let computerSelection;

let playerScore = 0;
let computerScore = 0;

function getComputerChoice () {
    let random = Math.floor(Math.random() * 3) + 1;

    if (random == 1) return 'Rock';
    if (random == 2) return 'Paper';
    return 'Scissors';
}

function playRound (playerSelection, computerSelection) {

    computerChoiceEmoji.classList.remove('winner');
    playerChoiceEmoji.classList.remove('winner');

    winnerText.textContent = 'VS';

    if (playerSelection == computerSelection){
        winnerText.textContent = 'Tie.';
    } 
    
    if (playerSelection == 'Rock'){
        if (computerSelection == 'Paper'){
            computerScoreText.textContent = `Computer Score: ${++computerScore}`;
            computerChoiceEmoji.classList.add('winner');
            winnerText.textContent = 'Computer Wins.';
        } else {
            playerScoreText.textContent = `Player Score: ${++playerScore}`;
            playerChoiceEmoji.classList.add('winner');
            winnerText.textContent = 'You Win!';
        }
    }
    
    if (playerSelection == 'Paper'){
        if (computerSelection == 'Rock'){
            playerScoreText.textContent = `Player Score: ${++playerScore}`;
            playerChoiceEmoji.classList.add('winner');
            winnerText.textContent = 'You Win!';
        } else {
            computerScoreText.textContent = `Computer Score: ${++computerScore}`;
            computerChoiceEmoji.classList.add('winner');
            winnerText.textContent = 'Computer Wins.';
        }
    }
    
    if (playerSelection == 'Scissors') {
        if (computerSelection == 'Rock'){
            computerScoreText.textContent = `Computer Score: ${++computerScore}`;
            computerChoiceEmoji.classList.add('winner');
            winnerText.textContent = 'Computer Wins.';
        } else {
            playerScoreText.textContent = `Player Score: ${++playerScore}`;
            playerChoiceEmoji.classList.add('winner');
            winnerText.textContent = 'You Win!';
        }
    } 

    if (playerScore == 5 || computerScore == 5){
        gameOver();
    }

}

function gameOver() {
    if (playerScore > computerScore){
        alert(`Congrats! You won ${playerScore}-${computerScore}!`);
    }
    else{
        alert(`You lost ${computerScore}-${playerScore}. Better luck next time!`);
    }

    window.location.reload(); 
}

const buttons = document.querySelectorAll('button');
const playerChoiceEmoji = document.querySelector('.player-emoji');
const computerChoiceEmoji = document.querySelector('.computer-emoji');

    
buttons.forEach((button) => {
    button.addEventListener('click', () => {

        buttons.forEach((button) => {button.classList.remove('active')});
        playerChoiceEmoji.classList.remove('winner');
        computerChoiceEmoji.classList.remove('winner');
        playerChoiceEmoji.textContent = '';
        computerChoiceEmoji.textContent = '';


        playerSelection = button.classList;
        computerSelection = getComputerChoice();
        playRound(playerSelection, computerSelection);

        if (playerSelection == 'Rock'){
            playerChoiceEmoji.textContent = '🪨';

        } else if (playerSelection == 'Paper'){
            playerChoiceEmoji.textContent = '📄';
        } else if (playerSelection == 'Scissors'){
            playerChoiceEmoji.textContent = '✂️';
        }

        if (computerSelection == 'Rock'){
            computerChoiceEmoji.textContent = '🪨';
            computerRockBtn.classList.add('active');
        } else if (computerSelection == 'Paper'){
            computerChoiceEmoji.textContent = '📄';
            computerPaperBtn.classList.add('active');
        } else {
            computerChoiceEmoji.textContent = '✂️';
            computerScissorsBtn.classList.add('active');
        }

        button.classList.add('active');
    });
});

const playerScoreText = document.querySelector('.player-score');
const computerScoreText = document.querySelector('.computer-score');

const winnerText = document.querySelector('.text');

const computerRockBtn = document.querySelector('.computerRockBtn');
const computerPaperBtn = document.querySelector('.computerPaperBtn');
const computerScissorsBtn = document.querySelector('.computerScissorsBtn');