"use strict";

// Point 1. Addition

let number1 = 0.1;
let number2 = 0.2;
let result1 = (number1 + number2).toFixed(1);

console.log(result1);

// Point 2. Addition 2

let str1 = "1";
let number3 = 2;

let result2 = Number(str1) + number3;

console.log(result2);

// Point 3. Flash-stick

let capacity = prompt('Enter the capacity of your flash-stick storage in Gb');
const file_capacity = 0.82;
let number_of_files = Math.floor(capacity / file_capacity);

console.log(number_of_files);
alert(`You can save only ${number_of_files} files`);