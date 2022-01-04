alert("Привіт я твій математичний калькулятор");
const circleRadius = prompt("Введи радіус кола");
const circleConstant = 3.14;
const circleSquere = circleConstant * circleRadius**2;
alert(`Радіус введеного кола = ${circleSquere}`)

let distance = prompt("Вкажіть відстань між містами");
let time = prompt("Вкажіть час за який ви б хотіли туди доїхати")
let averageSpeed = distance/time;
alert(`Отже вам потрібно іхати не менше ${averageSpeed} км/год`)

alert("Привіт я розумний конвертор валют");
let amountDollars = prompt("Введіть кількість грошових одиниць в $")
const exchangeValue = 0.88;
let amountEuros = amountDollars*exchangeValue;
alert(`Твоя сумма грошей становить ${amountEuros} EUR`)
