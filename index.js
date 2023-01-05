let playerNumber;
let deallerNumber;
let hitMore;
let playGame = confirm("Hello! \n  Do you want to play some Black Jack today?");

while (playGame) {
  runTheGame();

  // Ask if user wants to play again
  playGame = confirm("Do you want to play again?");
  if (!playGame) alert("Bye Bye, Looser!");
}

//RESET INITIAL SCORE IF ANY, AND RUN THE GAME
function runTheGame() {
  playerNumber = deal(21, 4);
  deallerNumber = deal(11, 2);
  hitMore = confirm(`You have ${playerNumber}, do you want to hit more?`);

  dealPlayer();
  dealDealler();
  checkResults();
}

// Return random numer between min and max arguments
function deal(max, min) {
  return Math.floor(Math.random() * (max - min)) + min;
}

// Deals player additional numer if player choose Hit more
function dealPlayer() {
  while (hitMore) {
    playerNumber += deal(11, 2);

    if (playerNumber >= 21) {
      hitMore = false;
    } else {
      hitMore = confirm(`You have ${playerNumber}, do you want to hit more?`)
    }
  }
}

// Deals additional number for the dealler if dealler has less then 17
function dealDealler() {
  while (deallerNumber < 17) {
    deallerNumber += deal(11, 2);
  }
}

// CHECK THE FINAL RESULTS
function checkResults() {
  // If player has too many
  if (playerNumber > 21) {
    alert(`You have ${playerNumber}, That's too many..  \n \n DEALLER WINS!`);
    return
  }

  // Iplayer has 21 or player number is bigger than dealler's number
  if ((playerNumber === 21 && deallerNumber !== 21)
    || (playerNumber < 21 && playerNumber > deallerNumber)) {
    alert(`Your score is ${playerNumber} and Dealler has ${deallerNumber}.\n \n ==== YOU WIN ====!`);
    return
  }
  // If draw
  if (playerNumber === deallerNumber) {
    alert(`Your score is ${playerNumber}, and Dealler has ${deallerNumber}. \n \n That's the PUSH`);
    return
  }

  // Idealler has too many
  if (deallerNumber > 21) {
    alert(`Dealler has ${deallerNumber}, that's too many. \n \n ==== YOU WIN ====!`);
    return
  }

  // Other not winning scenarios
  alert(`Your score is ${playerNumber} and Dealler has ${deallerNumber}. \n \n DEALLER WINS!`);
}

