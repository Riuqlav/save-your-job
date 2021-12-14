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

// User or computer or tie function grabWinner {
function grabWinner() {
  if (u === R && computerChoice === P) {
    return "You suck, I win!";
  } else if (u === R && computerChoice === S) {
    return "Ok, you won...whatever";
  } else if (u === R && computerChoice === R) {
    return "Stop choosing the one I've choose, let's try again";
  } else if (u === P && computerChoice === P) {
    return "Stop choosing the one I've choose, let's try again";
  } else if (u === P && computerChoice === S) {
    return "You suck, I win!";
  } else if (u === P && computerChoice === R) {
    return "Ok, you won...whatever";
  } else if (u === S && computerChoice === S) {
    return "Stop choosing the one I've choose, let's try again";
  } else if (u === S && computerChoice === P) {
    return "Ok, you won...whatever";
  } else if (u === S && computerChoice === R);
  return "You suck, I win!";
}

//display result.

//return another alert with display of random option, and  winner or looser or tie
