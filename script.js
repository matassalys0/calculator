'use strict'

const inputDiv = document.querySelector('.calc-input');
const answerDiv = document.querySelector('.calc-answer');

let operation = {
    num1: null,
    num2: null,
    operator: null
}

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
    if(operation.operator === null && inputDiv.textContent !== '') {
        operation.num1 = Number(inputDiv.textContent);
        operation.operator = e.srcElement.textContent;
        inputDiv.textContent = inputDiv.textContent + e.srcElement.textContent;
    }
}

function calcExpession(e) {
    if(operation.operator !== null && inputDiv.textContent !== '') {
        const inputArray = inputDiv.textContent.split(operation.operator);
        
        if(inputArray[1] !== '') {
            operation.num2 = Number(inputArray[1]);

            const ans = operate(operation);
           
            answerDiv.textContent = ans;
            operation = {
                num1: ans,
                num2: null,
                operator: null,
            }
            inputDiv.textContent = ans;
        }
    }
}

function clear(e) {
    inputDiv.textContent = '';
    answerDiv.textContent = '';

    operation = {
        num1: null,
        num2: null,
        operator: null
    }
}

const numBtns = document.querySelectorAll('.num-btn');
numBtns.forEach(button => {
    button.addEventListener('click', numClick);
});

const operatorBtns = document.querySelectorAll('.operator-btn');
operatorBtns.forEach(button => {
    button.addEventListener('click', operatorClick);
});

const equalButton = document.querySelector('.equal-btn');
equalButton.addEventListener('click', calcExpession);

const clearButton = document.querySelector('.clear-btn');
clearButton.addEventListener('click', clear);

console.log(operate(operation));