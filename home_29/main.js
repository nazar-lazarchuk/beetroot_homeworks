/* Середній*/
let firstName = prompt("Як до вас звертатись?");
alert(`Привіт, ${firstName}!`);

let year = +prompt(`${firstName}, введи свій рік народження`);
const CURRENT_YEAR = 2021;
let age = CURRENT_YEAR - year;
alert(`Значить вам ${age} років`);

let length = +prompt(`${firstName}, введи довжину сторони квадрату?`);
let perimeter = 4 * length;
alert(`периметр квадрату рівний ${perimeter}`);

//Максимум

let radius = +prompt(`Введи радіус кола`);
const PI = 3.14;
let circleArea = PI * radius**2;
alert(`площа кола становитиме ${circleArea}`);

let lengthCity = +prompt(`Введи відстань між двома містами у кілометрах`);
let time = +prompt(`За скільки потрібно дістатись до іншого міста?`);
let speed = lengthCity / time;
alert(`Вам потрібно рухатись зі швидкістю ${speed}кілометрів на годину щоб встигнути вчасно`);

let dollar = +prompt(`Введи сумму в доларах, яку потрібно конвертувати в євро`);
const EXCHANGE_RATE = 0.88;
let euro = dollar * EXCHANGE_RATE;
alert(`Ваша сумма становить ${euro} євро`);