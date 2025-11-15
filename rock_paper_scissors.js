//ROCK, PAPER AND SCISSORS GAME//
function rockPaperScissor() {
  const randomNums = Math.floor(Math.random() * 3) + 1;
  const userPromt1 = prompt(
    "Enter Rock,Paper and Scissors to play"
  ).toLowerCase();

  const userPromt = userPromt1 === null ? "" : userPromt1;

  let computerMove;
  if (randomNums === 1) {
    computerMove = "rock";
  } else if (randomNums === 2) {
    computerMove = "paper";
  } else if (randomNums === 3) {
    computerMove = "scissors";
  }

  if (
    (userPromt === "rock" && computerMove === "scissors") ||
    (userPromt === "paper" && computerMove === "rock") ||
    (userPromt === "scissors" && computerMove === "paper")
  ) {
    console.log("user won!");
  } else if (
    (computerMove === "rock" && userPromt === "scissors") ||
    (computerMove === "paper" && userPromt === "rock") ||
    (computerMove === "scissors" && userPromt === "paper")
  ) {
    console.log("computerMove won");
  } else if (userPromt === computerMove) {
    console.log("it a draw !");
  } else {
    console.log("invalid selection please try later.");
  }

  const userPlayGame = prompt("Do you want to continue? yes or No");

  const userPlayeragain = userPlayGame ? userPlayGame.toLowerCase() : "no";
  if (userPlayeragain === "yes") {
    rockPaperScissor();
  } else {
    console.log("see you nxt time.");
  }
}
rockPaperScissor();
