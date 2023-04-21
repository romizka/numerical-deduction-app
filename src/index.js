import tasksList from "./tasksList.js";

const introSection = document.querySelector(".introduction");
const tasksSection = document.querySelector(".tasks");
const scoreSection = document.querySelector(".score");
const startBtn = document.getElementById("startButton");
const submitBtn = document.getElementById("submitButton");
const tasksElements = document.querySelector(".tasks_elements");
const scoreElement = document.querySelector(".score__element");
const timerElement = document.getElementById("timer");

// TIMER

let timeRemaining = 600; // 10 minutes in seconds

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

const timerInterval = setInterval(timer, 1000);

function makeAnswersList(item, index) {
  let answersList = "";
  for (let i = 0; i < 4; i++) {
    answersList += `
    <li class="w-full border-b border-gray-200 sm:border-b-0 sm:border-r">
      <div class="flex items-center pl-3 bg-blue-100">
        <input id="horizontal-list-radio-license" type="radio" value="${item.answers[i].value}" name='task-${index}' class="w-4 h-4 text-blue-600 bg-white border-gray-300 focus:ring-blue-500 focus:ring-2" required>
        <label for="horizontal-list-radio-license" class="w-full py-3 ml-2 text-sm font-medium text-gray-600 text-left">A: ${item.answers[i].answer}</label>
      </div>
    </li>
  `;
  }
  return answersList;
}

tasksElements.insertAdjacentHTML(
  "beforeEnd",
  tasksList
    .map(
      (item, index) => `

<h3 class="mb-2 mt-8 font-semibold text-blue-600 font-bold text-center uppercase">Task ${
        index + 1
      }</h3>
<h4 class="mb-2 font-semibold text-gray-600 text-center tracking-widest">${
        item.question
      }</h4>
<form>
<ul class="items-center w-full text-sm font-medium text-gray-400 bg-white border border-gray-200 rounded-lg sm:flex">

${makeAnswersList(item, index)}
 
</ul>
</form>

`
    )
    .join("")
);

const startQuiz = function () {
  tasksSection.classList.toggle("hide");
  introSection.classList.toggle("hide");
  submitBtn.classList.toggle("hide");
  timerElement.classList.toggle("hide");
};

let totalScore = 0;

function addPoints() {
  const element = document.getElementsByTagName("input");

  for (let i = 0; i < element.length; i++) {
    console.log(element[i].value);
    if (
      element[i].type === "radio" &&
      element[i].checked &&
      element[i].value == 1
    ) {
      totalScore += 1;
    }
  }
}

const showResult = function () {
  scoreElement.innerHTML = `Your total score: <br> ${totalScore} / 21`;

  tasksSection.classList.toggle("hide");
  scoreSection.classList.toggle("hide");
  submitBtn.classList.toggle("hide");
};

const onSubmit = () => {
  addPoints();
  showResult();
};

startBtn.addEventListener("click", startQuiz);

submitBtn.addEventListener("click", onSubmit);
