'use strict';

// Point 1. Bank deposit

const bank_rate = 0.05;
const number_of_mounths = 2;
let mounthly_rate = Math.round(bank_rate * 1000000 / 12) / 1000000;

console.log(bank_rate);
console.log(number_of_mounths);
console.log(mounthly_rate);

let deposit = prompt('Please, enter the ammount of money, you wanna to put in.');

console.log(deposit);

let simple_interest = Math.round(Number(deposit) * mounthly_rate * number_of_mounths * 100) / 100;

console.log(simple_interest);

let combined_interest = Math.round((Number(deposit) * ((mounthly_rate + 1) ** number_of_mounths) - Number(deposit)) * 100) / 100;

console.log(combined_interest);

let deposit_simple_interest = Number(deposit) + simple_interest;
let deposit_combined_interest = Number(deposit) + combined_interest;

console.log(deposit_simple_interest);
console.log(deposit_combined_interest);

alert(`Using a simple rate during ${number_of_mounths} mounths, the interest will be ${simple_interest} $. 
(Total deposit ammount - ${deposit_simple_interest} $).
Using a combined rate, the interest will be ${combined_interest} $. 
(Total deposit ammount - ${deposit_combined_interest} $).`);

// Point 2. Something

let smth1 = 2 && 0 && 3;
let smth2 = 2 || 0 || 3;
let smth3 = 2 && 0 || 3;

console.log(smth1);
console.log(smth2);
console.log(smth3);