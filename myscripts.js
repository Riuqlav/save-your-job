//Variables accepted in the game

const options = ["rock", "paper", "scissors"];

//function computerPlay with random option
function computerChoice() {
  const randomPick = ["rock", "paper", "scissors"];
  const randomNumber = Math.floor(Math.random() * 3);
  return randomPick[randomNumber];
}
console.log(computerChoice());

//function that generates an alert with prompt asking for "rock", "paper", "scissors"

function promptGame() {
  u = window.prompt("Let's play a game!", "Choose Rock, Paper or Scissors.");
  u = u.toLowerCase(u);
  if (u === "rock" || u === "scissors" || u === "paper") {
    grabTheWinner(u);
  } else {
    promptGame();
  }
}

//User or computer or tie, function to grabWinner
function grabTheWinner(u, computerChoice()) {
  if (u === "rock" && computerChoice() === "paper" ); {
    alert(computerChoice() + " I won this time, you're terrible at this game")}
    (u === "rock" && computerChoice() === "scissors" ); {
      alert(computerChoice() + "You won :/")}
      (u === "scissors" && computerChoice() === "paper" ); {
        alert(computerChoice() + " You won :/")}
        (u === "scissors" && computerChoice() === "rock" ); {
          alert(computerChoice() + " I won this time, you're terrible at this game")}
          (u === "paper" && computerChoice() === "rock" ); {
            alert(computerChoice() + " You won :/")}
            (u === "paper" && computerChoice() === "scissors" ); {
              alert(computerChoice() + " I won this time, you're terrible at this game")}
  
  else (u === computerChoice())
  {
    alert("I've picked the same, tie!")
  }
}






  
  /****if (R.includes(u) && computerChoice() === P) {
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

