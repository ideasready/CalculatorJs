// get number buttons
const btn_1 = document.getElementById('1');
const btn_2 = document.getElementById('2');
const btn_3 = document.getElementById('3');
const btn_4 = document.getElementById('4');
const btn_5 = document.getElementById('5');
const btn_6 = document.getElementById('6');
const btn_7 = document.getElementById('7');
const btn_8 = document.getElementById('8');
const btn_9 = document.getElementById('9');
const btn_0 = document.getElementById('0');

// get operator buttons
const btn_add = document.getElementById('add');
const btn_sub = document.getElementById('sub');
const btn_mul = document.getElementById('mul');
const btn_div = document.getElementById('div');
const btn_dot = document.getElementById('dot');
const btn_equal = document.getElementById('equal');

// get clear button
const btn_clear = document.getElementById('clear');
const btn_clearAll = document.getElementById('clearAll');
const btn_backspace = document.getElementById('del');

// get display
const display = document.getElementById('display');


// operators 
let currentOperator;

// boolean to control
let isOperatorClicked = false;
let isFirstOperation = true;

// add event listener
btn_1.addEventListener('click', () => {
  if (isFirstOperation) {
    display.value = '';
    isFirstOperation = false;
  }
  display.value += '1';
});

btn_2.addEventListener('click', () => {
  if (isFirstOperation) {
    display.value = '';
    isFirstOperation = false;
  }
  display.value += '2';
});

btn_3.addEventListener('click', () => {
  if (isFirstOperation) {
    display.value = '';
    isFirstOperation = false;
  }
  display.value += '3';
});

btn_4.addEventListener('click', () => {
  if (isFirstOperation) {
    display.value = '';
    isFirstOperation = false;
  }
  display.value += '4';
});

btn_5.addEventListener('click', () => {
  if (isFirstOperation) {
    display.value = '';
    isFirstOperation = false;
  }
  display.value += '5';
});

btn_6.addEventListener('click', () => {
  if (isFirstOperation) {
    display.value = '';
    isFirstOperation = false;
  }
  display.value += '6';
});

btn_7.addEventListener('click', () => {
  if (isFirstOperation) {
    display.value = '';
    isFirstOperation = false;
  }
  display.value += '7';
});

btn_8.addEventListener('click', () => {
  if (isFirstOperation) {
    display.value = '';
    isFirstOperation = false;
  }
  display.value += '8';
});

btn_9.addEventListener('click', () => {
  if (isFirstOperation) {
    display.value = '';
    isFirstOperation = false;
  }
  display.value += '9';
});

btn_0.addEventListener('click', () => {
  if (isFirstOperation) {
    display.value = '';
    isFirstOperation = false;
  }
  display.value += '0';
});

// operators buttons event listener
btn_add.addEventListener('click', () => {
  if (isFirstOperation) {
    isFirstOperation = false;
  }
  currentOperator = '+';
  display.value += ' + ';
});

btn_sub.addEventListener('click', () => {
  if (isFirstOperation) {
    isFirstOperation = false;
  }
  currentOperator = '-';
  display.value += ' - ';
});

btn_mul.addEventListener('click', () => {
  if (isFirstOperation) {
    isFirstOperation = false;
  }
  currentOperator = '*';
  display.value += ' x ';
});

btn_div.addEventListener('click', () => {
  if (isFirstOperation) {
    isFirstOperation = false;
  }
  currentOperator = '/';
  display.value += ' / ';
});

// equal button event listener
btn_equal.addEventListener('click', () => {
  let firstNumber = parseFloat(display.value.split(' ')[0]);
  let secondNumber = parseFloat(display.value.split(' ')[2]);
  let result = calculate(firstNumber, secondNumber, currentOperator);
  // display result with 2 decimal places
  display.value = result.toFixed(2);
});

// function to calculate
function calculate(num1, num2, operator) {
  isFirstOperation = true;
  switch (operator) {
    case '+':
      return num1 + num2;
    case '-':
      return num1 - num2;
    case '*':
      return num1 * num2;
    case '/':
      return num1 / num2;
    default:
      return 'Error';
  }
}

// clear button event listener
btn_clear.addEventListener('click', () => {
  display.value = '';
});

// clear all button event listener
btn_clearAll.addEventListener('click', () => {
  display.value = '';
  firstNumber = 0;
  secondNumber = 0;
});

// backspace button event listener
btn_backspace.addEventListener('click', () => {
  display.value = display.value.slice(0, -1);
});

// dot button event listener
btn_dot.addEventListener('click', () => {
  display.value += '.';
});