//Variables accepted in the game

let R = ["r", "✊", "rock", "Rock"];
let P = ["p", "🖐", "paper", "Paper"];
let S = ["s", "✌️", "scissors", "Scissors"];

//function computerPlay with random option
function computerChoice() {
  const randomPick = [R, P, S];
  const randomNumber = Math.floor(Math.random() * 3);
  return randomPick[randomNumber][0];
}

//function that generates an alert with prompt asking for R,S,P, then one for "are you sure?"

function promptGame() {
  u = window.prompt("Let's play a game!", "Choose Rock, Paper or Scissors.");
  if (R.includes(u) || P.includes(u) || S.includes(u)) {
    grabWinner();
  } else if (promptGame());
}

//User or computer or tie, function to grabWinner
function grabWinner(u) {
  if (R.includes(u) && computerChoice() === P) {
    alert(computerChoice() + " I won this time, you're terrible at this game");
  } else if (R.includes(u) && computerChoice() === S) {
    alert(computerChoice() + " Ok you won, let's play again");
  } else if (R.includes(u) && computerChoice() === R) {
    alert(computerChoice() + " Tie, let's play again");
  } else if (P.includes(u) && computerChoice() === P) {
    alert(computerChoice() + " Tie, let's play again");
  } else if (P.includes(u) && computerChoice() === S) {
    alert(computerChoice() + " I won this time, you're terrible at this game");
  } else if (P.includes(u) && computerChoice() === R) {
    alert(computerChoice() + " Ok you won, let's play again");
  } else if (S.includes(u) && computerChoice() === P) {
    alert(computerChoice() + " Ok you won, let's play again");
  } else if (S.includes(u) && computerChoice() === S) {
    alert(computerChoice() + " Tie, let's play again");
  } else if (S.includes(u) && computerChoice() === R)
    alert(computerChoice() + " I won this time, you're terrible at this game");
}
