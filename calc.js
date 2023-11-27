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

let firstNumber;
let secondNumber;
let operator;

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