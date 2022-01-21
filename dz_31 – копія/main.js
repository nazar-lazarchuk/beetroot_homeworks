/*Мінімум*/


/* 
Запитай у користувача його вік і визначи, ким він є: дитиною (0-11), підлітком (12-17), дорослим (18_59) або пенсіонером (60 ...), передбач можливість введення невірних даних.

const userAge = +prompt("Введіть свій вік");
const childAge = 11;
const teenagerAge = 17;
const adultAge = 18;
const penseoneerAge = 60;
if (userAge <=childAge && userAge > 0) {
    console.log('Ви дитина');
}else if (userAge > childAge && userAge<= teenagerAge){
    console.log('Ви підліток');
}else if (userAge > teenagerAge && userAge < penseoneerAge){
    console.log('Ви дорослий');
}else if (userAge >= penseoneerAge && userAge <=100 ){
    console.log('Ви пенсіонер');
}else{
    console.log('Перевірте введене число та введіть заново');
    const userAge = +prompt("Введіть свій вік");
} */


/* 
Запитай у користувача число від 0 до 9 і виведи йому спецсимвол, який розташований на цій клавіші (1 !, 2 @, 3 # і т. д).

let userNumber = +prompt("Введіть число")
if (userNumber === 1){
    console.log ('!');
}else if (userNumber === 2){
    console.log ('@');
}else if (userNumber === 3){
    console.log ('#');
}else if (userNumber === 4){
    console.log ('$');
}else if (userNumber === 5){
    console.log ('%');
}else if (userNumber === 6){
    console.log ('^');
}else if (userNumber === 7){
    console.log ('&');
}else if (userNumber === 8){
    console.log ('*');
}else if (userNumber === 9){
    console.log ('(');
}else{
    console.log("Введіть заново число в проміжку від 1 до 9");
    let userNumber = +prompt("Введіть число");
} */

/* 
Підрахуй суму всіх чисел в заданому користувачем діапазоні.

 function sumRange (firstNumber, secondNumber) {
    let sumNumbers = 0;
    for(let index = firstNumber; index <= secondNumber; index++){
        sumNumbers += index;
    }
    return sumNumbers;
}
alert(sumRange(1, 10)) */

/*
Запитай у користувача 2 числа і знайди найбільший спільний дільник.


let userFirstNumber = +prompt('Введіть перше число');
let userSecondNumber = +prompt('Введіть друге число');
let dilnuk = 0;

while (userFirstNumber != userSecondNumber) {
    if (userFirstNumber > userSecondNumber) {
        userFirstNumber = userFirstNumber - userSecondNumber;
    } else{
        userSecondNumber = userSecondNumber - userFirstNumber;
    }
}
dilnuk = userFirstNumber;
alert(dilnuk);
*/

/* 
Запитай у користувача число і виведи всі дільники цього числа.

const userNumber = +prompt("Введіть число");
for (let i = 1; i <= userNumber; i++){
    if (userNumber % i === 0){
        console.log(i)
    }
}
*/

//НОРМА



/* 
Запитай у користувача суму покупки і виведи суму до оплати зі знижкою:
від 200 до 300 - знижка буде 3%; 
від 300 до 500 - 5%;
від 500 і вище - 7%.

const sumShopping =  +prompt("Введіть суму покупки");
const smallDiscount = 0.03;
const normalDiscount = 0.05;
const bigDiscount = 0.07;
let sumDiscount;
if(sumShopping < 200){
    sumDiscount = 0;
}
else if(sumShopping >= 200 && sumShopping < 300){
    sumDiscount = sumShopping * smallDiscount;
}else if(sumShopping < 500){
    sumDiscount = sumShopping * normalDiscount;
}else if(sumShopping >= 500){
    sumDiscount = sumShopping * bigDiscount;
}else if(sumShopping < 200){
    sumDiscount = 0;
}
console.log (Math.floor(sumDiscount));
*/

const weekDays = ['Понеділок', 'Вівторок', 'Середа', 'Четвер', 'П`ятниця', 'Субота', 'Неділя'];
let currentDay = 0;

while (confirm(`${weekDays[currentDay]}. Наступний день?`)) {
    currentDay = (currentDay + 1) % weekDays.length;
} 






//Максимум

/* 
Виведи таблицю множення для всіх чисел від 2 до 9. Кожне число необхідно помножити на числа від 1 до 10.

const userNumber = prompt("Введіть число");
function multiplyTable (input) {
    for (let multipler = 1; multipler <= 9; multipler++ ){
        dobytok = input*multipler;
        console.log (input + "*" + multipler + "=" + dobytok)
    }
}
multiplyTable(userNumber)
*/