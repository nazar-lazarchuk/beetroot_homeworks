// 1 Запитай у користувача його вік і визначи, ким він є: дитиною (0-11), підлітком (12-17), дорослим (18_59) або пенсіонером (60 ...), передбач можливість введення невірних даних.

let age = prompt('What is your age?', 'type here');

if (age < 11) {
    alert('You are child');
} else if (age < 17) {
    alert('You are teenager');
} else if (age < 59) {
    alert('You are adult');
} else if (age < 130) {
    alert('You are retaired');
} else if (age < 2000) {
    alert('Maybe you are Dunkan Maklaud!');
} else if (age < 5000) {
    alert('You are Dracula! It is not impossible!');
} else {
    alert('You put incorrect data');
}


// 2 Запитай у користувача число від 0 до 9 і виведи йому спецсимвол, який розташований на цій клавіші (1 !, 2 @, 3 # і т. д).

let value = prompt('type figure from 0 to 9', 'type here');

if (value == 0) {
alert( ')' );
} else if (value == 1) {
alert( '!' );
} else if (value == 2) {
    alert( '@' );
} else if (value == 3) {
    alert( '#' );
} else if (value == 4) {
    alert( '$' );
} else if (value == 5) {
    alert( '%' );
} else if (value == 6) {
    alert( '^' );
} else if (value == 7) {
    alert( '?' );
} else if (value == 8) {
    alert( '*' );
} else if (value == 9) {
    alert( '(' );
} else {
alert( 'it is not a figure' );
}


// 3 Підрахуй суму всіх чисел в заданому користувачем діапазоні.

const n1 = +prompt('What is your min number?', 'type here'); 

const n2 = +prompt('What is your max number?', 'type here'); 

let sum = 0;

for (let i = n1; i <= n2; i++) {
    sum += i;
}
alert(sum);


// 4 Запитай у користувача 2 числа і знайди найбільший спільний дільник.

let x = +prompt('What is your first number?', 'type here');

let y = +prompt('What is your second number?', 'type here');

alert('your numbers are' + ' ' +  x + ' ' + 'and' + ' ' + y);

function dil (x, y) {
	if (y > x) return dil(y, x);
	if (!y) return x;
	return dil(y, x % y);
}
console.log(dil(25, 625));


// 5 Запитай у користувача числo і знайди всі дільники цього числа.

// не зробив!!!

// Задача із норми. Запитай у користувача суму покупки і виведи суму до оплати зі знижкою:
// від 200 до 300 - знижка буде 3%; 
// від 300 до 500 - 5%;
// від 500 і вище - 7%.

let sumPurchase = prompt('What is your sum of purchase?', 'type here');

if (sumPurchase < 200) {
    alert('You dont have any discount');
} else if (sumPurchase < 300) {
    alert('You have discount 3%,' + ' ' + 'your amount has become' + ' ' + sumPurchase * 0.97);
} else if (sumPurchase < 500) {
    alert('You have discount 5%,' + ' ' + 'your amount has become' + ' ' + sumPurchase * 0.95);
} else {
    alert('You have discount 7%,' + ' ' + 'your amount has become' + ' ' + sumPurchase * 0.93);
}