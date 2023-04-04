
   

      const introSection = document.querySelector('.introduction');
      const instrSection = document.querySelector('.instruction');
      const tasksSection = document.querySelector('.tasks');
      const scoreSection = document.querySelector('.score');
      const startBtn = document.querySelector('#startButton');
      const submitBtn = document.querySelector('#submitButton');
      

      const startQuiz = function() {
          tasksSection.classList.toggle('hide');
          introSection.classList.toggle('hide');
          instrSection.classList.toggle('hide');
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