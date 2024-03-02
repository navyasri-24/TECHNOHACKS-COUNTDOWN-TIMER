let timer;
let timeLeft = 0;
let timerRunning = false;

function startTimer() {
  if (!timerRunning) {
    const inputMinutes = parseInt(prompt("Enter the number of minutes:"));
    if (!isNaN(inputMinutes)) {
      timeLeft = inputMinutes * 60;
      timerRunning = true;
      timer = setInterval(updateTimer, 1000);
    } else {
      alert("Please enter a valid number.");
    }
  }
}

function updateTimer() {
  const hours = Math.floor(timeLeft / 3600);
  const minutes = Math.floor((timeLeft % 3600) / 60);
  const seconds = timeLeft % 60;

  const display = `${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
  document.getElementById('timer').textContent = display;

  if (timeLeft === 0) {
    clearInterval(timer);
    timerRunning = false;
    alert("Time's up!");
  } else {
    timeLeft--;
  }
}

function stopTimer() {
  clearInterval(timer);
  timerRunning = false;
}

function resetTimer() {
  clearInterval(timer);
  timerRunning = false;
  document.getElementById('timer').textContent = '00:00:00';
  timeLeft = 0;
}
