//Variables accepted in the game

const options = ["rock", "paper", "scissors"];
const rock = document.querySelector(".rock");
const paper = document.querySelector(".paper");
const scissors = document.querySelector(".scissors");

//event listener for getting the user option
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
}

// function that increases score for user

function youWon() {
  let userScore = document.getElementById("userScore");
  let number = userScore.innerHTML;
  number++;
  userScore.innerHTML = number;
}

//User or computer or tie, function to grabWinner
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
}

const showResultPC = document.getElementById("computerScore");
const showResultUser = document.getElementById("userScore");

function showResult() {
  if (showResultUser >= 2) {
    alert("worked");
  } else if (showResultPC >= 2) {
    alert("worked");
  }
}

console.log(Number(showResultPC.textContent));
