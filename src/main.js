import { tasksList } from "./tasksList.js";

const introSection = document.querySelector(".introduction");
const tasksSection = document.querySelector(".tasks");
const scoreSection = document.querySelector(".score");
const startBtn = document.getElementById("startButton");
const submitBtn = document.getElementById("submitButton");
const tasksElements = document.querySelector(".tasks_elements");
const scoreElement = document.querySelector(".score__element");

tasksElements.insertAdjacentHTML(
  "beforeEnd",
  tasksList
    .map(
      (item) => `

<h3 class="mb-2 mt-8 font-semibold text-blue-600 font-bold text-center uppercase">Task ${
        tasksList.indexOf(item) + 1
      }</h3>
<h4 class="mb-2 font-semibold text-gray-600 text-center tracking-widest">${
        item.question
      }</h4>
<ul class="items-center w-full text-sm font-medium text-gray-400 bg-white border border-gray-200 rounded-lg sm:flex">
<li class="w-full border-b border-gray-200 sm:border-b-0 sm:border-r">
  <div class="flex items-center pl-3 bg-blue-100">
      <input id="horizontal-list-radio-license" type="radio" value="${
        item.answers[0].value
      }" name='task-${tasksList.indexOf(
        item
      )}' class="w-4 h-4 text-blue-600 bg-white border-gray-300 focus:ring-blue-500 focus:ring-2">
      <label for="horizontal-list-radio-license" class="w-full py-3 ml-2 text-sm font-medium text-gray-600 text-left">A: ${
        item.answers[0].answer
      }</label>
  </div>
</li>
<li class="w-full border-b border-gray-200 sm:border-b-0 sm:border-r">
  <div class="flex items-center pl-3 bg-blue-100">
      <input id="horizontal-list-radio-id" type="radio" value="${
        item.answers[1].value
      }" name='task-${tasksList.indexOf(
        item
      )}' class="w-4 h-4 text-blue-600 bg-white border-gray-300 focus:ring-blue-500 focus:ring-2">
      <label for="horizontal-list-radio-id" class="w-full py-3 ml-2 text-sm font-medium text-gray-600 text-left">B: ${
        item.answers[1].answer
      }</label>
  </div>
</li>
<li class="w-full border-b border-gray-200 sm:border-b-0 sm:border-r">
  <div class="flex items-center pl-3 bg-blue-100">
      <input id="horizontal-list-radio-millitary" type="radio" value="${
        item.answers[2].value
      }" name='task-${tasksList.indexOf(
        item
      )}' class="w-4 h-4 text-blue-600 bg-white border-gray-300 focus:ring-blue-500 focus:ring-2">
      <label for="horizontal-list-radio-millitary" class="w-full py-3 ml-2 text-sm font-medium text-gray-600 text-left">C: ${
        item.answers[2].answer
      }</label>
  </div>
</li>
<li class="w-full">
  <div class="flex items-center pl-3 bg-blue-100">
      <input id="horizontal-list-radio-passport" type="radio" value="${
        item.answers[3].value
      }" name='task-${tasksList.indexOf(
        item
      )}' class="w-4 h-4 text-blue-600 bg-white border-gray-300 focus:ring-blue-500 focus:ring-2">
      <label for="horizontal-list-radio-passport" class="w-full py-3 ml-2 text-sm font-medium text-gray-600 text-left">D: ${
        item.answers[3].answer
      }</label>
  </div>
</li>
</ul>

`
    )
    .join("")
);

const startQuiz = function () {
  tasksSection.classList.toggle("hide");
  introSection.classList.toggle("hide");
  submitBtn.classList.toggle("hide");
};

let totalScore = 0;

function addPoints() {
  const element = document.getElementsByTagName("input");

  for (let i = 0; i < element.length; i++) {
    console.log(element[i].value);
    if (element[i].type === "radio" && element[i].checked) {
      if (element[i].value == 1) {
        totalScore += 1;
      }
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
  addPoints(), showResult();
};

startBtn.addEventListener("click", startQuiz);

submitBtn.addEventListener("click", onSubmit);
