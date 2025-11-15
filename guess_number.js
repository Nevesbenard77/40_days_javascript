//GUESSING NUMBER GAME PLAY//
let userAttempts = 0;
function playGuessGame() {
  const randomNum = Math.random();
  const min = 1;
  const max = 10;

  const secretNumber = Math.floor(randomNum * max) + min;

  const userPrompt = Number(prompt("Guess a number between 1-10"));

  function userGuesNumber() {
    userAttempts++;
    if (userPrompt === secretNumber) {
      console.log("yes you guess, Win!");
      console.log("userAttempts :", userAttempts);
      askToPlay();
    } else if (userPrompt !== secretNumber && userPrompt !== 0) {
      if (userPrompt > secretNumber) {
        console.log("too high!");
      } else if (userPrompt < secretNumber) {
        console.log("too low!");
      }
      playGuessGame();
    } else {
      console.log("sorry invalid input please try!");
    }
  }

  function askToPlay() {
    const playAgain = prompt("Do you want to play again ?");
    const userPlayAgain = playAgain ? playAgain.toLowerCase() : "no";

    if (userPlayAgain === "yes") {
      playGuessGame();
    } else {
      console.log("well done see you next time.");
    }
  }
  userGuesNumber();
}

playGuessGame();
