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
const restartWindow = document.getElementById('restart-container')
const finalPScore = document.getElementById('player-score-final');
const finalMScore = document.getElementById('machine-score-final');

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
    finalPScore.textContent = playerScore;
    finalMScore.textContent = machineScore;
}

// restart the game

function restartGame() {
    restartWindow.classList.add('fadeout');
    setTimeout(() => {
        restartWindow.classList.remove('fadeout')
        restartWindow.style.display = 'none';
    }, 1000);
    playerScore = 0;
    machineScore = 0;
    result.textContent = 'Click on a button below to start.';
    playerChoiceImg.src='img/white-question-mark-svgrepo-com.svg';
    machineChoiceImg.src='img/white-question-mark-svgrepo-com.svg';
    updateScore();
}

restart.addEventListener('click', () => restartGame());


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

    if (playerScore == 5) {
        winner.textContent = 'Congrats! You beat the machine.';
        restartWindow.style.display = 'flex';
    } else if (machineScore == 5) {
        winner.textContent = 'Ouch! The machine beat you.';
        restartWindow.style.display = 'flex';
    }
}

