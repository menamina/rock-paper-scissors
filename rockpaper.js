// 5 rounds; play on console
let counter = 5
let choices = ["rock", "paper", "scissors"]

function game() {
    playround();
}

function playRound() {
    let usrchoice = playerChoice();
    let computerSelection = computerChoice();
}

function playerChoice() {
    let input = prompt("rock, paper, or scissors?: ");

    while(input == null) {
        input = prompt("rock, paper, or scissors?: ");
    }

    input = input.toLowerCase;
    let check = validateInput(input)
    if( check == true) {
        console.log(input)
    }
}

function validateInput(choice) {
        if(choices.includes(choice)) {
        return true;
    } else {
           return false;
        }
    }

function computerChoice() {
    return choices[Math.floor(Math.random()*choices.length)]
}

game();