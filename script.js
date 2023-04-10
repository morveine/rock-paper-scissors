'use strict'


const choices = ['rock', 'paper', 'scissors'];
const result = document.getElementById('result');
const pScore = document.getElementById('player-score');
const mScore = document.getElementById('machine-score');
const restart = document.getElementById('restart');
const winner = document.getElementById('winner');
const playerChoiceImg = document.getElementById('player-choice-img');
const machineChoiceImg = document.getElementById('machine-choice-img');
const rockSource = 'img/right-facing-fist-svgrepo-com.svg'
const paperSource = 'img/raised-hand-svgrepo-com.svg';
const scissorsSource = 'img/victory-hand-svgrepo-com.svg'


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
    if (playerChoice == 'rock') {
        playerChoiceImg.src = rockSource;
        if (machineChoice == 'scissors') {
            machineChoiceImg.src = scissorsSource;
            result.textContent = 'Rock beats scissors.';
            playerScore += 1;
        } else if (machineChoice == 'paper') {
            machineChoiceImg.src = paperSource;
            result.textContent = 'Rock loses to paper.';
            machineScore += 1;
        }
    } else if (playerChoice == 'paper') {
        playerChoiceImg.src = paperSource;
        if (machineChoice == 'rock') {
            machineChoiceImg.src = rockSource;
            result.textContent = 'Paper beats rock.';
            playerScore += 1;
        } else if (machineChoice == 'scissors') {
            machineChoiceImg.src = scissorsSource;
            result.textContent = 'Paper loses to scissors.';
            machineScore += 1;
        }
    } else if (playerChoice == 'scissors') {
        playerChoiceImg.src = scissorsSource;
        if (machineChoice == 'paper') {
            machineChoiceImg.src = paperSource;
            result.textContent = 'Scissors beat paper.';
            playerScore += 1;
        } else if (machineChoice == 'rock') {
            machineChoiceImg.src = rockSource;
            result.textContent = 'Scissors lose to rock.';
            machineScore += 1;
        }
    }
    if (machineChoice == playerChoice) {
        result.textContent = "It's a tie!";
        machineChoiceImg.src = playerChoiceImg.src;
    }
    updateScore()

    if (playerScore == 5) { // when changing to > 5, it lets you do one more turn (so the score is 5-5) before restart
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
