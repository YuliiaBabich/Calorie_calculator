const calorieCounter = document.getElementById('calorie-counter');
const budgetNumberInput = document.getElementById('budget');
const entryDropdown = document.getElementById('entry-dropdown');
const addEntryButton = document.getElementById('add-entry');
const clearButton = document.getElementById('clear');
const output = document.getElementById('output');
let isError = false; // is и has  мы используем для boolean
/*const cleanInputString = function (str) { //imput элементы все равно считывают как строку, даже если и задали namber нам нужна функция , чтобы преобразовывать рядок в число
  const strArray = str.split(``);
  const cleanStrArray = [];
  for (let i = 0; i < strArray.length; i++) {
    if (!['+', '-', ' '].includes(strArray[i])) {
      cleanStrArray.push(strArray[i])
    }
  };
}*/
function cleanInputString(str) {
  const regex = /[+-\s]/g;
 return str.replace (regex,"");

function isInvalidInput(str) {
  const regex = /\d+e\d+/i;
   return str.match(regex);
}
}
function addEntry() {
   const targetInputContainer = document.querySelector(`#${entryDropdown.value} .input-container`);
}