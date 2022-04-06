/*
Uncomment variable dibawah ini untuk mulai mengerjakan. dilarang mengganti nama variable yang dibuat.
*/

let stopwatch = document.getElementById("stopwatch");
let startbtn = document.getElementById("start");
let stopbtn = document.getElementById("stop");
let resetbtn = document.getElementById("reset");

// TODO: answer here
let hours = 0;
let minutes = 0;
let seconds = 0;
let stopTimer = true;
let timeOut;
startbtn.addEventListener("click", () => {
  start();
});
stopbtn.addEventListener("click", () => {
  stop();
});
resetbtn.addEventListener("click", () => {
  reset();
  stop();
});

function start() {
  // TODO: answer here
  if (stopTimer) {
    stopTimer = false;
    runTime();
  }
}

function stop() {
  // TODO: answer here
  if (!stopTimer) {
    stopTimer = true;
    clearTimeout(timeOut);
  }
}

function reset() {
  // TODO: answer here
  hours = 0;
  minutes = 0;
  seconds = 0;
  stopwatch.innerText = "00:00:00";
}

function runTime() {
  // TODO: answer here
  if (!stopTimer) {
    seconds++;
    if (seconds === 60) {
      minutes++;
      seconds = 0;
    }
    if (minutes === 60) {
      hours++;
      minutes = 0;
      // seconds = 0
    }
  }
  stopwatch.innerHTML = `${hours}:${minutes}:${seconds}`;
  timeOut = setTimeout(runTime, 1000);
}

// Javascript

// Browser
// setTimeout
// 1000ms => 1s
