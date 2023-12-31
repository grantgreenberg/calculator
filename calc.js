const add = function (a, b) {
  return a + b;
};

const subtract = function (a, b) {
  return a - b;
};

const multiply = function (a, b) {
  return a * b;
};

const divide = function (a, b) {
    if (b == 0) {
        alert('Cannot divide by zero.')
    }
    else {
        return a / b;
    }
};

let firstNumber = null;
let secondNumber = null;
let operator = '';
let displayValue = '';



const operate = function (operator, firstNumber, secondNumber) {
    switch (operator) {
        case 'add':
            return Math.round(add(firstNumber, secondNumber) * 100) / 100;

        case 'subtract':
            return Math.round(subtract(firstNumber, secondNumber) * 100) / 100;
            
        case 'multiply':
            return Math.round(multiply(firstNumber, secondNumber) * 100) / 100;
            
        case 'divide':
            return Math.round(divide(firstNumber, secondNumber) * 100) / 100;
            
    }
};

const btns = document.querySelector('#btns');
const input = document.querySelector('#input');

input.textContent = displayValue;

btns.addEventListener('click', (e) => {
    displayValue += e.target.textContent;
    input.textContent = displayValue;
});

const operatorBtns = document.querySelector('#operators');

operatorBtns.addEventListener('click', (e) => {
    if (operator && firstNumber) {
        secondNumber = parseInt(displayValue);
        displayValue = operate(operator, firstNumber, secondNumber);
        input.textContent = displayValue;
        firstNumber = parseInt(displayValue);
        secondNumber = null;
        displayValue = '';
    }
    else {
        firstNumber = parseInt(displayValue);
        displayValue = '';
        input.textContent = displayValue;
    }
    operator = e.target.id;
});

const equalsBtn = document.querySelector('#equal');

equalsBtn.addEventListener('click', (e) => {
    if (operator && firstNumber) {
        secondNumber = parseInt(displayValue);
        displayValue = operate(operator, firstNumber, secondNumber);
        input.textContent = displayValue;
        operator = '';
    }
});

const clearBtn = document.querySelector('#clear');

clearBtn.addEventListener('click', (e) => {
    firstNumber = null;
    secondNumber = null;
    operator = '';
    displayValue = '';
    input.textContent = displayValue;
});
