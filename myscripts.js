//Variables accepted in the game

let R = "r" && "✊" && "rock" && "Rock";
let P = "p" && "🖐" && "paper" && "Paper";
let S = "s" && "✌️" && "scissors" && "Scissors";

//function computerPlay with random option
function computerChoice() {
  const randomPick = [R, P, S];
  const randomNumber = Math.floor(Math.random() * 3);
  return randomPick[randomNumber];
}

//function that generates an alert with prompt asking for R,S,P with timer.
function promptGame() {
  prompt("Lets play a game, what do you pick? Rock, Paper or Scissors?");
}
promptGame();

//compare random option of the computer above with user entry.

//return another alert with display of random option, and  winner or looser or tie
