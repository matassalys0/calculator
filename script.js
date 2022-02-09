'use strict'

const inputDiv = document.querySelector('.calc-input');

const operatorArray = ['+', '-', '/', '*'];
let add = (a, b) => a + b;
let subtract = (a, b) => a - b;
let multiply = (a, b) => a * b;
let divide = (a, b) => a / b;

function operate(operation) {
    switch(operation.operator) {
        case('+'):
        return add(operation.num1, operation.num2);
        break;
        case('-'):
        return subtract(operation.num1, operation.num2);
        break;
        case('*'):
        return multiply(operation.num1, operation.num2);
        break;
        case('/'):
        return divide(operation.num1, operation.num2);
        break;
    }
}

function numClick(e) {
    inputDiv.textContent = inputDiv.textContent + e.srcElement.textContent;
}

function operatorClick(e) {
    inputDiv.textContent = inputDiv.textContent + e.srcElement.textContent;
}

let operation = {
    num1: 5,
    num2: 10,
    operator: '*'
}

const numBtns = document.querySelectorAll('.num-btn');
numBtns.forEach(button => {
    button.addEventListener('click', numClick);
});

const operatorBtns = document.querySelectorAll('.operator-btn');
operatorBtns.forEach(button => {
    button.addEventListener('click', operatorClick);
});

//const equalButton = document.querySelector('.operator-btn');

console.log(operate(operation));