
/*
    1.  Запитай у користувача його вік і визначи,
    ким він є: дитиною (0-11), підлітком (12-17), 
    дорослим (18_59) або пенсіонером (60 ...), 
    передбач можливість введення невірних даних.
*/

const age = +prompt('Сколько Вам лет?');
let isUserChild = age >= 0;
let isUserTeenager = age >= 12;
let isUserAdult = age >= 18;
let isUserOldAge = age >= 60;

if (isUserOldAge) {
    alert('Вы уже очень взрослый!')
} else if (isUserAdult) {
    alert('Отлично, тебе есть 18)')
} else if (isUserTeenager) {
    alert('Еще немного и тебе будет 18')
} else if (isUserChild) {
    alert('Привет малыш')
} else {
    alert('Упс, что-то пошло не так')
}

/*
    2.  Запитай у користувача число від 0 до 9 і виведи йому спецсимвол,
    який розташований на цій клавіші (1 !, 2 @, 3 # і т. д).
*/

//НЕ МОГУ ПОНЯТЬ КАК СДЕЛАТЬ ЭТУ ЗАДАЧУ
// const writeNumber = +prompt('введите цифру от 0-9')
// const zero = '0';
// const one = '1';
// let two = '2';
// let thre = '3';
// if (zero) {
//     alert(')')
// } else if (one) {
//     alert('!')
// }

/*
    3.  Підрахуй суму всіх чисел в заданому користувачем діапазоні.
*/

const firstNumber = +prompt("введите первое число");
const secondNumber = +prompt("введите второе число");
let sum = 0;
for (let i = firstNumber; i <= secondNumber; i++) {
  sum += i;
}
alert(sum);

/*
    4.  Запитай у користувача 2 числа і знайди найбільший спільний дільник.
*/
let a = +prompt("Введите первое число");
let b = +prompt("Введите второе число");
let answer;
while (a!=b) {
    if (a>b) {
        a = a - b;
    }
    else {
        b = b - a;
    }
}
answer = a;
alert(answer)

/*
    5.  Запитай у користувача число і виведи всі дільники цього числа.
*/

const inputNewNumber = 6;
for(let i = 1; i <= inputNewNumber; i++) {
    const isDivider = inputNewNumber % i === 0;

    if (isDivider) {
        console.log(i);
    }
}

/*
    1.  Запитай у користувача п’ятирозрядне число і визначи, чи є воно паліндромом.
*/
function isPalindrome(num) { 
    return num === Number(num.toString().split('').reverse().join(''));
  }

console.log(isPalindrome(19991));

/*
Норма 
    2.  Запитай у користувача суму покупки і виведи суму до оплати зі знижкою:
    від 200 до 300 - знижка буде 3%; 
    від 300 до 500 - 5%;
    від 500 і вище - 7%.
*/

const amount = +prompt('Сумма вашей покупки:')

if (amount < 200) {
    alert('Нет скидки')
}
else if (amount < 300) {
    
    alert('Итого: ' + (amount - amount / 100 * 3))
}
else if (amount < 500) {
    alert('Итого: ' + (amount - amount / 100 * 5))
}
else if (amount >= 500) {
    alert('Итого: ' + (amount - amount / 100 * 7))
}



