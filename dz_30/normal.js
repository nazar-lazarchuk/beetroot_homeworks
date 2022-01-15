let sumMoney = +prompt("Введіть суму грошей в гаманці");
let priceChoclate = +prompt("Введіть ціну одної шоколадки");
let amountChoclates = Math.floor(sumMoney/priceChoclate);
let change = sumMoney%priceChoclate;
console.log(`За твої ${sumMoney} гривень ти зможеш придбати ${amountChoclates} шт шоколадок та отримати сдачу в розмірі ${change} гривень`);

let number = +prompt("Введіть трьохзначне число")
let firstNumber= number%10;
let secondNumber = Math.floor(number%100/10);
let thirdNumber =  Math.floor(number/100)
console.log(`Ваше число ${firstNumber}${secondNumber}${thirdNumber}`)
