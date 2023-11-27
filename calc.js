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
    return a / b;
};

let firstNumber = 0;
let secondNumber = 0;
let operator = '';
let displayValue = '';



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

btns.addEventListener('click', (e) => {
    console.log('Button Clicked:', e.target.textContent);
    displayValue += e.target.textContent;
    input.textContent = displayValue;
});

const operatorBtns = document.querySelector('#operators');

operatorBtns.addEventListener('click', (e) => {
    firstNumber = parseInt(displayValue);
    operator = e.target.id;
    displayValue = '';
    input.textContent = displayValue;
})