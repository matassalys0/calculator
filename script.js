'use strict'

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



let operation = {
    num1: 5,
    num2: 10,
    operator: '*'
}

console.log(operate(operation));