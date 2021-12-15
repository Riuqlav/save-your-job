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
//working until here don't touch it.







//User or computer or tie function grabWinner {
  function grabWinner() {
    if      (u === R && computerChoice() === P) {
    alert (computerChoice() + " I won this time, you suck at this game")}
    else if (u === R && computerChoice() === S) {
    alert (computerChoice() + " Ok you won, let's play again")}
    else if (u === R && computerChoice() === R) {
    alert (computerChoice() + " Tie, let's play again")} 
    else if (u === P && computerChoice() === P) {
    alert (computerChoice() + " Tie, let's play again")} 
    else if (u === P && computerChoice() === S) {
    alert (computerChoice() + " I won this time, you suck at this game")} 
    else if (u === P && computerChoice() === R) {
    alert (computerChoice() + " Ok you won, let's play again")} 
    else if (u === S && computerChoice() === P) {
    alert (computerChoice() + " Ok you won, let's play again")} 
    else if (u === S && computerChoice() === S) {
    alert (computerChoice() + " Tie, let's play again")} 
    else if (u === S && computerChoice() === R)
    alert (computerChoice() + " I won this time, you suck at this game")
    else if (u != S, R, P){
    alert ("Come on, you know how to play the game")
    grabWinner()}
  };


  
//function that generates an alert with prompt asking for R,S,P
function promptGame() {
  let u = prompt(
    "Lets play a game, what do you pick? Rock, Paper or Scissors?"
  )
  if ((u = R || S || P)) {
    grabWinner();
  } else if (alert("Come on man, you know the game, let's do it"));
  alert("are you sure?")
};
function promptGame();