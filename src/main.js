
import { tasksList } from './tasksList.js';

      const introSection = document.querySelector('.introduction');
      const tasksSection = document.querySelector('.tasks');
      const scoreSection = document.querySelector('.score');
      const startBtn = document.getElementById('startButton');
      const submitBtn = document.getElementById('submitButton');

      tasksSection.innerHTML = tasksList.map(item => `

      <h2 class="tasks__number">Task ${tasksList.indexOf(item)}</h3>
      <p class="tasks__text"> ${item.text}</p>
      <div class="tasks__answers">

        <fieldset>
          <legend>Answer:</legend>
          <div>
          <input type="radio" name='task-${tasksList.indexOf(item)}' value="0" id="task-${tasksList.indexOf(item)}-a"/>
          <label for="task-${tasksList.indexOf(item)}-a">"${item.A}"</label>
           <input type="radio" name='task-${tasksList.indexOf(item)}' value="1" id="task-${tasksList.indexOf(item)}-b"/>
           <label for="task-${tasksList.indexOf(item)}-b">"${item.B}"</label>
          <input type="radio" name='task-${tasksList.indexOf(item)}' value="0" id="task-${tasksList.indexOf(item)}-c"/>
          <label for="task-${tasksList.indexOf(item)}-c">"${item.C}"</label>
           <input type="radio" name='task-${tasksList.indexOf(item)}' value="0" id="task-${tasksList.indexOf(item)}-d"/>
           <label for="task-${tasksList.indexOf(item)}-d">"${item.D}"</label>
          </div>
          </fieldset>

      `).join('');

    
      



      const startQuiz = function() {
          tasksSection.classList.toggle('hide');
          introSection.classList.toggle('hide');
          submitBtn.classList.toggle('hide');
        }


        let totalScore = 0;

      
      function addPoints() {
      const element = document.getElementsByTagName('input');
      for(i = 0; i < element.length; i++) {
        if (element[i].type === "radio" && element[i].checked) {
          if (element[i].value == 1) {
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