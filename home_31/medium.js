//Норма
let ask = +prompt('Введіть пятизначне число');
let palindrome = function isPalindrome(a) {
    let b = 0
    if (a < 0) return false;
    if (a % 10 === 0) return false;
    if (a < 10) return true;
    while (a > b) {
        console.log(a, b)
        b *= 10;
        b += a % 10;
        a = Math.trunc(a / 10); 
    }
console.log(a, b);
return a === b || a === Math.trunc(b / 10);
}
console.log(palindrome(ask));
alert(palindrome(ask) ? 'Це число паліндром' : 'Це число не паліндром');


let i = prompt('Введіть суму покупки і дізнайтесь яка сума буде зі знижкою');
if (i <= 0) { alert('Навірні дані') };
if (i <= 200) { alert(i) };
if (i > 200 && i <= 300) { alert(i / 100 * 97) };
if (i > 300 && i <= 500) { alert(i / 100 * 95) };
if (i > 500) { alert(i / 100 * 93) };


let allNumbers = [];
let numbMain = '';
for (let i = 0; i < 10; i++) {
    numbMain = prompt("Введіть число або натисніть Отмена щоб завершити.");
    if (numbMain === null || numbMain === "") break;
    else {
        allNumbers.push(numbMain);
    }
};
console.log(allNumbers);
console.log(allNumbers.length);
let numbZero = 0;
let numbPlus = 0;
let numbMinus = 0;
for (i = 0; i < allNumbers.length; i++ ) {
    if (allNumbers[i] == 0)
    numbZero++;
    if (allNumbers[i] > 0)
    numbPlus++;
    if (allNumbers[i] < 0)
    numbMinus++;
};
console.log(numbZero, numbPlus, numbMinus);
alert(`Загальна сума: нулі - ${numbZero}, 
позитивні числа - ${numbPlus}, 
негативні числа - ${numbMinus}.`);


let weekDays = ['Понеділок', 'Вівторок', 'Середа', 'Четвер', 'П`ятниця', 'Субота', 'Неділя'];
let currentDay = 0;
while (confirm(`${weekDays[currentDay]}. Хочеш побачити наступний день?`)) {
    currentDay = (currentDay + 1) % weekDays.length;
} ;