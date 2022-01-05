let amountMoney = +prompt("Введіть кількість грошей, які хотіли б поставити на депозит")
const depositProcent = 5;
let recievedMoney = amountMoney*(depositProcent/6)/100;
console.log(`При депозиті на два місяці Ви отримаєте ${(amountMoney+recievedMoney).toFixed(1)} грн`);

