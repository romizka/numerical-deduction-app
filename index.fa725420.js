var e=[{question:"0 5 10 15 20 ?",answers:[{answer:"20",value:0},{answer:"25",value:1},{answer:"30",value:0},{answer:"21",value:0}]},{question:".25 .5 1 2 4 ?",answers:[{answer:"12",value:0},{answer:"16",value:0},{answer:"8",value:1},{answer:"10",value:0}]},{question:"98 50 26 14 8 ?",answers:[{answer:"4",value:0},{answer:"2",value:0},{answer:"6",value:0},{answer:"5",value:1}]},{question:"1 2 3 5 8 ?",answers:[{answer:"5",value:0},{answer:"11",value:0},{answer:"8",value:0},{answer:"13",value:1}]},{question:"4 8 12 16 20 ?",answers:[{answer:"25",value:0},{answer:"22",value:0},{answer:"24",value:1},{answer:"28",value:0}]},{question:"160 120 100 90 85 ?",answers:[{answer:"78.5",value:0},{answer:"80",value:0},{answer:"82.5",value:0},{answer:"84",value:1}]},{question:".55 .65 .75 .85 .95 ?",answers:[{answer:"1.05",value:0},{answer:"1.5",value:0},{answer:"1.15",value:0},{answer:"9.5",value:1}]},{question:"1 3 8 19 42 ?",answers:[{answer:"84",value:0},{answer:"89",value:0},{answer:"71",value:0},{answer:"85",value:1}]},{question:"2 7 12 17 22 ?",answers:[{answer:"26",value:0},{answer:"28",value:0},{answer:"23",value:0},{answer:"27",value:1}]},{question:"1 7 13 19 25 ?",answers:[{answer:"18",value:0},{answer:"15",value:0},{answer:"31",value:0},{answer:"33",value:1}]},{question:"3 8 22 63 185 ?",answers:[{answer:"550",value:1},{answer:"270",value:0},{answer:"365",value:0},{answer:"248",value:0}]},{question:"7 7 9 13 19 ?",answers:[{answer:"25",value:0},{answer:"29",value:0},{answer:"31",value:0},{answer:"27",value:1}]},{question:"1 1 2 4 7 ?",answers:[{answer:"6",value:0},{answer:"11",value:1},{answer:"8",value:0},{answer:"12",value:0}]},{question:"0 –1 0 3 8 ?",answers:[{answer:"15",value:1},{answer:"11",value:0},{answer:"12",value:0},{answer:"24",value:0}]},{question:"0 3 3 6 9 ?",answers:[{answer:"12",value:0},{answer:"15",value:1},{answer:"18",value:0},{answer:"9",value:0}]},{question:"6 9 3 8 3 ?",answers:[{answer:"7",value:0},{answer:"6",value:0},{answer:"8",value:0},{answer:"10",value:1}]},{question:"7 12 9 19 13 ?",answers:[{answer:"22",value:0},{answer:"30",value:0},{answer:"32",value:0},{answer:"28",value:1}]},{question:"75 50 90 65 105 ?",answers:[{answer:"185",value:0},{answer:"130",value:0},{answer:"80",value:1},{answer:"170",value:0}]},{question:"3 9 4 16 11 ?",answers:[{answer:"27",value:0},{answer:"44",value:0},{answer:"25",value:0},{answer:"35",value:1}]},{question:"17 11 28 39 67 ?",answers:[{answer:"96",value:0},{answer:"106",value:1},{answer:"95",value:0},{answer:"58",value:0}]},{question:"5 3 4 9 23 ?",answers:[{answer:"41",value:0},{answer:"60",value:1},{answer:"34",value:0},{answer:"32",value:0}]}];const a=document.querySelector(".introduction"),s=document.querySelector(".tasks"),n=document.querySelector(".score"),r=document.getElementById("startButton"),l=document.getElementById("submitButton"),t=document.querySelector(".tasks_elements"),u=document.querySelector(".score__element"),w=document.getElementById("timer");let o=600;const v=setInterval((function(){o--,w.textContent=function(e){const a=e%60;return`${Math.floor(e/60).toString().padStart(2,"0")}:${a.toString().padStart(2,"0")}`}(o),o<=0&&(clearInterval(v),w.textContent="Time's up!",c())}),1e3);t.insertAdjacentHTML("beforeEnd",e.map(((e,a)=>`\n\n<h3 class="mb-2 mt-8 font-semibold text-blue-600 font-bold text-center uppercase">Task ${a+1}</h3>\n<h4 class="mb-2 font-semibold text-gray-600 text-center tracking-widest">${e.question}</h4>\n<form>\n<ul class="items-center w-full text-sm font-medium text-gray-400 bg-white border border-gray-200 rounded-lg sm:flex">\n\n${function(e,a){let s="";for(let n=0;n<4;n++)s+=`\n    <li class="w-full border-b border-gray-200 sm:border-b-0 sm:border-r">\n      <div class="flex items-center pl-3 bg-blue-100">\n        <input id="horizontal-list-radio-license" type="radio" value="${e.answers[n].value}" name='task-${a}' class="w-4 h-4 text-blue-600 bg-white border-gray-300 focus:ring-blue-500 focus:ring-2" required>\n        <label for="horizontal-list-radio-license" class="w-full py-3 ml-2 text-sm font-medium text-gray-600 text-left">A: ${e.answers[n].answer}</label>\n      </div>\n    </li>\n  `;return s}(e,a)}\n \n</ul>\n</form>\n\n`)).join(""));let i=0;const c=()=>{!function(){const e=document.getElementsByTagName("input");for(let a=0;a<e.length;a++)console.log(e[a].value),"radio"===e[a].type&&e[a].checked&&1==e[a].value&&(i+=1)}(),u.innerHTML=`Your total score: <br> ${i} / 21`,s.classList.toggle("hide"),n.classList.toggle("hide"),l.classList.toggle("hide")};r.addEventListener("click",(function(){s.classList.toggle("hide"),a.classList.toggle("hide"),l.classList.toggle("hide"),w.classList.toggle("hide")})),l.addEventListener("click",c);
//# sourceMappingURL=index.fa725420.js.map
