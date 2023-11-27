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
let displayValue = '0';



const operate = function (operator, firstNumber, secondNumber) {
    switch (operator) {
        case 'add':
            return add(firstNumber, secondNumber);
            
        case 'subtract':
            return subtract(firstNumber, secondNumber);
            
        case 'multiply':
            return multiply(firstNumber, secondNumber);
            
        case 'divide':
            return divide(firstNumber, secondNumber);
            
    }
};

const btns = document.querySelector('#btns');
const input = document.querySelector('#input');

input.textContent = displayValue;

btns.addEventListener('click', (e) => {
    displayValue = '';
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
