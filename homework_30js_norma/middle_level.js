//Норма
// Користувач вводить суму грошей в гаманці і ціну однієї шоколадки. Програма виводить скільки шоколадок може купити користувач і скільки здачі у нього залишиться.

//Задача про шоколадку

'use strict';

let sumWallet = +prompt ('How many dollars in your wallet?' , 'Type here'); //наявна сума

let priceChocolate = +prompt ('What price this chocolate' , 'Type here'); //ціна однієї шоколадки

let sumChocolate = sumWallet / priceChocolate; // кількість шоколадок, що можна купити

alert('You can to buy' + ' ' + ( Math.round(sumChocolate)) + ' ' + 'Chokolats');// Виводимо округлену кількість

let sumAfterBuy = ( Math.round(sumChocolate)) * priceChocolate;

alert('You spent' + ' ' + sumAfterBuy + 'dollars');

let balanceMoney = sumWallet - +(sumAfterBuy); // Визначаємо залишок грошей після покупки

alert('Balance of money are' + ' ' +  balanceMoney + 'dollars'); // Виводимо залишок грошей



// Запитай у користувача тризначне число і виведи його задом наперед. Для вирішення завдання тобі знадобиться оператор% (залишок від ділення).

//Задача про тризначне число

let a = prompt("Hello, type some three-digit number"); //запитуємо тризначне число
let b, sum = 0;
let z = a;
while(a > 0)
{
b = a % 10;
sum = sum * 10 + b;
a = parseInt(a / 10);
}
alert(sum); //виводимо перевернуте число



