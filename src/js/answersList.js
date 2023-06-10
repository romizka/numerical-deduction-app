export function makeAnswersList(item, index) {
  let answersList = "";
  for (let i = 0; i < 4; i++) {
    const uniqueId = `task-${index}-answer-${i}`;
    answersList += `
      <li class="w-full border-b border-gray-200 sm:border-b-0 sm:border-r">
        <div class="flex items-center pl-3 bg-blue-100">
          <input id="${uniqueId}" type="radio" value="${item.answers[i].value}" name='task-${index}' class="w-4 h-4 text-blue-600 bg-white border-gray-300 focus:ring-blue-500 focus:ring-2" required>
          <label for="${uniqueId}" class="w-full py-3 ml-2 text-sm font-medium text-gray-600 text-left">${item.answers[i].answer}</label>
        </div>
      </li>
    `;
  }
  return answersList;
}
