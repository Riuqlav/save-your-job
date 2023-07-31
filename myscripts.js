//Variables accepted in the game
const options = ["rock", "paper", "scissors"];
const emojis = { "rock": "✊", "paper": "✋", "scissors": "✌️" };
const rock = document.querySelector(".rock");
const paper = document.querySelector(".paper");
const scissors = document.querySelector(".scissors");
const reboot1 = document.querySelector(".r1");
const reboot2 = document.querySelector(".r2");
const L = document.querySelector(".youLost");
const W = document.querySelector(".youWon");
const gameBoard = document.querySelector(".game");
const userChoiceDisplay = document.querySelector(".userChoice");
const computerChoiceDisplay = document.querySelector(".computerChoice");
document.getElementById("userPlayer").style.animation = "none";
document.getElementById("computerPlayer").style.animation = "none";

setTimeout(function(){
    document.getElementById("userPlayer").style.animation = "";
    document.getElementById("computerPlayer").style.animation = "";
}, 10);


let playCounterC = 0;
let playCounterU = 0;

//event listeners for getting the user option
rock.addEventListener("click", () => play("rock"));
paper.addEventListener("click", () => play("paper"));
scissors.addEventListener("click", () => play("scissors"));

//function computerPlay with random option
function rollComputerChoice() {
  return options[Math.floor(Math.random() * options.length)];
}

// function that increases score for computer
function youLost() {
  incrementScore("computerScore");  // Increment the computer's score when the user loses
  playCounterC++;
}

// function that increases score for user
function youWon() {
  incrementScore("userScore"); // Increment the user's score when the user wins
  playCounterU++;
}

// increment score for given element id
function incrementScore(id) {
  const score = document.getElementById(id);
  score.innerHTML++;
  
  // update the playCounters
  if (id === "userScore") {
    playCounterU++;
  } else if (id === "computerScore") {
    playCounterC++;
  }
}

//User or computer or tie, function to grabWinner and check the score counter
function play(userChoice) {
  const computerChoice = rollComputerChoice();

  userChoiceDisplay.textContent = `Ur Move: ${emojis[userChoice]}`;
  computerChoiceDisplay.textContent = `${emojis[computerChoice]} :AI Move`;

  // Apply animations
  document.getElementById("userPlayer").style.animation = "slideRight 1s linear forwards";
  document.getElementById("computerPlayer").style.animation = "slideLeft 1s linear forwards";

  if (userChoice === "rock" && computerChoice === "scissors") {
    youWon();
  } else if (userChoice === "rock" && computerChoice === "paper") {
    youLost();
  } else if (userChoice === "paper" && computerChoice === "rock") {
    youWon();
  } else if (userChoice === "paper" && computerChoice === "scissors") {
    youLost();
  } else if (userChoice === "scissors" && computerChoice === "rock") {
    youLost();
  } else if (userChoice === "scissors" && computerChoice === "paper") {
    youWon();
  } else {
    // if userChoice and computerChoice are the same, it's a tie - no increment
  }
  showResult();
}



//Function for hiding game board the game and calling final gif's
W.style.display = "none";
L.style.display = "none";

function showResult() {
  if (playCounterU >= 5) {
    W.style.display = "block"; // Show 'You Won' message if the user reaches 5 points first
    gameBoard.style.display = "none";
  } else if (playCounterC >= 5) {
    L.style.display = "block"; // Show 'You Lost' message if the computer reaches 5 points first
    gameBoard.style.display = "none";
  } else {
    gameBoard.style.display = "block";
  }
}


//Functions for rebooting the page
reboot1.addEventListener("click", () => document.location.reload());
reboot2.addEventListener("click", () => document.location.reload());
