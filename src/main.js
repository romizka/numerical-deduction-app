
import { tasksList } from './tasksList.js';

      const introSection = document.querySelector('.introduction');
      const tasksSection = document.querySelector('.tasks');
      const scoreSection = document.querySelector('.score');
      const startBtn = document.getElementById('startButton');
      const submitBtn = document.getElementById('submitButton');

//       tasksSection.insertAdjacentHTML('beforeEnd', tasksList.map(item => `

//       <h3 class="mb-2 mt-8 font-semibold text-blue-600 font-bold text-center">Task ${tasksList.indexOf(item) + 1}</h3>
//       <h4 class="mb-2 font-semibold text-gray-600 text-center">${item.text}</h4>
// <ul class="items-center w-full text-sm font-medium text-gray-400 bg-white border border-gray-200 rounded-lg sm:flex">
//     <li class="w-full border-b border-gray-200 sm:border-b-0 sm:border-r">
//         <div class="flex items-center pl-3">
//             <input id="horizontal-list-radio-license" type="radio" value="" name='task-${tasksList.indexOf(item)}' class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 focus:ring-2">
//             <label for="horizontal-list-radio-license" class="w-full py-3 ml-2 text-sm font-medium text-gray-600 ">A: ${item.a}</label>
//         </div>
//     </li>
//     <li class="w-full border-b border-gray-200 sm:border-b-0 sm:border-r">
//         <div class="flex items-center pl-3">
//             <input id="horizontal-list-radio-id" type="radio" value="" name='task-${tasksList.indexOf(item)}' class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 focus:ring-2">
//             <label for="horizontal-list-radio-id" class="w-full py-3 ml-2 text-sm font-medium text-gray-600">B: ${item.b}</label>
//         </div>
//     </li>
//     <li class="w-full border-b border-gray-200 sm:border-b-0 sm:border-r">
//         <div class="flex items-center pl-3">
//             <input id="horizontal-list-radio-millitary" type="radio" value="" name='task-${tasksList.indexOf(item)}' class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 focus:ring-2">
//             <label for="horizontal-list-radio-millitary" class="w-full py-3 ml-2 text-sm font-medium text-gray-600">C: ${item.c}</label>
//         </div>
//     </li>
//     <li class="w-full">
//         <div class="flex items-center pl-3">
//             <input id="horizontal-list-radio-passport" type="radio" value="" name='task-${tasksList.indexOf(item)}' class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 focus:ring-2">
//             <label for="horizontal-list-radio-passport" class="w-full py-3 ml-2 text-sm font-medium text-gray-600">D: ${item.d}</label>
//         </div>
//     </li>
// </ul>

//       `).join(''));

tasksSection.insertAdjacentHTML('beforeEnd', tasksList.map(item => `

<h3 class="mb-2 mt-8 font-semibold text-blue-600 font-bold text-center">Task ${tasksList.indexOf(item) + 1}</h3>
<h4 class="mb-2 font-semibold text-gray-600 text-center">${item.question}</h4>
<ul class="items-center w-full text-sm font-medium text-gray-400 bg-white border border-gray-200 rounded-lg sm:flex">
<li class="w-full border-b border-gray-200 sm:border-b-0 sm:border-r">
  <div class="flex items-center pl-3">
      <input id="horizontal-list-radio-license" type="radio" value="" name='task-${tasksList.indexOf(item)}' class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 focus:ring-2">
      <label for="horizontal-list-radio-license" class="w-full py-3 ml-2 text-sm font-medium text-gray-600 ">A: ${item.answers[0].answer}</label>
  </div>
</li>
<li class="w-full border-b border-gray-200 sm:border-b-0 sm:border-r">
  <div class="flex items-center pl-3">
      <input id="horizontal-list-radio-id" type="radio" value="" name='task-${tasksList.indexOf(item)}' class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 focus:ring-2">
      <label for="horizontal-list-radio-id" class="w-full py-3 ml-2 text-sm font-medium text-gray-600">B: ${item.answers[1].answer}</label>
  </div>
</li>
<li class="w-full border-b border-gray-200 sm:border-b-0 sm:border-r">
  <div class="flex items-center pl-3">
      <input id="horizontal-list-radio-millitary" type="radio" value="" name='task-${tasksList.indexOf(item)}' class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 focus:ring-2">
      <label for="horizontal-list-radio-millitary" class="w-full py-3 ml-2 text-sm font-medium text-gray-600">C: ${item.answers[2].answer}</label>
  </div>
</li>
<li class="w-full">
  <div class="flex items-center pl-3">
      <input id="horizontal-list-radio-passport" type="radio" value="" name='task-${tasksList.indexOf(item)}' class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 focus:ring-2">
      <label for="horizontal-list-radio-passport" class="w-full py-3 ml-2 text-sm font-medium text-gray-600">D: ${item.answers[3].answer}</label>
  </div>
</li>
</ul>

`).join(''));

    
      

{/* <h2 class="tasks__number">Task ${tasksList.indexOf(item) + 1}</h3>
      <p class="tasks__text"> ${item.text}</p>
      <div class="tasks__answers">

        <fieldset>
          <legend>Answer:</legend>
          <div>
          <input type="radio" name='task-${tasksList.indexOf(item)}' value="0" id="task-${tasksList.indexOf(item)}-a"/>
          <label for="task-${tasksList.indexOf(item)}-a">A: ${item.a}</label>
           <input type="radio" name='task-${tasksList.indexOf(item)}' value="1" id="task-${tasksList.indexOf(item)}-b"/>
           <label for="task-${tasksList.indexOf(item)}-b">B: ${item.b}</label>
          <input type="radio" name='task-${tasksList.indexOf(item)}' value="0" id="task-${tasksList.indexOf(item)}-c"/>
          <label for="task-${tasksList.indexOf(item)}-c">C: ${item.c}</label>
           <input type="radio" name='task-${tasksList.indexOf(item)}' value="0" id="task-${tasksList.indexOf(item)}-d"/>
           <label for="task-${tasksList.indexOf(item)}-d">D: ${item.d}</label>
          </div>
          </fieldset> */}

      const startQuiz = function() {
          tasksSection.classList.toggle('hide');
          introSection.classList.toggle('hide');
          submitBtn.classList.toggle('hide');
        }


        let totalScore = 0;

      
      // function addPoints() {
      // const element = document.getElementsByTagName('input');
      // for(i = 0; i < element.length; i++) {
      //   if (element[i].type === "radio" && element[i].checked) {
      //     if (element[i].value === ) {
      //       totalScore += 1;
      //      }
      //     }
      //   }
      //   }

        // function addPoints() {
          
        //   tasksList.forEach((item, index) => {
        //     const radios = document.getElementsByName(`task-${index}`);
        
        //     radios.forEach((radio) => {
        //       if (radio.checked && item.answers[radio.value].isCorrect) {
        //         score++;
        //       }
        //     });
        //   });
        
        //   console.log(`Twój wynik to ${score}/${tasksList.length}`);
        // }

    
      function addPoints() {
      const element = document.getElementsByTagName('input');
      for(let i = 0; i < element.length; i++) {
        if (element[i].type === "radio" && element[i].checked) {
          if (element[i].answers.answer === true ) {
            totalScore += 1;
           }
          }
        }
        }


      const showResult = function() {
    scoreSection.prepend(`Your total score: ${totalScore} / 21`);

      tasksSection.classList.toggle('hide');
      scoreSection.classList.toggle('hide');
    
        }

        const onSubmit = () => {addPoints(), showResult()};



        startBtn.addEventListener('click', startQuiz);

        submitBtn.addEventListener('click', onSubmit);