// TIMER

let timeRemaining = 600; // 10 minutes in seconds
let timerInterval;
const timerElement = document.getElementById("timer");

function formatTime(seconds) {
  const minutes = Math.floor(seconds / 60);
  const remainingSeconds = seconds % 60;
  return `${minutes.toString().padStart(2, "0")}:${remainingSeconds
    .toString()
    .padStart(2, "0")}`;
}

function timer() {
  timeRemaining--;
  timerElement.textContent = formatTime(timeRemaining);

  if (timeRemaining <= 0) {
    clearInterval(timerInterval);
    timerElement.textContent = "Time's up!";
    onSubmit();
  }
}

export { formatTime, timer };
