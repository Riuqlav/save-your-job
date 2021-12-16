//Variables accepted in the game

const options = ["rock", "paper", "scissors"];

//function computerPlay with random option
function rollComputerChoice() {
  const randomNumber = Math.floor(Math.random() * options.length);
  return options[randomNumber];
}

//function that generates an alert with prompt asking for "rock", "paper", "scissors"

function promptGame() {
  let userChoice = window.prompt(
    "Let's play a game! Choose Rock, Paper or Scissors."
  );
  alert("Are you sure?");
  alert("Are you VERY sure?");
  userChoice = userChoice.toLowerCase(userChoice);
  const computerChoice = rollComputerChoice();
  if (options.includes(userChoice)) {
    grabTheWinner(userChoice, computerChoice);
  } else {
    alert("Come on, you know how to play the game! try again");
  }
  // Restart the game.
  promptGame();
}
promptGame();

function youLost(userChoice, computerChoice) {
  alert(
    "I won this time, you're terrible at this game. My pick: " +
      computerChoice +
      ", your pick: " +
      userChoice
  );
}

function youWon(userChoice, computerChoice) {
  alert("You won :/ My pick: " + computerChoice + ", your pick: " + userChoice);
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
  } else if (userChoice === computerChoice) {
    alert("I've picked the same, tie!");
  }
}
