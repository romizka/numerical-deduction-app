import tasksList from "./js/tasksList.js";
import { db, auth, addDoc, collection } from "./js/firebase.js";
import { collection, addDoc, getDocs, query, where } from "firebase/firestore";
import { timer } from "./js/timer.js";
import { sliderFunction } from "./js/slider.js";
import { makeAnswersList } from "./js/answersList.js";

const introSection = document.querySelector(".introduction");
const tasksSection = document.querySelector(".tasks");
const scoreSection = document.querySelector(".score");
const startBtn = document.getElementById("startButton");
const submitBtn = document.getElementById("submitButton");
const tasksElements = document.querySelector(".tasks_elements");
const scoreElement = document.querySelector(".score__element");
const timerElement = document.getElementById("timer");
const logInfo = document.querySelector(".fire-log");
const previousResultButton = document.getElementById("previousResultButton");
const previousResultSection = document.getElementById(
  "previous-result-section"
);

tasksElements.insertAdjacentHTML(
  "beforeEnd",
  tasksList
    .map(
      (item, index) => `
      <li class="splide__slide">
<h3 class="mb-2 mt-8 font-semibold text-blue-600 font-bold text-center uppercase">Task ${
        index + 1
      }</h3>
<h4 class="mb-2 font-semibold text-gray-600 text-center tracking-widest">${
        item.question
      }</h4>

<div class="options">

<ul class="items-center w-full text-sm font-medium text-gray-400 bg-white border border-gray-200 rounded-lg sm:flex">
${makeAnswersList(item, index)}
</ul>

</div>
</li>
`
    )
    .join("")
);

const listItems = document.querySelectorAll(".splide__slide");
const lastListItem = listItems[listItems.length - 1];
lastListItem.addEventListener("change", () => {
  submitBtn.classList.toggle("hide");
});

const startQuiz = function () {
  tasksSection.classList.toggle("hide");
  introSection.classList.toggle("hide");
  timerElement.classList.toggle("hide");
  logInfo.classList.toggle("hide");
  previousResultSection.classList.toggle("hide");
  timerInterval = setInterval(timer, 1000);
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
  submitBtn.classList.add("hide");
  timerElement.classList.toggle("hide");
};

const saveResult = async () => {
  const user = auth.currentUser;
  if (user) {
    try {
      await addDoc(collection(db, "results"), {
        userId: user.email,
        result: totalScore,
        timestamp: new Date(),
      });
      console.log("Wynik został zapisany do Firestore.");
    } catch (error) {
      console.error("Wystąpił błąd podczas zapisywania wyniku:", error);
    }
  }
};

const onSubmit = () => {
  addPoints();
  showResult();
  saveResult();
};

let resultsVisible = false;
const showPreviousResult = async () => {
  const user = auth.currentUser;
  if (user) {
    try {
      const querySnapshot = await getDocs(
        query(collection(db, "results"), where("userId", "==", user.email))
      );
      const results = [];
      querySnapshot.forEach((doc) => {
        results.push(doc.data());
      });
      if (results.length > 0) {
        displayResults(results);
      } else {
        displayNoResultsMessage();
      }
    } catch (error) {
      console.error("Wystąpił błąd podczas pobierania wyników:", error);
    }
  }
};

const displayResults = (results) => {
  const previousResultSection = document.getElementById(
    "previous-result-section"
  );
  previousResultSection.innerHTML = "";

  results.forEach((result) => {
    const resultElement = document.createElement("div");
    resultElement.innerHTML = `Result: ${
      result.result
    } / 21<br>Date: ${result.timestamp.toDate()}`;
    previousResultSection.appendChild(resultElement);
  });
};

const displayNoResultsMessage = () => {
  const previousResultSection = document.getElementById(
    "previous-result-section"
  );
  previousResultSection.innerHTML = "No results available";
};

const hidePreviousResult = () => {
  previousResultSection.innerHTML = "";
};

const toggleResultsVisibility = () => {
  if (resultsVisible) {
    hidePreviousResult();
    previousResultButton.textContent = "View previous result";
    resultsVisible = false;
  } else {
    showPreviousResult();
    previousResultButton.textContent = "Hide previous result";
    resultsVisible = true;
  }
};

previousResultButton.addEventListener("click", toggleResultsVisibility);

startBtn.addEventListener("click", startQuiz);

submitBtn.addEventListener("click", onSubmit);

sliderFunction();
