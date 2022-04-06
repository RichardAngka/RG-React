/*
Uncomment variable dibawah ini untuk mulai mengerjakan. dilarang mengganti nama variable yang dibuat.
*/

const generateRandomNumber = () => Math.floor(Math.random() * 10 + 1);
let newGameBtn = document.getElementsByClassName("new-game")[0];
let checkBtn = document.querySelector(".btn-primary");
let randomNumber = generateRandomNumber();
let message = document.getElementsByClassName("message")[0];
let displayScore = document.getElementsByClassName("score")[0];
let input = document.getElementsByClassName("input")[0];
let score = 10;

newGameBtn.addEventListener("click", () => {
  resetGame();
});
checkBtn.addEventListener("click", () => {
  checkNumber();
  displayScore.innerHTML = score;
});
// TODO: answer here

function displayMessage(msg) {
  // TODO: answer here
  message.innerText = msg;
}

function resetGame() {
  // TODO: answer here
  score = 10;
  displayScore.innerHTML = score;
  displayMessage("Lets start guessing...");
  input.value = "";
  randomNumber = generateRandomNumber();
  //dilarang menghapus code dibawah ini!
  document.getElementById("hidden-number").innerHTML = randomNumber;
}

function checkNumber() {
  // TODO: answer here
  // kurang 1 conditional di mana dia cek kalau score habis
  if (score > 1) {
    if (Number(input.value) === randomNumber) {
      displayMessage("Yeay! you guessed it!");
    }
    if (Number(input.value) !== randomNumber) {
      if (Number(input.value) < 1 || Number(input.value) > 10) {
        displayMessage("Guess any number between 1 and 10");
        // TODO: Bener gak hayo
        score--;
      } else if (Number(input.value) > randomNumber) {
        displayMessage("Oww... that's too big!");
        score--;
      } else if (Number(input.value) < randomNumber) {
        displayMessage("Too small, buddy!");
        score--;
      }
    }
  } else {
    score--;
    displayMessage("Oops, you lost the game");
  }
}

//dilarang menghapus code dibawah ini!
document.getElementById("hidden-number").innerHTML = randomNumber;
