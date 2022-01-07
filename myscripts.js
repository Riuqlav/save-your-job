//Variables accepted in the game

const options = ["rock", "paper", "scissors"];
const rock = document.querySelector(".rock");
const paper = document.querySelector(".paper");
const scissors = document.querySelector(".scissors");
//Variables to reboot
const reboot1 = document.querySelector(".r1");
const reboot2 = document.querySelector(".r2");
const L = document.querySelector(".youLost");
const W = document.querySelector(".youWon");

const gameBoard = document.querySelector(".game");

//play scores to call functions to game over
let playCounterC = 0;
let playCounterU = 0;

//event listeners for getting the user option
rock.addEventListener("click", (e) => {
  grabTheWinner("rock", rollComputerChoice());
});
paper.addEventListener("click", (e) => {
  grabTheWinner("paper", rollComputerChoice());
});
scissors.addEventListener("click", (e) => {
  grabTheWinner("scissors", rollComputerChoice());
});

//function computerPlay with random option
function rollComputerChoice() {
  const randomNumber = Math.floor(Math.random() * options.length);
  return options[randomNumber];
}

// function that increases score for computer
function youLost() {
  let computerScore = document.getElementById("computerScore");
  let number = computerScore.innerHTML;
  number++;
  computerScore.innerHTML = number;
  playCounterC++;
}

// function that increases score for user

function youWon() {
  let userScore = document.getElementById("userScore");
  let number = userScore.innerHTML;
  number++;
  userScore.innerHTML = number;
  playCounterU++;
}

//User or computer or tie, function to grabWinner and check the score counter
function grabTheWinner(userChoice, computerChoice) {
  if (userChoice === "rock" && computerChoice === "paper") {
    youLost(userChoice, computerChoice);
  } else if (userChoice === "rock" && computerChoice === "scissors") {
    youWon(userChoice, computerChoice);
  } else if (userChoice === "paper" && computerChoice === "scissors") {
    youLost(userChoice, computerChoice);
  } else if (userChoice === "paper" && computerChoice === "rock") {
    youWon(userChoice, computerChoice);
  } else if (userChoice === "scissors" && computerChoice === "paper") {
    youWon(userChoice, computerChoice);
  } else if (userChoice === "scissors" && computerChoice === "rock") {
    youLost(userChoice, computerChoice);
  }
  showResult();
}

//Function for hiding game board the game and calling final gif's
W.style.display = "none";
L.style.display = "none";

function showResult() {
  if (playCounterU >= 5) {
    //*I can't manage to call this function even if I write the condition manually
    (L.style.display = "block"), (gameBoard.style.display = "none");
  } else if (playCounterC >= 5) {
    (W.style.display = "block"), (gameBoard.style.display = "none");
  } else {
    gameBoard.style.display = "block";
  }
}

//Functions for rebooting the page
reboot1.addEventListener("click", (e) => {
  document.location.reload();
});
reboot2.addEventListener("click", (e) => {
  document.location.reload();
});
