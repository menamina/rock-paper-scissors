let counter = 5;
let choices = ["rock", "paper", "scissors"];
let user = 0;
let computerScore = 0;

function playerChoice() {
    let input = prompt("rock, paper, or scissors?: ");

    while (input == null) {
        input = prompt("rock, paper, or scissors?: ");
    }

    input = input.toLowerCase();
    let check = validateInput(input);

    if (check == true) {
        return input;
    }
}

function validateInput(choice) {
    if (choices.includes(choice)) {
        return true;
    } else {
        return false;
    }
}

function computerChoice() {
    return choices[Math.floor(Math.random() * choices.length)];
}

function checkWinner(playerChoice, computerChoice) {
    if (playerChoice == computerChoice) {
        return "tie";
    }

    if (playerChoice == "rock" && computerChoice == "scissors") {
        return "human";
    }

    if (playerChoice == "scissors" && computerChoice == "paper") {
        return "human";
    }

    if (playerChoice == "paper" && computerChoice == "rock") {
        return "human";
    }

    return "computer";
}

function playGame() {
    for (let i = 0; i < 5; i++) {
        let player = playerChoice();
        let computer = computerChoice();
        let result = checkWinner(player, computer);

        console.log("You chose: " + player);
        console.log("Computer chose: " + computer);

        if (result == "human") {
            console.log("You win this round!");
            humanScore++;
        } else if (result == "computer") {
            console.log("Computer wins this round.");
            computerScore++;
        } else {
            console.log("It's a tie!");
        }

        console.log("Score: You " + humanScore + " - Computer " + computerScore);
        console.log("----------");
    }

    if (humanScore > computerScore) {
        console.log("You win the game!");
    } else if (computerScore > humanScore) {
        console.log("Computer wins the game.");
    } else {
        console.log("The game is a tie.");
    }
}

playGame();