'use strict'


const choices = ['rock', 'paper', 'scissors'];
const result = document.getElementById('result');
const pScore = document.getElementById('player-score');
const mScore = document.getElementById('machine-score');
const restart = document.getElementById('restart');
const winner = document.getElementById('winner');


// track what choices were made by the player
const rock = document.getElementById('rock');
rock.addEventListener('click', () => doTurn('rock'));

const paper = document.getElementById('paper');
paper.addEventListener('click', () => doTurn('paper'));

const scissors = document.getElementById('scissors');
scissors.addEventListener('click', () => doTurn('scissors'));


// keep the score
let playerScore = 0, machineScore = 0;

function updateScore() {
    pScore.textContent = playerScore;
    mScore.textContent = machineScore;
}


// do one turn
function doTurn(playerChoice) {
    const machineChoice = choices[Math.floor(Math.random() * choices.length)];
    if (machineChoice == playerChoice) {
        result.textContent = "It's a tie!";
    }
    if (playerChoice == 'rock') {
        if (machineChoice == 'scissors') {
            result.textContent = 'You win! Rock beats scissors.';
            playerScore += 1;
        } else if (machineChoice == 'paper') {
            result.textContent = 'You lose! Rock loses to paper.';
            machineScore += 1;
        }
    } else if (playerChoice == 'paper') {
        if (machineChoice == 'rock') {
            result.textContent = 'You win! Paper beats rock.';
            playerScore += 1;
        } else if (machineChoice == 'scissors') {
            result.textContent = 'You lose! Paper loses to scissors.';
            machineScore += 1;
        }
    } else if (playerChoice == 'scissors') {
        if (machineChoice == 'paper') {
            result.textContent = 'You win! Scissors beat paper.';
            playerScore += 1;
        } else if (machineChoice == 'rock') {
            result.textContent = 'You lose! Scissors lose to rock.';
            machineScore += 1;
        }
    }
    updateScore()

    if (playerScore == 5) {
        winner.textContent = 'Congrats! You beat the machine.';
        restartGame();
    } else if (machineScore == 5) {
        winner.textContent = 'Ouch! The machine beat you.';
        restartGame();
    } else {
        winner.textContent = '';
    }
}

restart.addEventListener('click', () => restartGame());

function restartGame() {
    playerScore = 0;
    machineScore = 0;
    updateScore();
}
