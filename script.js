'use strict'

const inputDiv = document.querySelector('.calc-input');
const answerDiv = document.querySelector('.calc-answer');
document.addEventListener('keydown', keyboardInput);

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
        if(operation.num2 === 0) return operation.num1;
        return divide(operation.num1, operation.num2);
        break;
    }
}

function numClick(e) {  
    if(e.srcElement.textContent === '.')
    {
        if(!inputDiv.textContent.includes('.')) inputDiv.textContent = inputDiv.textContent + e.srcElement.textContent;
    }
    else inputDiv.textContent = inputDiv.textContent + e.srcElement.textContent;
}

function operatorClick(e) {
    if(operation.operator === null && inputDiv.textContent !== '') {
        operation.num1 = Number(inputDiv.textContent);
        operation.operator = e.srcElement.textContent;
        inputDiv.textContent = inputDiv.textContent + e.srcElement.textContent;
    }
    else if(operation.operator !== null && operation.num1 !== null) {
        calcExpession(e, e.srcElement.textContent);
    }
}

function operatorClickKeyboard(e) {
    if(operation.operator === null && inputDiv.textContent !== '') {
        operation.num1 = Number(inputDiv.textContent);
        operation.operator = e;
        inputDiv.textContent = inputDiv.textContent + e;
    }
    else if(operation.operator !== null && operation.num1 !== null) {
        calcExpession(e, e);
    }
}

function calcExpession(e, nextOp = null) {
    if(operation.operator !== null && inputDiv.textContent !== '') {
        const inputArray = inputDiv.textContent.split(operation.operator);
        
        if(inputArray[1] !== '') {
            operation.num2 = Number(inputArray[1]);

            //getting the answer (and round it to two decimals)
            const ans = Math.round(operate(operation) * 100) / 100;
           
            //this resets the display and operation
            answerDiv.textContent = ans;
            operation = {
                num1: ans,
                num2: null,
                operator: nextOp,
            }
            //display changes based if nextOp is defined
            nextOp = null ? inputDiv.textContent = ans : inputDiv.textContent = ans + nextOp;
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

function backspace(e) {
    const lastString = inputDiv.textContent.slice(inputDiv.textContent.length - 1);
    if(operatorArray.includes(lastString)) {
        operation.operator = null;
    }
    inputDiv.textContent = inputDiv.textContent.slice(0, inputDiv.textContent.length - 1);
}

function random(e) {
    const randomNumber = Math.floor(Math.random() * 999) + 1;
    inputDiv.textContent = inputDiv.textContent + randomNumber;
}

function keyboardInput(e) {
    if(!isNaN(e.key)) inputDiv.textContent = inputDiv.textContent + e.key;
    else if(operatorArray.includes(e.key)) {
        operatorClickKeyboard(e.key);
    }
    else if(e.key === 'Enter') calcExpession(e);
    else if(e.key === 'Backspace') backspace(e);
    else if(e.key === 'Escape') clear(e);
    else if(e.key === '.')
    {
        if(!inputDiv.textContent.includes('.')) inputDiv.textContent = inputDiv.textContent + e.key;
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

const backButton = document.querySelector('.backspace-btn');
backButton.addEventListener('click', backspace);

const randomButton = document.querySelector('.rand-btn');
randomButton.addEventListener('click', random);
