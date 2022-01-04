
let userName = prompt('Введіть ваше ім\'я');
alert(`Привіт, ${userName}!`);


let userBirthday = prompt(`${userName} введіть рік народження`);
const CURRENT_DATE = '2022';
let userAge = CURRENT_DATE - userBirthday;
alert(`Вам ${userAge} років`);


let lengthSide = prompt(`Давайте визничимо периметр квадрату. Введіть довжину сторони`);
let perimeter = lengthSide*4;
alert(`Отже, периметр квадрату = ${perimeter}`);


let radius = prompt(`Давайте визначимо площу кола, введіть радіус`);
const PI = 3.14;
let circle = PI * (radius*radius);
alert(`Отже, площа кола = ${circle}`);

